import FriendCard from "./FriendCard";

const FriendCards = ({friendsData}) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {
        friendsData.map(friendData => (
          <FriendCard
            key={friendData.id}
            friendData={friendData}
          />
        ))
      }
    </div>
  );
};

export default FriendCards;