import { Link } from 'react-router';
import logo from '../../../assets/logo.png';
import { RiHome2Line, RiMenu2Line } from 'react-icons/ri';
import { CiClock2 } from 'react-icons/ci';
import { GoGraph } from 'react-icons/go';
import NavigationLink from './NavigationLink';

const Navbar = () => {
  const navLinks = [
    { to: '/', title: 'Home', icon: <RiHome2Line /> },
    { to: '/timeline', title: 'Timeline', icon: <CiClock2 /> },
    { to: '/stats', title: 'Stats', icon: <GoGraph /> }
  ]

  return (
    <header className="border-b border-b-gray-200 p-4">
      <nav className="flex items-center justify-between max-w-360 mx-auto">
        <div className='flex items-center gap-3'>
          <button className='btn md:hidden'>
            <RiMenu2Line />
          </button>

          <Link to='/'>
            <img src={logo} alt="brand logo" />
          </Link>
        </div>

        <ul className='hidden md:flex items-center'>
          {
            navLinks.map((navLink, index) => (
              <li key={index}>
                <NavigationLink navLink={navLink} />
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;