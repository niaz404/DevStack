import { IoMenu } from "react-icons/io5";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="bg-surface text-white flex px-[7%] py-[0.75%] justify-between items-center border-b border-border-subtle fixed w-full top-0">
      {/* logo */}
      <div className="flex items-center">
        <div className="lg:hidden text-3xl mr-3">
          <IoMenu />
        </div>

        <Logo />
      </div>

      {/* navigation */}
      <nav className="hidden lg:flex">
        <ol className="flex justify-center items-center gap-9 text-[15px] font-medium">
          <li className="cursor-pointer activePage">Home</li>
          <li className="cursor-pointer">Technologies</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ol>
      </nav>

      {/* action buttons */}
      <div className="flex justify-center items-center gap-2 font-semibold text-white/90 text-sm">
        <button className="px-4 py-2 rounded-3xl hover:bg-white/5 transition-colors">
          Sign In
        </button>

        <button className="bg-[#db2777] px-4 py-2 rounded-3xl hover:bg-[#be185d] transition-colors">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
