const ProfileCard = ({ selectedFriend }) => {
  return (
    <div 
      className="bg-white flex flex-col items-center gap-3 p-6 rounded-lg shadow-sm text-center"
    >
      <div className="h-20 w-20 overflow-hidden rounded-full">
        <img 
          src={selectedFriend.picture} 
          alt={selectedFriend.name}
          className="h-full w-full object-cover" 
        />
      </div>

      <h3 className="font-semibold text-xl text-[#1F2937]">{selectedFriend.name}</h3>

      <div className="flex flex-col gap-2 items-center">
        <div 
          className={
            `font-medium mx-auto px-2 py-1 rounded-full text-xs text-white w-fit ${selectedFriend.status === 'overdue' && 'bg-red-600'} ${selectedFriend.status === 'almost due' && 'bg-[#EFAD44]'} ${selectedFriend.status === 'on-track' && 'bg-[#244D3F]'}`
          }
        >
          {selectedFriend.status}
        </div>

        <div className="flex justify-center gap-2">
          {
            selectedFriend.tags.map((tag, index) => (
              <div
                key={index}
                className="bg-green-200 font-medium px-2 py-1 rounded-full text-xs  text-[#244D3F]"
              >
                {tag}
              </div>
            ))
          }
        </div>
      </div>

      <p className="font-medium italic text-gray-500">
        {selectedFriend.bio}
      </p>

      <p className="text-gray-500 text-sm">Preferred: email</p>
    </div>
  );
};

export default ProfileCard;