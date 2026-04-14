import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import StatsPieChart from "../components/StatsPage/StatsPieChart";
import NoDataMessage from "../components/shared/NoDataMessage";

const StatsPage = () => {
  const { timelines } = useContext(TimelineContext);

  const typeCount = (type) => {
    return timelines.filter(t => t.type === type).length;
  }
  
  const chartData = [
    { type:'Text', value: typeCount('Text'), fill: '#7F37F5'},
    { type:'Call', value: typeCount('Call'), fill: '#244D3F'},
    { type:'Video', value: typeCount('Video'), fill: '#37A163'}
  ]

  return (
    <section className="bg-[#F8FAFC] grow px-4 py-10 lg:py-20">
      <div className="max-w-277.5 mx-auto space-y-6">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#1F2937]">Friendship Analytics</h2>

        <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
          <h4 className="font-medium text-xl text-[#244D3F]">
            By Interaction Type
          </h4>

          {
            timelines.length === 0 ? (
              <NoDataMessage />
            ) : (
              <StatsPieChart chartData={chartData} />
            )
          }
        </div>
      </div>
    </section>
  );
};

export default StatsPage;