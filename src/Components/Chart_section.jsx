import { FaInfoCircle } from "react-icons/fa";

const Chart_section = () => {
  return (
    <section className=" shadow-lg bg-white rounded-lg px-4 py-2">
      {/*  */}

      {/* Charts */}
      <div className="py-10">
        <div className=" flex justify-between flex-row items-center">
          <p className=" text-xl font-bold text-sky-700"> Overall Statistics</p>
          <p>
            <FaInfoCircle size={20} color="gray" />
          </p>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Chart_section;
