import { FaInfoCircle } from "react-icons/fa";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { labels, options } from "../helpers/ChartsData";

const Chart_section = () => {
  return (
    <section className=" shadow-lg bg-white rounded-lg px-4 py-2">
      {/*  */}

      {/* Charts heading */}
      <div className="py-10">
        <div className=" flex justify-between flex-row items-center">
          <p className=" text-xl font-bold text-sky-700"> Overall Statistics</p>
          <p>
            <FaInfoCircle size={20} color="gray" />
          </p>
        </div>
      </div>
      <hr />

      {/* Chart visual */}
      <div className="max-h-[90vh] md:max-h-[50vh] min-w-full flex justify-center">
        <Bar
          options={options}
          data={{
            labels: labels,
            datasets: [
              {
                label: "Alerts",
                data: labels.map(
                  () => Math.floor(Math.random() * (176 - 15)) + 1
                ),
                backgroundColor: "#f97316",
              },
              {
                label: "Resolved",
                data: labels.map(
                  () => Math.floor(Math.random() * (100 - 15)) + 1
                ),
                backgroundColor: "#0823d1",
              },
            ],
          }}
        />
      </div>
    </section>
  );
};

export default Chart_section;
