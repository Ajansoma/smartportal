import { useState } from 'react';
import smartlogo from '../assets/smartlogo.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import { Link } from 'react-router-dom';
import { linkData } from '../data';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = function () {
    setToggleMenu((prevState) => !prevState);
  };

  const Menu = (
    <ul className="md:flex gap-6">
      {linkData.map((data) => (
        <li key={data.link} className="mb-4">
          <Link to={data.link}>{data.title}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="flex items-center justify-between w-full py-6 sm:px-16 px-6 sticky">
      <Link to="/">
        <img src={smartlogo} />
      </Link>
      <div className="hidden md:flex">{Menu}</div>

      {!toggleMenu && (
        <img
          src={menu}
          className="block cursor-pointer md:hidden"
          onClick={handleToggleMenu}
        />
      )}
      {toggleMenu && (
        <img
          src={close}
          className="w-[25px] cursor-pointer"
          onClick={handleToggleMenu}
        />
      )}
      {toggleMenu && (
        <div className="absolute right-8 top-24 bg-white drop-shadow-md p-10 rounded-lg">
          {Menu}
        </div>
      )}
    </div>
  );
};

export default Navbar;
