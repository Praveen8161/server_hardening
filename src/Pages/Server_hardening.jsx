import { useState } from "react";
import Side_Bar from "../Components/Side_Bar";
import Top_Nav from "../Components/Top_Nav";
import Chart_section from "../Components/Chart_section";
import Reports_component from "../Components/Reports_component";
import Footer from "../Components/Footer";
import DatePicker from "react-datepicker";

const Server_hardening = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [month, setMonth] = useState(new Date());
  return (
    <div className=" flex flex-row max-w-[100vw]">
      {/* Side Bar */}
      {showSideBar && (
        <div className=" min-w-[20%] max-w-max py-2 px-3 lg:static top-0 -bottom-1 absolute bg-white min-h-screen max-h-max flex-grow z-10">
          <Side_Bar />
        </div>
      )}

      <div className=" flex flex-col w-full min-h-screen">
        {/* Top Bar */}
        <Top_Nav setShowSideBar={setShowSideBar} />

        {/* Main Container */}
        <main className=" px-2 md:px-10 flex flex-col gap-6 bg-slate-200 pt-6 flex-grow pb-5">
          <div className=" flex flex-row justify-between items-center">
            <p className=" font-bold text-lg">server hardening</p>
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

          {/* Chart Section */}
          <>
            <Chart_section />
          </>

          <>
            <Reports_component />
          </>

          <>
            <Footer />
          </>
        </main>
      </div>
    </div>
  );
};

export default Server_hardening;
