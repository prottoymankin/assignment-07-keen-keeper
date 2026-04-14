import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import TimelineCard from "../components/TimelinePage/TimelineCard";

const TimelinePage = () => {
  const { timelines } = useContext(TimelineContext);

  return (
    <section className="bg-[#F8FAFC] grow px-4 py-10 lg:py-20 w-full">
      <div className="max-w-277.5 mx-auto space-y-6">
        <header className="space-y-6">
          <h2 className="font-bold text-5xl text-[#1F2937]">Timeline</h2>

          <select defaultValue="Filter Timeline" className="select">
            <option disabled={true}>Filter Timeline</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </header>

        <div className="space-y-6">
          {
            timelines.map((timeline, index) => (
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