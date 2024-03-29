/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Side_Bar from "./Side_Bar";
import Top_Nav from "./Top_Nav";
import DatePicker from "react-datepicker";
import Footer from "./Footer";
import Security_reports from "./Security_reports";
import Security_Data_Display from "./Security_Data_Display";
import Security_Bar_Chart from "./Security_Bar_Chart";
import Security_donut_chart from "./Security_donut_chart";
import Security_overallCharts from "./Security_overallCharts";

const Security = ({ name }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [month, setMonth] = useState(new Date());
  const sideBarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
      setShowSideBar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" flex flex-row max-w-[100vw]">
      {/* Side Bar */}
      {showSideBar && (
        <div
          ref={sideBarRef}
          className=" min-w-[20%] max-w-[80%] sm:max-w-max py-2 px-3 lg:static top-0 bottom-0 fixed bg-white min-h-screen max-h-max flex-grow z-10"
        >
          <Side_Bar />
        </div>
      )}

      <div className="flex flex-col w-full min-h-screen ">
        {/* Top Bar */}
        <Top_Nav setShowSideBar={setShowSideBar} />

        {/* Main Container */}
        <main className="flex flex-col flex-grow gap-6 px-2 pt-6 pb-5 md:px-10 bg-slate-200">
          {/* Header */}
          <div className="flex flex-row items-center justify-between ">
            <p className="text-lg font-bold ">{name}</p>
            <div>
              {" "}
              <DatePicker
                showPopperArrow={false}
                closeOnScroll={true}
                selected={month}
                onChange={setMonth}
                dateFormat="MMM yyyy"
                showMonthYearPicker
                className=" px-3 py-1 rounded-md bg-sky-400 text-white cursor-pointer max-w-[100px]"
                popperPlacement="right"
              />{" "}
            </div>
          </div>

          {/* Security Data Display */}
          <Security_Data_Display />

          {/* security Charts Bar Type */}
          <Security_Bar_Chart name={name} />

          {/* security Circle Chart */}
          <div className="flex flex-row justify-between gap-8 ">
            <Security_donut_chart />
            <Security_overallCharts />
          </div>

          {/* Reports */}
          <>
            <Security_reports name={name} />
          </>
          <>
            <Footer />
          </>
        </main>
      </div>
    </div>
  );
};

export default Security;
