import { createContext, useState } from "react";

export const TimelineContext = createContext();

export const TimelineContextProvider = ({ children }) => {
  const [timelines, setTimelines] = useState([]);

  const handleTimeline = (friendDetails, type) => {
    const currentDate = new Date().toISOString().slice(0, 10);
    friendDetails = {...friendDetails, type, callingDate: currentDate };
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