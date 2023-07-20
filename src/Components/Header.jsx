import HeaderImage from '../assets/headerimage.svg';

const Header = () => {
  return (
    <div className="h-[80vh] px-6 sm:px-16 lg:grid lg:grid-cols-2 justify-between items-center">
      <div className="">
        <h1 className="text-[52px] leading-[72px] text-primary-100 font-semibold sm:text-[72px] sm:leading-[100px]">
          Your Ultimate Business <br className="hidden sm:block" />
          <span className="text-gradient">Finance Solution</span>
        </h1>
        <p
          className={`font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          Monitor, analyze, and optimize your company's finances with ease. From
          expense tracking to budget planning, take charge of your business's
          financial future today!
        </p>
      </div>
      <img src={HeaderImage} className="w-full h-full" />
    </div>
  );
};

export default Header;
