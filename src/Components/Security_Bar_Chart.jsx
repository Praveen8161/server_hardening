/* eslint-disable react/prop-types */
import { securityBarLabels, securityBarOptions } from "../helpers/ChartsData";
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
import Security_Chart_data from "./Security_Chart_data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Security_Bar_Chart = ({ name }) => {
  return (
    <section className="px-4 py-2 bg-white rounded-lg shadow-lg ">
      {/*  */}

      {/* Charts heading */}
      <div className="py-10">
        <div className="flex flex-col gap-3 ">
          <p className="text-xl font-bold "> {name}</p>
          <p>Reports</p>
        </div>
      </div>
      <hr className="mb-5" />

      {/* Charts Datas */}
      <>
        <Security_Chart_data />
      </>

      {/* Chart visual */}
      <div className="max-h-[90vh] md:max-h-[50vh] min-w-full flex justify-center">
        <Bar
          options={securityBarOptions}
          data={{
            labels: securityBarLabels,
            datasets: [
              {
                label: "Total",
                data: securityBarLabels.map(() =>
                  Math.floor(Math.random() * (666 - 0))
                ),
                backgroundColor: "red",
              },
              {
                label: "Not Fixed",
                data: securityBarLabels.map(() =>
                  Math.floor(Math.random() * (888 - 16))
                ),
                backgroundColor: "#d6d658",
              },
              {
                label: "Fixed",
                data: securityBarLabels.map(() =>
                  Math.floor(Math.random() * (950 - 17))
                ),
                backgroundColor: "#53c153",
              },
            ],
          }}
        />
      </div>
    </section>
  );
};

export default Security_Bar_Chart;
