const CheckInButton = ( { title, func, icon } ) => {
  return (
    <button
      onClick={func} 
      className="cursor-pointer duration-200 flex flex-col items-center gap-2 p-4 rounded-lg shadow-sm text-lg text-[#1F2937] transition active:scale-95"
    >
      <span className="text-3xl">{icon}</span>
      {title}
    </button>
  );
};

export default CheckInButton;