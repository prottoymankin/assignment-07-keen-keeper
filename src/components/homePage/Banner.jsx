import { FaPlus } from "react-icons/fa";
import SummeryCard from "./SummeryCard";
import useFriendsData from "../../hooks/useFriendsData";

const Banner = () => {
  const { friendsData } = useFriendsData();
  const onTrackFriends = friendsData.filter(friend => friend.status === 'on-track');
  const overdueFriends = friendsData.filter(friend => friend.status === 'overdue');

  return (
    <section 
      className="border-b border-b-gray-200 max-w-277.5 mb-10 mx-auto pb-10 pt-10 md:pt-20 px-4 space-y-10 text-center"
    >
      <div>
        <h1 className="font-bold text-5xl text-[#1F2937]">
          Friends to keep close in your life
        </h1>
        
        <p className="max-w-xl mb-8 mt-4 mx-auto text-gray-500">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <button className="bg-[#244D3F] btn text-white">
          <FaPlus />
          <span>Add a friend</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummeryCard
          count={friendsData.length}
          title='Total Friends'
        />

        <SummeryCard
          count={onTrackFriends.length}
          title='On Track'
        />

        <SummeryCard
          count={overdueFriends.length}
          title='Need Attention'
        />

        <SummeryCard
          count={12}
          title='Interactions This Month'
        />
      </div>
    </section>
  );
};

export default Banner;