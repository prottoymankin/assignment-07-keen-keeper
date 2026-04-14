const RelationshipGoal = ({ days }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-[#244D3F] font-medium text-xl">Relationship Goal</h4>
        <button className="btn">Edit</button>
      </div>

      <p className="text-gray-500 text-lg">Connent every <span className="font-bold text-[#1F2937]">{days} days</span></p>
    </div>
  );
};

export default RelationshipGoal;