import { formatDate } from "../../utils/dateUtil";
import StatCard from "./StatCard";

const StatCards = ({selectedFriend}) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <StatCard
        title={selectedFriend.days_since_contact}
        text='Days Since Contact'
      />

      <StatCard
        title={selectedFriend.goal}
        text='Goal (Days)'
      />

      <StatCard
        title={formatDate(selectedFriend.next_due_date)}
        text='Next Due'
      />
  </div>
  );
};

export default StatCards;