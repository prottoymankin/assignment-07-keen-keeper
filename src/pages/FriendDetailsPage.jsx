import { useParams } from "react-router";
import useFriendsData from "../hooks/useFriendsData";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { PiArchive } from "react-icons/pi";
import { FiTrash2 } from "react-icons/fi";
import QuickCheckIn from "../components/FriendDetailsPage/QuickCheckIn";
import RelationshipGoal from "../components/FriendDetailsPage/RelationshipGoal";
import StatCards from "../components/FriendDetailsPage/StatCards";
import Loader from "../components/shared/Loader";
import ProfileCard from "../components/FriendDetailsPage/ProfileCard";

const FriendDetailsPage = () => {
  const { id } = useParams();
  const { friendsData, isLoading } = useFriendsData();

  const selectedFriend = friendsData.find(friend => friend.id === parseInt(id));

  return (
    <section className="bg-[#F8FAFC] px-4 py-10 lg:py-20">
      { isLoading ? (
        <Loader />
      ) : (
        <div className="grid lg:grid-cols-12 gap-6 max-w-277.5 mx-auto">
          <div className="flex flex-col gap-4 lg:col-span-4">
            <ProfileCard selectedFriend={selectedFriend} />

            <div className="flex justify-center flex-wrap lg:flex-col gap-2">
              <button className="btn">
                <HiOutlineBellSnooze />
                <span>Snooze 2 Weeks</span>
              </button>

              <button className="btn">
                <PiArchive />
                <span>Archive</span>
              </button>

              <button className="btn text-red-600">
                <FiTrash2 />
                <span>Delete</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <StatCards selectedFriend={selectedFriend} />
            <RelationshipGoal days={selectedFriend.goal} />
            <QuickCheckIn />
          </div>
        </div>
      )}
    </section>
  );
};

export default FriendDetailsPage;