import { NavLink } from "react-router";

const NavigationLink = ({ navLink }) => {
  const { to, title, icon } = navLink;

  return (
    <NavLink
      to={to}
      className={
        ({ isActive }) => (
          `flex items-center gap-1 font-semibold px-4 py-3 rounded-sm text-gray-500 ${isActive && 'bg-[#244D3F] text-white'}`
        )
      }
    >
      {icon}
      {title}
    </NavLink>
  );
};

export default NavigationLink;