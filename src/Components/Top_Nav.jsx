/* eslint-disable react/prop-types */
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaExpand } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { PiCircleHalfTiltFill } from "react-icons/pi";

const Top_Nav = ({ setShowSideBar }) => {
  // Side Bar view
  function handleSideBar() {
    setShowSideBar((prev) => !prev);
  }
  return (
    <nav className="flex flex-row justify-between px-4 py-2 border-b shadow-sm ">
      <div className="flex flex-row gap-3 ">
        <span className="self-center cursor-pointer " onClick={handleSideBar}>
          <HiOutlineMenuAlt2 size={25} />
        </span>

        <span>
          <input
            type="search"
            placeholder="Search"
            className="px-2 py-2 text-sm border border-gray-400  rounded-2xl"
          />
        </span>
      </div>

      <div className="flex items-center justify-center gap-3  flex-roe">
        <span className="p-1 border border-gray-400 rounded-lg cursor-pointer ">
          <FaExpand size={20} />
        </span>
        <span className="p-1 border border-gray-400 rounded-lg cursor-pointer ">
          <PiCircleHalfTiltFill size={20} className="rotate-180 " />
        </span>
        <span className="p-1 border border-gray-400 rounded-lg cursor-pointer ">
          <FaRegUser size={20} />
        </span>
      </div>
    </nav>
  );
};

export default Top_Nav;
