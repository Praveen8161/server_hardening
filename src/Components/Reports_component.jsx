import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";
import { cardData } from "../helpers/Report_card_data";
import Report_cards from "./Report_cards";

const Reports_component = () => {
  const [selectValue, setSelectValue] = useState("network");
  return (
    <section className=" flex flex-col gap-8">
      {/* Section Heading */}
      <div>
        <p className=" text-2xl font-bold">SERVER HARDENING Reports</p>
        <p>Manage your report details</p>
      </div>

      {/* Filters container*/}
      <div className=" flex flex-row items-center justify-between flex-wrap gap-3">
        {/* Search */}
        <div className="flex flex-row gap-1 flex-nowrap items-center bg-white w-full max-w-[500px] relative ">
          <span className=" absolute left-2">
            <CiSearch size={15} />
          </span>
          <input
            type="search"
            placeholder="Search"
            className=" py-1 min-w-full pl-8 flex-1 rounded-lg"
          />{" "}
        </div>

        <div className="flex flex-row items-center gap-3 flex-wrap">
          {/* Date picker-- Start */}
          <div className="date-input-wrapper flex flex-row items-center bg-white px-2 rounded-md py-1">
            <span>
              <FiFilter />
            </span>
            <input type="date" />
          </div>
          <span>to </span>
          {/* Date picker -end */}
          <div className="date-input-wrapper flex flex-row items-center bg-white px-2 rounded-md py-1">
            <span>
              <FiFilter />
            </span>
            <input type="date" />
          </div>

          {/* Select  */}
          <div>
            <select
              name="HeadlineAct"
              id="HeadlineAct"
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
              className=" w-full border-gray-300 text-gray-700 self-center px-2 rounded-md py-1"
            >
              <option value="network">Network</option>
              <option value="safety">Safety</option>
              <option value="security">Security</option>
            </select>
          </div>
        </div>
      </div>

      <div className=" flex flex-row gap-5 flex-wrap">
        {cardData.length &&
          cardData?.map((card, idx) => (
            <Report_cards key={card.title + idx} card={card} />
          ))}
      </div>
    </section>
  );
};

export default Reports_component;
