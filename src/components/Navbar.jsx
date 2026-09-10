import { IoMenu } from "react-icons/io5";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="bg-surface text-white flex px-[7%] py-[1%] justify-between items-center border-b border-border-subtle sticky">
      {/* logo */}
      <div>
        <div className="lg:hidden text-4xl">
          <IoMenu />
        </div>
        <Logo />
      </div>
      {/* navigation */}
      <nav className="hidden lg:flex">
        <ol className="flex justify-center items-center gap-8 text-lg">
          <li className="cursor-pointer activePage">Home</li>
          <li className="cursor-pointer">Technologies</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ol>
      </nav>
      {/* action buttons */}
      <div className="flex justify-center items-center font-bold text-white/90">
        <button className="px-4 rounded-3xl py-2">Sign In</button>
        <button className="bg-[#db2777] px-4 rounded-3xl py-2">Sign Up</button>
      </div>
    </header>
  );
};

export default Navbar;
