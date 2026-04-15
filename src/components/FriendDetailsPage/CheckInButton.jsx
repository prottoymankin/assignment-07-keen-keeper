import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import { toast } from "react-toastify";

const CheckInButton = ( { title, icon, selectedFriend } ) => {
  const { handleTimeline } = useContext(TimelineContext);
  
  return (
    <button
      onClick={() => {
        handleTimeline(selectedFriend, title);
        toast.success(`${title} with ${selectedFriend.name}`);
      }} 
      className="cursor-pointer duration-200 flex flex-col items-center gap-2 p-4 rounded-lg shadow-sm text-lg text-[#1F2937] transition active:scale-95"
    >
      <span className="text-3xl">{icon}</span>
      {title}
    </button>
  );
};

export default CheckInButton;