import banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center w-full px-[7%] py-[1%] mt-16 gap-12 lg:gap-8">
      {/* info */}
      <div className="text-white flex flex-col gap-7 w-full lg:w-[50%]">
        {/* heading */}
        <div className="text-5xl lg:text-6xl font-bold leading-[1.1]">
          <h1>
            Build Your Ideal{" "}
            <span className="gradient-text">Development Stack</span>
          </h1>
        </div>

        {/* description */}
        <div>
          <p className="text-lg lg:text-xl leading-relaxed text-white/80">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
        </div>

        {/* action buttons */}
        <div className="flex flex-wrap gap-4 text-base font-semibold">
          <button className="gradient-button py-2.5 px-5 rounded-md">
            Explore Technologies
          </button>

          <button className="border border-border py-2.5 px-6 rounded-md">
            Lern More
          </button>
        </div>
      </div>

      {/* image */}
      <div className="w-full lg:w-[45%] flex justify-center">
        <img
          src={banner}
          alt=""
          className="w-full max-w-[520px] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
