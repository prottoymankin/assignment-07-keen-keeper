import { Legend, Pie, PieChart } from "recharts";

const StatsPieChart = ({ chartData }) => {
  return (
    <div>
      <PieChart style={
          { 
            width: '100%', 
            maxWidth: '350px',
            maxHeight: '80vh', 
            aspectRatio: 1,
            marginInline: 'auto',
            marginBottom: '24px'
          }
        } 
        responsive
      >
        <Pie
          data={chartData}
          innerRadius="80%"
          outerRadius="100%"
          cornerRadius="50%"
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          nameKey='type'
        />
        <Legend 
          iconSize={10}
          wrapperStyle={{
            paddingTop: "24px"
          }}
        />
      </PieChart>
    </div>
  );
};

export default StatsPieChart;