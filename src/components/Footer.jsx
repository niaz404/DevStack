import { BsDot } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-surface-raised mt-20">
      <div className="flex justify-between bg-surface-raised px-[7%] pb-[3%] pt-[4%]">
        <div className="text-white flex flex-col gap-4">
          <div className="rounded-lg overflow-hidden w-36 m-auto lg:ml-0">
            <img src="logo-text.png" alt="" className="bg-white w-full" />
          </div>

          <p className="text-gray-400 text-base lg:text-lg text-center lg:text-start max-w-lg leading-relaxed">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="flex gap-3 items-center justify-center lg:justify-start text-sm lg:text-base">
            <button className="cursor-pointer hover:text-white transition-colors">
              GitHub
            </button>

            <BsDot className="lg:hidden" />

            <button className="cursor-pointer hover:text-white transition-colors">
              Twitter
            </button>

            <BsDot className="lg:hidden" />

            <button className="cursor-pointer hover:text-white transition-colors">
              LinkeDin
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <h4 className="text-sm font-semibold tracking-wide text-white">
            PRODUCT
          </h4>

          <ul className="text-base text-white/50 mt-4 space-y-2">
            <li>Home</li>
            <li>Technologies</li>
            <li>Project</li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <h4 className="text-sm font-semibold tracking-wide text-white">
            COMPANY
          </h4>

          <ul className="text-base text-white/50 mt-4 space-y-2">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <h4 className="text-sm font-semibold tracking-wide text-white">
            LEGAL
          </h4>

          <ul className="text-base text-white/50 mt-4 space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <p className="py-7 text-gray-500 text-sm text-center border-t border-border-subtle">
        © 2026 Dev Stack. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
