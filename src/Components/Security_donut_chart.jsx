import { FaInfoCircle } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Security_donut_chart = () => {
  return (
    <section className="relative flex-grow px-5 py-5 pb-10 bg-white rounded-lg max-w-[65%]">
      <div className="flex flex-row items-center justify-between ">
        <p className="text-xl font-bold "> Vulnerability</p>
        <p className="absolute right-6 top-16">
          <FaInfoCircle size={20} color="gray" />
        </p>
      </div>
      <div className="max-h-[90vh] md:max-h-[50vh] min-w-full flex flex-row justify-center items-center gap-10 relative ">
        <div className="relative self-center mt-8 max-w-[200px]">
          <Doughnut
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
            data={{
              labels: ["High", "Medium", "Low"],
              datasets: [
                {
                  data: [15, 20, 65],
                  backgroundColor: ["red", "#d6d658", "#53c153"],
                  borderColor: ["red", "#d6d658", "#53c153"],
                  borderWidth: 1,
                },
              ],
            }}
          />
          <div className="absolute text-sm font-semibold w-12 h-12 flex justify-center items-center bg-white rounded-full shadow-md -bottom-1 left-[15%]">
            65%
          </div>
          <div className="absolute flex items-center justify-center w-12 h-12 text-sm font-semibold bg-white rounded-full shadow-md -right-4 top-[40%] ">
            20%
          </div>
          <div className="absolute flex items-center justify-center w-12 h-12 text-sm font-semibold bg-white rounded-full shadow-md -top-1 right-6 ">
            15%
          </div>
        </div>
        <div className="flex flex-row self-center gap-5 ml-10 text-lg font-medium ">
          {/*  */}
          <div className="flex flex-row gap-2">
            <p className="flex flex-col items-end mt-[6px]">
              <span className="mt-[2px] w-3 h-3 rounded-full bg-green-500"></span>
            </p>
            <p className="flex flex-col ">
              <span>High</span> <span>65%</span>
            </p>
          </div>
          {/*  */}
          <div className="flex flex-row gap-2">
            <p className="flex flex-col items-end mt-[6px]">
              <span className="mt-[2px] w-3 h-3 rounded-full bg-yellow-500"></span>
            </p>
            <p className="flex flex-col ">
              <span>Medium</span> <span>20%</span>
            </p>
          </div>
          {/*  */}
          <div className="flex flex-row gap-2">
            <p className="flex flex-col items-end mt-[6px]">
              <span className="mt-[2px] w-3 h-3 rounded-full bg-red-500"></span>
            </p>
            <p className="flex flex-col ">
              <span>Low</span> <span>15%</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security_donut_chart;
