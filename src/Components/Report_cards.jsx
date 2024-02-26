/* eslint-disable react/prop-types */

const Report_cards = ({ card }) => {
  return (
    <div className=" border shadow-md flex flex-col gap-2 min-w-[200px] px-3 items-start py-2 rounded-md">
      <p className=" font-bold">{card.title}</p>
      <p className=" text-sm ">{card.date}</p>
      <button className=" px-3 py-1 border text-white rounded-2xl  bg-sky-600">
        Download
      </button>
    </div>
  );
};

export default Report_cards;
