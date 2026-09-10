const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-2.5">
      <div className="gradient-logo font-extrabold h-9 w-9 flex justify-center items-center rounded-md text-sm">
        DS
      </div>

      <div className="text-[22px] font-bold">
        Dev<span className="text-[#db2777]">Stack</span>
      </div>
    </div>
  );
};

export default Logo;
