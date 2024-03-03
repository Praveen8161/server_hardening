import { BiSolidUpArrow } from "react-icons/bi";

const Security_Chart_data = () => {
  return (
    <div className="flex flex-row items-center gap-3">
      <>
        <div className="min-h-[80px] max-w-[2px] bg-gray-200 flex-grow "> </div>
        <div className="flex flex-col ">
          <p>Total</p>
          <div className="flex flex-row gap-8">
            <p className="text-xl font-semibold">62</p>
            <p className="flex flex-row text-green-700 ">
              <span className="self-center ">
                <BiSolidUpArrow size={10} />
              </span>
              <span className="self-center ">10.78%</span>
            </p>
          </div>
        </div>
      </>

      <>
        <div className="min-h-[80px] max-w-[2px] bg-gray-200 flex-grow ml-3">
          {" "}
        </div>
        <div className="flex flex-col ">
          <p>Fixed</p>
          <div className="flex flex-row gap-8">
            <p className="text-xl font-semibold">12</p>
            <p className="flex flex-row text-green-700 ">
              <span className="self-center ">
                <BiSolidUpArrow size={10} />
              </span>
              <span className="self-center ">1.08%</span>
            </p>
          </div>
        </div>
      </>

      <>
        <div className="min-h-[80px] max-w-[2px] bg-gray-200 flex-grow ml-3 ">
          {" "}
        </div>
        <div className="flex flex-col ">
          <p>Not Fixed</p>
          <div className="flex flex-row gap-8">
            <p className="text-xl font-semibold">301</p>
            <p className="flex flex-row text-green-700 ">
              <span className="self-center ">
                <BiSolidUpArrow size={10} />
              </span>
              <span className="self-center ">5.90%</span>
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Security_Chart_data;
