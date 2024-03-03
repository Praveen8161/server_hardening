import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";

const Security_Data_Display = () => {
  return (
    <section className="flex flex-row items-center justify-center gap-3 ">
      {/* Vulnerability */}
      <div className="flex flex-row items-center justify-center flex-grow gap-3 px-5 py-8 bg-white rounded-lg shadow-md ">
        <div className="flex flex-col items-center justify-center gap-1 ">
          <span className="text-7xl text-[#006F9E] font-semibold ">180</span>
          <span>Vulnerability</span>
          <p className="flex flex-row items-center gap-1 text-red-400">
            Decrease in average
            <span>
              <BiSolidDownArrow size={10} />
            </span>
            10.78%
          </p>
        </div>
        {/* Divider code */}
        <div className="min-h-[80px] border-2 border-[#006F9E] "> </div>
        <p>
          <img src="/images/vul.svg" alt="vulnerability" />
        </p>
      </div>

      {/* Fixed */}
      <div className="flex flex-row items-center justify-center flex-grow gap-3 px-5 py-8 bg-white rounded-lg shadow-md ">
        <div className="flex flex-col items-center justify-center gap-1 ">
          <span className="text-7xl text-[#006F9E] font-semibold ">80</span>
          <span>Vulnerability</span>
          <p className="flex flex-row items-center gap-1 text-green-400">
            Increase in average
            <span>
              <BiSolidUpArrow size={10} />
            </span>
            10.78%
          </p>
        </div>
        {/* Divider code */}
        <div className="min-h-[80px] border-2 border-[#006F9E] "> </div>
        <p>
          <img src="/images/fixed.svg" alt="fixed" />
        </p>
      </div>

      {/* No Fixed */}
      <div className="flex flex-row items-center justify-center flex-grow gap-3 px-5 py-8 bg-white rounded-lg shadow-md ">
        <div className="flex flex-col items-center justify-center gap-1 ">
          <span className="text-7xl text-[#006F9E] font-semibold ">120</span>
          <span>Vulnerability</span>
          <p className="flex flex-row items-center gap-1 text-green-400">
            Increase in average
            <span>
              <BiSolidUpArrow size={10} />
            </span>
            5%
          </p>
        </div>
        {/* Divider code */}
        <div className="min-h-[80px] border-2 border-[#006F9E] "> </div>
        <p>
          <img src="/images/notFixed.svg" alt="not fixed" />
        </p>
      </div>
    </section>
  );
};

export default Security_Data_Display;
