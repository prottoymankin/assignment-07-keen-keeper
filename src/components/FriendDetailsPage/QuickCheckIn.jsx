import { FiPhoneCall, FiVideo } from "react-icons/fi";
import CheckInButton from "./CheckInButton";
import { BsChatLeftDots } from "react-icons/bs";

const QuickCheckIn = ({ selectedFriend }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h4 className="text-[#244D3F] font-medium text-xl">
          Quick Check-In
        </h4>

        <div className="grid grid-cols-3 gap-4">
          <CheckInButton 
            title='Call'
            icon={<FiPhoneCall />}
            selectedFriend={selectedFriend}
          />

          <CheckInButton
            title='Text'
            icon={<BsChatLeftDots />}
            selectedFriend={selectedFriend}
          />

          <CheckInButton
            title='Video'
            icon={<FiVideo />}
            selectedFriend={selectedFriend}
          />
        </div>
    </div>
  );
};

export default QuickCheckIn;