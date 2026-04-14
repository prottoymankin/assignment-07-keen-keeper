const StatCard = ({title, text}) => {
  return (
    <div 
      className="bg-white flex flex-col items-center justify-center gap-2 p-8 rounded-lg shadow-sm text-center"
    >
      <span className="font-semibold text-2xl text-[#244D3F]">
        {title}
      </span>

      <span className="text-gray-500 text-lg grow">{text}</span>
    </div>
  );
};

export default StatCard;