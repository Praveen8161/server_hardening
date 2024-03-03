/* eslint-disable react/prop-types */
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";
import Report_cards from "./Report_cards";
import DatePicker from "react-datepicker";
import { cardData } from "../helpers/Report_card_data";

const Security_reports = ({ name }) => {
  const [dateValue, setDateValue] = useState({
    start: new Date(),
    end: new Date(),
  });

  return (
    <section className="flex flex-col gap-5 px-5 py-6 bg-white rounded-lg ">
      {/* Section Heading */}
      <div>
        <p className="text-2xl font-bold text-sky-700">{name} Reports</p>
        <p>Manage your report details</p>
      </div>

      {/* Filters container*/}
      <div className="flex flex-row flex-wrap items-center gap-3 ">
        {/* Search */}
        <div className="flex flex-row gap-1 flex-nowrap items-center border border-gray-300 bg-white w-full max-w-[500px] relative ">
          <span className="absolute left-2">
            <CiSearch size={15} />
          </span>
          <input
            type="search"
            placeholder="Search"
            className="flex-1 min-w-full py-1 pl-8 rounded-lg "
          />{" "}
        </div>

        <div className="flex flex-row flex-wrap items-center gap-3">
          {/* Date picker */}
          <div className="flex flex-row items-center px-2 bg-white border border-gray-300 rounded-md date-input-wrapper">
            <DatePicker
              showPopperArrow={false}
              showMonthYearPicker
              dateFormat="MM/yyyy"
              closeOnScroll={true}
              icon={<FiFilter />}
              showIcon
              toggleCalendarOnIconClick
              selected={dateValue.start}
              onChange={(date) => {
                setDateValue((prev) => ({
                  ...prev,
                  start: date,
                }));
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-5 mt-3 ">
        {cardData.length &&
          cardData?.map((card, idx) => (
            <Report_cards key={card.title + idx} card={card} />
          ))}
      </div>
    </section>
  );
};

export default Security_reports;
