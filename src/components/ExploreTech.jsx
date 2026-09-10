import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import data from "../data/card-data.json";

const ExploreTech = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("data/card-data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const handleClick = (id, category) => {
    const isExist = stack.find((card) => card.category === category);
    if (isExist) {
      return toast.warn(`1/1 ${category} category already selected`);
    }
    const selectedTech = data.find((card) => card.id === id);
    setStack([...stack, selectedTech]);
    return toast.success("Tech added.");
  };

  const handleDelete = (id) => {
    setStack(stack.filter((tech) => tech.id !== id));
    toast.success("Tech removed.");
  };

  const handleReset = () => {
    setStack([]);
    toast.success("All tech removed.");
  };

  return (
    <section className="mt-16 flex flex-col gap-8 px-[7%] text-white">
      <div className="text-white">
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
          Explore the <span className="text-[#db2777]">Technologies</span>
        </h2>

        <p className="text-base lg:text-lg mt-3 text-white/70">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row mt-6 gap-8 lg:gap-10">
        <div className="w-full lg:w-[75%] grid grid-cols-1 lg:grid-cols-3 gap-5">
          {loading ? (
            <p className="text-white text-center">Loading...</p>
          ) : (
            data.map((card) => (
              <div
                key={card.id}
                className="bg-surface-raised border border-border-bright rounded-xl p-4 flex flex-col justify-between"
              >
                <div className="flex justify-between items-center">
                  <img
                    className="w-10 h-10 object-contain"
                    src={card.icon}
                    alt=""
                  />

                  <span className="bg-blue-200 text-blue-500 font-semibold text-xs px-2.5 py-1 rounded-md">
                    {card.badge}
                  </span>
                </div>

                <div className="flex flex-col gap-3 mt-5">
                  <h5 className="text-xl font-semibold">{card.name}</h5>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="flex gap-2 justify-between items-center text-sm">
                    <p className="bg-gray-800 px-2.5 py-1 rounded-md">
                      {card.category}
                    </p>

                    <p className="text-white/70">{card.difficulty}</p>

                    <p className="flex justify-center items-center gap-1.5">
                      <FaStar className="text-yellow-400" />
                      {card.rating}
                    </p>
                  </div>
                </div>

                <button
                  className="text-white bg-zinc-800 border border-zinc-600 w-full py-2.5 mt-5 rounded-lg font-semibold cursor-pointer hover:bg-zinc-700 transition-colors "
                  onClick={() => handleClick(card.id, card.category)}
                >
                  Add to Stack
                </button>
              </div>
            ))
          )}
        </div>

        <div className="w-full lg:w-[25%]">
          <div className="bg-surface-raised border border-border-bright rounded-xl p-4">
            <h5 className="text-2xl font-semibold">Your Stack</h5>

            {stack.length == 0 ? (
              <div className="border border-dashed border-border-bright p-4 flex justify-center items-center rounded-xl text-gray-500 mt-6 min-h-24">
                Your stack is empty
              </div>
            ) : (
              <div className="flex flex-col gap-3 mt-5">
                {stack.map((data) => (
                  <div
                    key={data.id}
                    className="bg-zinc-800 border border-zinc-600 rounded-lg flex items-center justify-between p-3"
                  >
                    <div className="flex gap-2.5 items-center">
                      <div className="flex justify-between items-center">
                        <img
                          className="w-7 h-7 object-contain"
                          src={data.icon}
                          alt=""
                        />
                      </div>

                      <p className="text-sm font-medium">{data.name}</p>
                    </div>

                    <button
                      className="cursor-pointer text-white/60 hover:text-white transition-colors"
                      onClick={() => handleDelete(data.id)}
                    >
                      <RxCross2 className="text-xl" />
                    </button>
                  </div>
                ))}

                <button
                  className="mt-3 border border-red-500/70 text-red-500 text-base font-semibold py-2 rounded-lg hover:bg-red-500/10 transition-colors"
                  onClick={() => handleReset()}
                >
                  Remove all
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="dark"
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover
        draggable
        limit={4}
      />
    </section>
  );
};

export default ExploreTech;
