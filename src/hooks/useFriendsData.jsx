import { useEffect, useState } from "react";

const useFriendsData = () => {
  const [friendsData, setFriendsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFriendsData = async () => {
      const response = await fetch('/friends.json');
      const data = await response.json();
      setFriendsData(data);
      setIsLoading(false);
    }

    fetchFriendsData();
  }, []);

  return {
    friendsData,
    isLoading
  }
};

export default useFriendsData;