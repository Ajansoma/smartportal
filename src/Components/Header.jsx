import HeaderImage from '../assets/headerimage.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="lg:h-screen lg:grid lg:grid-cols-2 justify-between items-center">
      <div className="">
        <h1 className="text-[52px] leading-[72px] text-sec-300 font-semibold sm:text-[72px] sm:leading-[100px]">
          Your Ultimate Business <br className="hidden sm:block" />
          <span className="text-gradient">Finance Solution</span>
        </h1>
        <p
          className={`font-normal text-[18px] leading-[30.8px] max-w-[470px] mt-5 mb-7`}
        >
          Monitor, analyze, and optimize your company's finances with ease. From
          expense tracking to budget planning, take charge of your business's
          financial future today!
        </p>
        <Link
          to="/register"
          className="bg-sec-500 text-sec-600 hover:border-2 duration-300 p-3 rounded-lg font-semibold uppercase"
        >
          Get Started
        </Link>
      </div>
      <div className="relative mt-12 lg:mt-0">
        <img src={HeaderImage} className="w-full h-full z-10" />
        <div className="w-[40%] h-[40%] z-0 absolute top-0 pink__gradient"></div>
        <div className="w-[80%] h-[80%] rounded-full z-[1] absolute top-0 white__gradient"></div>
        <div className="w-[50%] h-[50%] z-0 absolute right-20 bottom-20 blue__gradient"></div>
      </div>
    </div>
  );
};

export default Header;
