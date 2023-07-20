import smartlogo from '../assets/smartlogo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full py-6 sm:px-16 px-6">
      <Link to="/">
        <img src={smartlogo} />
      </Link>
      <div className=" flex gap-6">
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/help">Help</Link>
        <Link to="/aboutus">About Us</Link>
      </div>
    </div>
  );
};

export default Navbar;
