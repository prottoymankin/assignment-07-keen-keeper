import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router";

const Sidebar = ({showSidebar, setShowSidebar}) => {
  return (
    <div
      onClick={() => setShowSidebar(false)} 
      className={
        `fixed top-0 left-0 w-full min-h-screen transform duration-500 z-9 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`
      }
    >
      <div className='max-w-sm bg-white min-h-screen shadow-md relative z-10'>
        <button
          onClick={() => setShowSidebar(false)}
          className='absolute top-5 right-5 btn btn-circle text-lg bg-[#244D3F] text-white'
        >
          <IoMdClose />
        </button>

        <div className="flex flex-col gap-4 text-center pt-25 px-6 ">
          <NavLink 
            to='/'
            className={({isActive}) => (
              `py-3 rounded-lg border border-gray-200 ${isActive && 'bg-[#244D3F] text-white'}`
            )}
          >
            Home
          </NavLink>

          <NavLink 
            to='/timeline'
            className={({isActive}) => (
              `py-3 rounded-lg border border-gray-200 ${isActive && 'bg-[#244D3F] text-white'}`
            )}
          >
            Timeline
          </NavLink>

          <NavLink 
            to='/stats'
            className={({isActive}) => (
              `py-3 rounded-lg border border-gray-200 ${isActive && 'bg-[#244D3F] text-white'}`
            )}
          >
            Stats
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;