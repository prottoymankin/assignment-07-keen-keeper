import { useContext, useEffect, useState } from "react";
import { TimelineContext } from "../context/TimelineContext";
import TimelineCard from "../components/TimelinePage/TimelineCard";
import NoDataMessage from "../components/shared/NoDataMessage";

const TimelinePage = () => {
  const { timelines } = useContext(TimelineContext);
  const [sortType, setSortType] = useState('');
  const [filterType, setFilterType] = useState('');
  const [processedData, setProcessedData] = useState(timelines);
  const [searchedText, setSearchedText] = useState('');

  const handleTimelineSearching = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchedText(value);
    setProcessedData(timelines.filter(t => t.name.toLowerCase().includes(value)));
  }

  const handleSortType = (e) => {
    setSortType(e.target.value);

  }

  const handleTimelineFiltering = (e) => {
    const value = e.target.value;
    setFilterType(value);

    if (value === 'Default') {
      setProcessedData(timelines);
      return;
    }

    setProcessedData(timelines.filter(t => t.type === value))
  }

  // For Sorting
  useEffect(() => {
    if (sortType === 'Oldest') {
      setProcessedData(
        [...timelines].sort(
          (a, b) => new Date(a.callingDate) - new Date(b.callingDate)
        )
      );
    } else if (sortType === 'Newest') {
      setProcessedData(
        [...timelines].sort(
          (a, b) => new Date(b.callingDate) - new Date(a.callingDate)
        )
      );
    } else {
      setProcessedData(timelines);
    }
  }, [sortType]);

  return (
    <section className="bg-[#F8FAFC] grow px-4 py-10 lg:py-20 w-full">
      <div className="max-w-277.5 mx-auto space-y-6">
        <header className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#1F2937]">Timeline</h2>

            <label className="input">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" defaultValue={searchedText} onChange={handleTimelineSearching} placeholder="Search" />
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <select defaultValue='Filter by' className="select" onChange={handleTimelineFiltering}>
              <option disabled={true}>Filter by</option>
              <option>Default</option>
              <option>Call</option>
              <option>Text</option>
              <option>Video</option>
            </select>

            <select 
              defaultValue='Sort by' 
              className="select"
              name="filterType"
              onChange={handleSortType}
            >
              <option disabled={true}>Sort by</option>
              <option>Default</option>
              <option>Oldest</option>
              <option>Newest</option>
            </select>
          </div>
        </header>

        {
          processedData.length === 0 ? (
            <NoDataMessage />
          ) : (
            <div className="space-y-6">
              {
                processedData.map((timeline, index) => (
                  <TimelineCard
                    key={index}
                    timeline={timeline}
                  />
                ))
              }
            </div>
          )
        }

      </div>
    </section>
  );
};

export default TimelinePage;