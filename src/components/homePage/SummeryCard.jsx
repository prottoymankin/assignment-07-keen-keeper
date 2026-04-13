const SummeryCard = ({count, title}) => {
  return (
    <div 
      className="bg-white flex flex-col items-center justify-center gap-2 p-8 rounded-lg shadow-sm"
    >
      <span className="font-semibold text-[32px] text-[#244D3F]">{count}</span>
      <span className="text-gray-500 text-lg grow">{title}</span>
    </div>
  );
};

export default SummeryCard;