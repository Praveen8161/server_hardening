import { FaInfoCircle } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { FaRegCircle } from "react-icons/fa6";

ChartJS.register(ArcElement, Tooltip, Legend);

const Security_donut_chart = () => {
  return (
    <section className="relative flex-grow px-3 py-5 bg-white rounded-lg max-w-[70%]">
      <div className="flex flex-row items-center justify-between ">
        <p className="text-xl font-bold "> Vulnerability</p>
        <p className="absolute right-6 top-16">
          <FaInfoCircle size={20} color="gray" />
        </p>
      </div>
      <div className="max-h-[90vh] md:max-h-[50vh] min-w-full flex flex-row justify-center gap-5">
        <>
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
                  data: [12, 19, 3],
                  backgroundColor: ["red", "#d6d658", "#53c153"],
                  borderColor: ["red", "#d6d658", "#53c153"],
                  borderWidth: 1,
                },
              ],
            }}
          />
        </>
        <div className="flex flex-row self-center gap-5 ">
          {/*  */}
          <div className="flex flex-row gap-3">
            <p className="flex flex-col items-end mt-1">
              <span>
                <FaRegCircle
                  color="red"
                  className="bg-green-500 rounded-full "
                />
              </span>
            </p>
            <p className="flex flex-col ">
              <span>High</span> <span>65%</span>
            </p>
          </div>
          {/*  */}
          <div className="flex flex-row gap-3">
            <p className="flex flex-col items-end mt-1">
              <span>
                <FaRegCircle
                  color="red"
                  className="bg-yellow-500 rounded-full "
                />
              </span>
            </p>
            <p className="flex flex-col ">
              <span>Medium</span> <span>20%</span>
            </p>
          </div>
          {/*  */}
          <div className="flex flex-row gap-3">
            <p className="flex flex-col items-end mt-1">
              <span>
                <FaRegCircle color="red" className="bg-red-500 rounded-full " />
              </span>
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
