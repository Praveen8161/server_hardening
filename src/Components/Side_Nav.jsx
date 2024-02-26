import { MdDashboard } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";

const Side_Nav = () => {
  return (
    <section className=" flex flex-col gap-4">
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
          <ul className="px-3 flex flex-col gap-2">
            <li>Network Security</li>
            <li>API Security</li>
            <li>Web Security</li>
            <li>Phishing and simulation</li>
            <li>dark Web</li>
            <li>Server Hardening</li>
            <li>SOC</li>
            <li>External Attack Surface Monitoring</li>
            <li>Perimeter security review</li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <p className=" font-semibold mb-2">Others</p>
          <ul className="px-3 flex flex-col gap-2">
            <li className=" items-center gap-2 flex flex-row flex-nowrap">
              {" "}
              <span className=" ml-2">
                <FiPlusCircle size={20} />
              </span>
              <span>Calender</span>
            </li>
            <li className=" items-center gap-2 flex flex-row flex-nowrap">
              {" "}
              <span className=" ml-2">
                <FiPlusCircle size={20} />
              </span>
              <span>Escalation Matrix</span>
            </li>
            <li className=" items-center gap-2 flex flex-row flex-nowrap">
              {" "}
              <span className=" ml-2">
                <FiPlusCircle size={20} />
              </span>
              <span>Assessment management</span>
            </li>
            <li className=" items-center gap-2 flex flex-row flex-nowrap">
              {" "}
              <span className=" ml-2">
                <FiPlusCircle size={20} />
              </span>
              <span>Account settings</span>
            </li>
            <li className=" items-center gap-2 flex flex-row flex-nowrap">
              {" "}
              <span className=" ml-2">
                <FiPlusCircle size={20} />
              </span>
              <span>Feedback</span>
            </li>
          </ul>
        </div>
        {/* Logout */}
        <div className=" flex flex-row flex-nowrap gap-3 mt-5 items-center ">
          <span>
            <IoLogOutOutline size={20} />
          </span>
          <span className=" font-semibold self-center ">Logout</span>
        </div>
      </div>
    </section>
  );
};

export default Side_Nav;
