import { useState } from "react";
import Side_Bar from "../Components/Side_Bar";
import Top_Nav from "../Components/Top_Nav";
import Chart_section from "../Components/Chart_section";
import Reports_component from "../Components/Reports_component";
import Footer from "../Components/Footer";

const Server_hardening = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className=" flex flex-row ">
      {/* Side Bar */}
      {showSideBar && (
        <div className=" min-h-[100vh] min-w-[20%] max-w-max py-2 px-3">
          <Side_Bar />
        </div>
      )}

      <div className=" flex flex-col w-full min-h-screen">
        {/* Top Bar */}
        <Top_Nav setShowSideBar={setShowSideBar} />

        {/* Main Container */}
        <main className=" px-10 flex flex-col gap-6 bg-slate-200 pt-6 flex-grow pb-5">
          <div className=" flex flex-row justify-between items-center">
            <p className=" font-bold text-lg">server hardening</p>
            <p>Date</p>
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
