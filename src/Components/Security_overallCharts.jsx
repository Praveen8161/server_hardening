import { useState } from "react";
import { labels } from "../helpers/ChartsData";
import Single_Bar from "./Single_Bar";

const Security_overallCharts = () => {
  const [selectValue, setSelectValue] = useState("Jan");

  return (
    <div className=" max-w-[35%] rounded-lg bg-white w-full px-16 py-5 flex flex-col gap-5">
      <div className="flex flex-row justify-between gap-3">
        <span className="text-xl font-bold ">Overall Attacks</span>
        {/* Select  */}
        <div>
          <select
            name="HeadlineAct"
            id="HeadlineAct"
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
            className="self-center w-full px-2 py-1 text-gray-700 border border-gray-300 rounded-md"
          >
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
          </select>
        </div>
      </div>
      {/* Overall Charts */}
      <div className="flex flex-row justify-between flex-grow gap-1">
        {labels.slice(0, 6).map((val, idx) => (
          <Single_Bar key={idx + val} val={val} />
        ))}
      </div>
    </div>
  );
};

export default Security_overallCharts;
