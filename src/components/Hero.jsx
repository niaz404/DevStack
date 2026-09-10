import banner from "../assets/banner-stack.png";
const Hero = () => {
  return (
    <div className="flex justify-between items-center w-full px-[7%] py-[1%] mt-16">
      {/* info */}
      <div className="text-white flex flex-col gap-10 w-[50%]">
        {/* heading */}
        <div className="text-7xl font-bold ">
          <h1>
            Build Your Ideal{" "}
            <span className="gradient-text">Development Stack</span>
          </h1>
        </div>
        {/* description */}
        <div>
          <p className="text-xl">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
        </div>
        {/* action buttons */}
        <div className="flex gap-5 text-lg font-semibold">
          <button className="gradient-button py-1 px-2 rounded">
            Explore Technologies
          </button>
          <button className="border border-border py-1 px-10 rounded">
            Lern More
          </button>
        </div>
      </div>
      {/* image */}
      <div>
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Hero;
