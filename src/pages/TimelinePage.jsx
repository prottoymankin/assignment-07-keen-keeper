import { useContext, useEffect, useState } from "react";
import { TimelineContext } from "../context/TimelineContext";
import TimelineCard from "../components/TimelinePage/TimelineCard";

const TimelinePage = () => {
  const { timelines } = useContext(TimelineContext);
  const [sortType, setSortType] = useState("Default");
  const [fillteredTimelines, setFilteredTimelines] = useState(timelines);

  const handleSortType = (e) => {
    setSortType(e.target.value);
  }

  useEffect(() => {
    if (sortType === 'Oldest') {
      setFilteredTimelines(prev => (
        [...prev].sort((a, b) => new Date(a.callingDate) - new Date(b.callingDate))
      ));
    } else if (sortType === 'Newest') {
      setFilteredTimelines(prev => (
        [...prev].sort((a, b) => new Date(b.callingDate) - new Date(a.callingDate))
      ));
    } else {
      setFilteredTimelines(timelines);
    }
  }, [sortType])

  return (
    <section className="bg-[#F8FAFC] grow px-4 py-10 lg:py-20 w-full">
      <div className="max-w-277.5 mx-auto space-y-6">
        <header className="space-y-6">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#1F2937]">Timeline</h2>

          <select 
            defaultValue={sortType} 
            className="select"
            name="filterType"
            onChange={handleSortType}
          >
            <option>Default</option>
            <option>Oldest</option>
            <option>Newest</option>
          </select>
        </header>

        <div className="space-y-6">
          {
            fillteredTimelines.map((timeline, index) => (
              <TimelineCard
                key={index}
                timeline={timeline}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default TimelinePage;