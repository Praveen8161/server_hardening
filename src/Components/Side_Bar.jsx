import { MdDashboard } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";

const Side_Bar = () => {
  return (
    <section className="flex flex-col gap-4 py-4 ">
      <div className="flex flex-col gap-3 ">
        <div className="flex justify-center flex-1 w-full mb-5 ">
          <img
            src="/images/logo.png"
            alt="logo"
            className="max-w-[150px] max-h-[150px] "
          />
        </div>
        <div className="flex flex-row items-center gap-3 flex-nowrap">
          <span>
            <MdDashboard size={25} />
          </span>
          <span className="font-semibold">Dashboard</span>
        </div>
      </div>

      <div>
        {/* Solutions */}
        <div>
          <p className="mb-2 font-semibold ">Solutions</p>
          <ul className="flex flex-col gap-4 px-3">
            <li className="cursor-pointer ">Network Security</li>
            <li className="cursor-pointer ">API Security</li>
            <li className="cursor-pointer ">Web Security</li>
            <li className="cursor-pointer ">Phishing and simulation</li>
            <li className="cursor-pointer ">dark Web</li>
            <li className="cursor-pointer ">Server Hardening</li>
            <li className="cursor-pointer ">SOC</li>
            <li className="cursor-pointer ">
              External Attack Surface Monitoring
            </li>
            <li className="cursor-pointer ">Perimeter security review</li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <p className="mt-5 mb-2 font-semibold ">Others</p>
          <ul className="flex flex-col gap-4 px-3">
            <li className="flex flex-row items-center gap-2 cursor-pointer flex-nowrap">
              {" "}
              <span className="ml-2 ">
                <FiPlusCircle size={20} />
              </span>
              <span>Calender</span>
            </li>
            <li className="flex flex-row items-center gap-2 cursor-pointer flex-nowrap">
              {" "}
              <span className="ml-2 ">
                <FiPlusCircle size={20} />
              </span>
              <span>Escalation Matrix</span>
            </li>
            <li className="flex flex-row items-center gap-2 cursor-pointer flex-nowrap">
              {" "}
              <span className="ml-2 ">
                <FiPlusCircle size={20} />
              </span>
              <span>Assessment management</span>
            </li>
            <li className="flex flex-row items-center gap-2 cursor-pointer flex-nowrap">
              {" "}
              <span className="ml-2 ">
                <FiPlusCircle size={20} />
              </span>
              <span>Account settings</span>
            </li>
            <li className="flex flex-row items-center gap-2 cursor-pointer flex-nowrap">
              {" "}
              <span className="ml-2 ">
                <FiPlusCircle size={20} />
              </span>
              <span>Feedback</span>
            </li>
          </ul>
        </div>
        {/* Logout */}
        <div className="flex flex-row items-center gap-3 mt-8 cursor-pointer flex-nowrap">
          <span>
            <IoLogOutOutline size={25} />
          </span>
          <span className="self-center font-semibold ">Logout</span>
        </div>
      </div>
    </section>
  );
};

export default Side_Bar;
