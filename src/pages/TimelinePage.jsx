import { useContext, useEffect, useState } from "react";
import { TimelineContext } from "../context/TimelineContext";
import TimelineCard from "../components/TimelinePage/TimelineCard";
import NoDataMessage from "../components/shared/NoDataMessage";

const TimelinePage = () => {
  const { timelines } = useContext(TimelineContext);
  const [sortType, setSortType] = useState('');
  const [filterType, setFilterType] = useState('');
  const [processedData, setProcessedData] = useState(timelines);

  const handleSortType = (e) => {
    setSortType(e.target.value);
  }

  const handleFilterType = (e) => {
    setFilterType(e.target.value);
  }

  // For Sorting
  useEffect(() => {
    if (sortType === 'Oldest') {
      setProcessedData(prev => (
        [...prev].sort((a, b) => new Date(a.callingDate) - new Date(b.callingDate))
      ));
    } else if (sortType === 'Newest') {
      setProcessedData(prev => (
        [...prev].sort((a, b) => new Date(b.callingDate) - new Date(a.callingDate))
      ));
    } else {
      setProcessedData(timelines);
    }
  }, [sortType]);

  useEffect(() => {
    if (filterType === 'Call') {
      setProcessedData(timelines);
      setProcessedData(prev => (
        prev.filter(t => t.type === 'Call')
      ))
    } else if (filterType === 'Text') {
      setProcessedData(timelines);
      setProcessedData(prev => (
        prev.filter(t => t.type === 'Text')
      ))
    } else if (filterType === 'Video') {
      setProcessedData(timelines);
      setProcessedData(prev => (
        prev.filter(t => t.type === 'Video')
      ))
    } else {
      setProcessedData(timelines);
    }
  }, [filterType]);

  return (
    <section className="bg-[#F8FAFC] grow px-4 py-10 lg:py-20 w-full">
      <div className="max-w-277.5 mx-auto space-y-6">
        <header className="space-y-6">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#1F2937]">Timeline</h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <select defaultValue='Filter by' className="select" onChange={handleFilterType}>
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
          timelines.length === 0 ? (
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