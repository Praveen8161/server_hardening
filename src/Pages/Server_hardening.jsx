import { useState } from "react";
import Side_Bar from "../Components/Side_Bar";
import Top_Nav from "../Components/Top_Nav";
import { FaInfoCircle } from "react-icons/fa";

const Server_hardening = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className=" flex flex-row ">
      <div className=" min-h-[100vh] border-r-2 shadow-md min-w-[20%] max-w-max py-2 px-3">
        <Side_Bar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      </div>
      <div className=" flex flex-col w-full">
        <Top_Nav />
        <main className=" px-10 flex flex-col gap-8">
          <section>
            {/*  */}
            <div className=" flex flex-row justify-between items-center">
              <p>server hardening</p>
              <p>Date</p>
            </div>

            {/* Charts */}
            <div className=" border py-2">
              <div className=" flex justify-between flex-row items-center px-3 shadow-sm">
                <p className=" text-xl font-bold text-sky-700">
                  {" "}
                  Overall Statistics
                </p>
                <p>
                  <FaInfoCircle size={20} color="gray" />
                </p>
              </div>
              <hr />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Server_hardening;
