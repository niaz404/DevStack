import { BsDot } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-surface-raised mt-20">
      <div className="flex justify-between bg-surface-raised px-[7%] pb-[2%] pt-[5%]">
        <div className="text-white flex flex-col gap-3">
          <div className="rounded-lg overflow-hidden w-36 m-auto lg:ml-0">
            <img src="logo-text.png" alt="" className="bg-white w-full" />
          </div>
          <p className="text-gray-400 text-lg text-center lg:text-start">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-3 items-center justify-center lg:justify-start">
            <button className="cursor-pointer">GitHub</button>
            <BsDot className=" lg:hidden" />
            <button className="cursor-pointer">Twitter</button>
            <BsDot className=" lg:hidden" />
            <button className="cursor-pointer">LinkeDin</button>
          </div>
        </div>
        <div className="hidden lg:block">
          <h4 className="text-xl text-white">PRODUCT</h4>
          <ul className="text-lg text-white/50 mt-5">
            <li>Home</li>
            <li>Technologies</li>
            <li>Project</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <h4 className="text-xl text-white">COMPANY</h4>
          <ul className="text-lg text-white/50 mt-5">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <h4 className="text-xl text-white">LEGAL</h4>
          <ul className="text-lg text-white/50 mt-5">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <p className="py-10 text-gray-500 text-center">
        © 2026 Dev Stack. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
