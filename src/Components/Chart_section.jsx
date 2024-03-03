import { FaInfoCircle } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { labels, options } from "../helpers/ChartsData";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Chart_section = () => {
  return (
    <section className="px-4 py-2 bg-white rounded-lg shadow-lg ">
      {/*  */}

      {/* Charts heading */}
      <div className="py-10">
        <div className="flex flex-row items-center justify-between ">
          <p className="text-xl font-bold text-sky-700"> Overall Statistics</p>
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
