import useFriendsData from "../../hooks/useFriendsData";
import FriendCards from "./FriendCards";

const FriendsList = () => {
  const { friendsData, isLoading } = useFriendsData();
  console.log(friendsData);

  return (
    <section className="max-w-277.5 pb-10 lg:pb-20 px-4 mx-auto">
      <h3 className="font-semibold mb-4 text-2xl text-[#1F2937]">
        Your Friends
      </h3>

      <FriendCards friendsData={friendsData} />
    </section>
  );
};

export default FriendsList;