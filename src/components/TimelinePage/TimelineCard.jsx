import callIcon from '../../assets/call.png';
import textIcon from '../../assets/text.png';
import videoIcon from '../../assets/video.png';
import { formatDate } from '../../utils/dateUtil';

const TimelineCard = ({ timeline }) => {
  const { name, type, callingDate } = timeline;

  return (
    <div 
      className="border border-gray-200 flex items-center gap-4 p-4 rounded-lg"
    >
      <img 
        src={
          type === 'Call' ? callIcon : type === 'Text' ? textIcon : videoIcon 
        } 
        alt={`${type} icon`} 
      />

      <div className='space-y-1'>
        <p className='text-gray-500 text-lg'>
          <span className='font-medium text-xl text-[#244D3F]'>{type}</span> with {name}
        </p>

        <p className='font-medium text-gray-500'>{formatDate(callingDate)}</p>
      </div>
    </div>
  );
};

export default TimelineCard;