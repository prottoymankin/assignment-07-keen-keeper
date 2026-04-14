import { Link } from "react-router";

const FriendCard = ({ friendData }) => {
  const { id, name, picture, days_since_contact, status, tags } = friendData;

  return (
    <Link 
      to={`/friend-details/${id}`}
      className="bg-white p-6 rounded-lg shadow-sm space-y-3 text-center"
    >
      <div className="h-20 w-20 mx-auto overflow-hidden rounded-full">
        <img 
          src={picture} 
          alt={name}  
          className="h-full w-full object-cover" />
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-xl text-[#1F2937]">{name}</h3>

        <p className="text-xs text-[#64748B]">{days_since_contact}d ago</p>

        <div className="flex justify-center gap-2">
          {
            tags.map((tag, index) => (
              <div
                key={index}
                className="bg-green-200 font-medium px-2 py-1 rounded-full text-xs  text-[#244D3F]"
              >
                {tag}
              </div>
            ))
          }
        </div>

        <div 
          className={
            `font-medium mx-auto px-2 py-1 rounded-full text-xs text-white w-fit ${status === 'overdue' && 'bg-red-600'} ${status === 'almost due' && 'bg-[#EFAD44]'} ${status === 'on-track' && 'bg-[#244D3F]'}`
          }
        >
          {status}
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;