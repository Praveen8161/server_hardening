/* eslint-disable react/prop-types */
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaExpand } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { PiCircleHalfTiltFill } from "react-icons/pi";

const Top_Nav = ({ setShowSideBar }) => {
  function handleSideBar() {
    setShowSideBar((prev) => !prev);
  }
  return (
    <nav className="  px-4 py-2 flex flex-row justify-between border-b shadow-sm">
      <div className=" flex flex-row  gap-3">
        <span className=" self-center cursor-pointer" onClick={handleSideBar}>
          <HiOutlineMenuAlt2 size={25} />
        </span>

        <span>
          <input
            type="search"
            placeholder="Search"
            className=" px-2 py-2 rounded-2xl border-gray-400 border text-sm "
          />
        </span>
      </div>

      <div className=" flex flex-roe gap-3 justify-center items-center">
        <span className=" border p-1 rounded-lg border-gray-400 cursor-pointer ">
          <FaExpand size={20} />
        </span>
        <span className=" border p-1 rounded-lg border-gray-400 cursor-pointer">
          <PiCircleHalfTiltFill size={20} className=" rotate-180" />
        </span>
        <span className=" border p-1 rounded-lg border-gray-400 cursor-pointer">
          <FaRegUser size={20} />
        </span>
      </div>
    </nav>
  );
};

export default Top_Nav;
