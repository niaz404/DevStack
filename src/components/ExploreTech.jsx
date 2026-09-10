import { FaStar } from "react-icons/fa";

import data from "../data/card-data.json";
const ExploreTech = () => {
  return (
    <section className="mt-16 flex flex-col gap-10 px-[7%] text-white">
      <div className="text-white ">
        <h2 className="text-5xl font-bold">
          Explore the <span className="text-[#db2777]">Technologies</span>
        </h2>
        <p className="text-lg mt-4">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="flex mt-10 gap-20">
        <div className="w-[75%] grid grid-cols-3 gap-5">
          {data.map((card) => (
            <div
              key={card.id}
              className="bg-surface-raised border border-border-bright rounded-xl p-3 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <img className="w-10" src={card.icon} alt="" />
                <span className="bg-blue-200 text-blue-500 font-semibold text-sm px-2 rounded">
                  {card.badge}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <h5 className="text-2xl font-semibold">{card.name}</h5>
                <p className="text-gray-400">{card.description}</p>
                <div className="flex gap-3 justify-between items-center">
                  <p className="bg-gray-800 px-2 rounded">{card.category}</p>
                  <p>{card.difficulty}</p>
                  <p className="flex justify-center items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    {card.rating}
                  </p>
                </div>
              </div>

              <button className="text-white bg-zinc-800 border border-zinc-600 w-full py-2 mt-4 rounded-xl font-semibold cursor-pointer">
                Add to Stack
              </button>
            </div>
          ))}
        </div>
        <div className="w-[25%]">
          <div className="bg-surface-raised border border-border-bright rounded-xl p-3">
            <h5 className="text-3xl font-semibold">Your Stack</h5>

            <div className="border border-dashed p-3 flex justify-center items-center rounded-2xl text-gray-500 mt-10">Your stack is empty</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreTech;
