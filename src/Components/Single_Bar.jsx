/* eslint-disable react/prop-types */
const Single_Bar = ({ val }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p
        className={`flex-grow border min-w-[35px] bg-gray-200 rounded-xl h-full ${
          val === "May" ? "bg-sky-800" : "bg-gray-200"
        }`}
      ></p>
      <p>{val}</p>
    </div>
  );
};

export default Single_Bar;
