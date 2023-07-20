import smartLogo from '../assets/smartlogo.svg';
import { footerLinks } from '../data';
import { socialMedia } from '../data';

const Footer = () => {
  return (
    <section className="px-6 sm:px-16  bg-primary-300">
      <div>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={smartLogo}
            alt="smart logo"
            className="w-[14rem] object-contain"
          />
          <p className={`text-[18px] leading-[30.8px] max-w-[310px] mt-5`}>
            A new way to make the check your profit and loss statement
          </p>
        </div>
      </div>

      <div className="flex-[1.5] flex w-full justify-between flex-wrap md:mt-0 mt-10 mb-6">
        {footerLinks.map((footer) => (
          <div
            key={footer.id}
            className="flex flex-col ss:my-0 my-4 max-w-[150px]"
          >
            <h1 className="text-[18px] font-semibold leading-[27px] mb-4">
              {footer.title}
            </h1>
            <ul className="flex flex-col gap-3">
              {footer.links.map((link) => (
                <li
                  key={link.name}
                  className="text-[16px] leading-[24px] list-none cursor-pointer hover:text-primary-100"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="text-[18px] leading-[27px] text-center mb-4">
          2023 Smartaccount. All Rights Reserved.
        </p>
        <div className="flex gap-5 mt-6 md:mt-0">
          {socialMedia.map((social) => (
            <img
              key={social.id}
              src={social.icon}
              alt="social"
              className="w-[21px] h-[21px] object-contain cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
