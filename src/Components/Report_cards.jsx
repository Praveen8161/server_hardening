/* eslint-disable react/prop-types */

const Report_cards = ({ card }) => {
  return (
    <div className=" border shadow-md flex flex-col gap-2 min-w-[200px] bg-gradient-to-r from-[#cee5ee] via-white to-white max-w-[250px] px-4 items-start py-3 rounded-lg  w-full">
      <p className="font-bold ">{card.title}</p>
      <p className="text-sm ">{card.date}</p>
      <button className="px-3 py-1 mt-3 text-white border rounded-2xl bg-sky-600">
        Download
      </button>
    </div>
  );
};

export default Report_cards;

//
