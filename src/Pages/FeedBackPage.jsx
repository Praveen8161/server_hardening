import { useEffect, useRef, useState } from "react";
import Side_Bar from "../Components/Side_Bar";
import Top_Nav from "../Components/Top_Nav";

const FeedBackPage = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const sideBarRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(5);
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const handleClickOutside = (event) => {
    if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
      setShowSideBar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" flex flex-row max-w-[100vw]">
      {/* Side Bar */}
      {showSideBar && (
        <div
          ref={sideBarRef}
          className=" min-w-[20%] max-w-[80%] sm:max-w-max py-2 px-3 lg:static top-0 bottom-0 fixed bg-white min-h-screen max-h-max flex-grow z-10"
        >
          <Side_Bar />
        </div>
      )}

      <div className="flex flex-col w-full min-h-screen ">
        {/* Top Bar */}
        <Top_Nav setShowSideBar={setShowSideBar} />

        {/* Main Container */}
        <main className="flex flex-col flex-grow gap-6 px-2 pt-6 pb-5 md:px-10 bg-slate-200">
          <div className="flex flex-col items-start justify-center gap-10 px-8 py-4 bg-[#E7F7F9] rounded-2xl">
            <p className="text-lg font-bold ">Feedback</p>
            {/* Rating Slider */}
            <div className="flex flex-col w-full gap-3">
              <p>How statisfied are you with support?</p>
              <div className="max-w-[80%] flex-1 flex-grow  ">
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={1}
                  value={sliderValue}
                  onChange={handleSliderChange}
                  className="w-full range"
                />
                <div className="flex flex-row justify-between w-full">
                  <span>0</span>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>
              </div>
            </div>

            {/* Rating Emojis */}
            <div>
              <p>How would your describe your mood after using our services?</p>
              <p className="flex flex-row gap-8 mt-3 text-5xl ">
                <span className="px-1 py-3 pb-4 bg-white rounded-full ">
                  😁
                </span>
                <span className="px-1 py-3 pb-4 bg-white rounded-full ">
                  😒
                </span>
                <span className="px-1 py-3 pb-4 bg-white rounded-full ">
                  ☹️
                </span>
                <span className="px-1 py-3 pb-4 bg-white rounded-full ">
                  😖
                </span>
              </p>
            </div>

            {/* Feedback Entry */}
            <div className="w-full ">
              <p>How can we improve?</p>
              <textarea
                placeholder="Your Valuable are"
                className="w-[80%] h-[200px] rounded-2xl px-2 py-2 resize-none mt-3"
              ></textarea>
            </div>

            {/* Button group */}
            <div className="flex flex-row items-center justify-center gap-2 ">
              <button className="px-5 py-2 text-white bg-[#2B88B6] rounded-3xl">
                Send
              </button>
              <button className="px-4 py-2 border border-[#2B88B6] rounded-3xl text-[#2B88B6] hover:bg-[#2B88B6] hover:text-white">
                Cancel
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FeedBackPage;
