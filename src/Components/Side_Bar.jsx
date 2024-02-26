import { MdDashboard } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";

const Side_Bar = () => {
  return (
    <section className=" flex flex-col gap-4 py-4">
      <div className=" flex flex-col gap-3">
        <div>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className=" flex flex-row flex-nowrap items-center gap-3">
          <span>
            <MdDashboard size={25} />
          </span>
          <span className="font-semibold">Dashboard</span>
        </div>
      </div>

      <div>
        {/* Solutions */}
        <div>
          <p className=" font-semibold mb-2">Solutions</p>
          <ul className="px-3 flex flex-col gap-4">
            <li className=" cursor-pointer">Network Security</li>
            <li className=" cursor-pointer">API Security</li>
            <li className=" cursor-pointer">Web Security</li>
            <li className=" cursor-pointer">Phishing and simulation</li>
            <li className=" cursor-pointer">dark Web</li>
            <li className=" cursor-pointer">Server Hardening</li>
            <li className=" cursor-pointer">SOC</li>
            <li className=" cursor-pointer">
              External Attack Surface Monitoring
            </li>
            <li className=" cursor-pointer">Perimeter security review</li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <p className=" font-semibold mb-2 mt-5">Others</p>
          <ul className="px-3 flex flex-col gap-4">
            <li className=" items-center cursor-pointer gap-2 flex flex-row flex-nowrap">
              {" "}
              <span className=" ml-2">
                <FiPlusCircle size={20} />
              </span>
              <span>Calender</span>
            </li>
            <li className=" items-center cursor-pointer gap-2 flex flex-row flex-nowrap">
              {" "}
              <span className=" ml-2">
                <FiPlusCircle size={20} />
              </span>
              <span>Escalation Matrix</span>
            </li>
            <li className=" items-center cursor-pointer gap-2 flex flex-row flex-nowrap">
              {" "}
              <span className=" ml-2">
                <FiPlusCircle size={20} />
              </span>
              <span>Assessment management</span>
            </li>
            <li className=" items-center cursor-pointer gap-2 flex flex-row flex-nowrap">
              {" "}
              <span className=" ml-2">
                <FiPlusCircle size={20} />
              </span>
              <span>Account settings</span>
            </li>
            <li className=" items-center cursor-pointer gap-2 flex flex-row flex-nowrap">
              {" "}
              <span className=" ml-2">
                <FiPlusCircle size={20} />
              </span>
              <span>Feedback</span>
            </li>
          </ul>
        </div>
        {/* Logout */}
        <div className=" flex flex-row flex-nowrap gap-3 cursor-pointer mt-8 items-center ">
          <span>
            <IoLogOutOutline size={25} />
          </span>
          <span className=" font-semibold self-center ">Logout</span>
        </div>
      </div>
    </section>
  );
};

export default Side_Bar;
