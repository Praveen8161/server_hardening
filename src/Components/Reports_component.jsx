import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";
import { cardData } from "../helpers/Report_card_data";
import Report_cards from "./Report_cards";
import DatePicker from "react-datepicker";

const Reports_component = () => {
  const [selectValue, setSelectValue] = useState("network");
  const [dateValue, setDateValue] = useState({
    start: new Date(),
    end: new Date(),
  });

  return (
    <section className="flex flex-col gap-8 ">
      {/* Section Heading */}
      <div>
        <p className="text-2xl font-bold text-sky-700">
          SERVER HARDENING Reports
        </p>
        <p>Manage your report details</p>
      </div>

      {/* Filters container*/}
      <div className="flex flex-row flex-wrap items-center justify-between gap-3 ">
        {/* Search */}
        <div className="flex flex-row gap-1 flex-nowrap items-center bg-white w-full max-w-[500px] relative ">
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
          {/* Date picker-- Start */}
          <div className="flex flex-row items-center px-2 bg-white rounded-md date-input-wrapper">
            <DatePicker
              showPopperArrow={false}
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

          {/*  */}
          <span>to</span>

          {/* Date picker -end */}
          <div className="flex flex-row items-center px-2 bg-white rounded-md date-input-wrapper">
            <DatePicker
              showPopperArrow={false}
              closeOnScroll={true}
              icon={<FiFilter />}
              showIcon
              toggleCalendarOnIconClick
              selected={dateValue.end}
              onChange={(date) => {
                setDateValue((prev) => ({
                  ...prev,
                  end: date,
                }));
              }}
            />
          </div>

          {/* Select  */}
          <div>
            <select
              name="HeadlineAct"
              id="HeadlineAct"
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
              className="self-center w-full px-2 py-1 text-gray-700 border-gray-300 rounded-md "
            >
              <option value="network">Network</option>
              <option value="safety">Safety</option>
              <option value="security">Security</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-5 ">
        {cardData.length &&
          cardData?.map((card, idx) => (
            <Report_cards key={card.title + idx} card={card} />
          ))}
      </div>
    </section>
  );
};

export default Reports_component;
