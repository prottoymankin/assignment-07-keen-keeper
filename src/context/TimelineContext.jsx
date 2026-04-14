import { createContext, useState } from "react";
import { formatDate } from "../utils/dateUtil";

export const TimelineContext = createContext();

export const TimelineContextProvider = ({ children }) => {
  const [timelines, setTimelines] = useState([]);

  const handleTimeline = (friendDetails, type) => {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    console.log(formattedDate);

    friendDetails = {...friendDetails, type, callingDate: formattedDate };
    
    setTimelines(prev => [...prev, friendDetails]);
  }

  const value = {
    timelines,
    handleTimeline
  };

  return (
    <TimelineContext.Provider value={value}>
      {children}
    </TimelineContext.Provider>
  );
};