import { FaInfoCircle } from "react-icons/fa";

const Chart_section = () => {
  return (
    <section>
      {/*  */}

      {/* Charts */}
      <div className=" border py-2">
        <div className=" flex justify-between flex-row items-center px-3 shadow-sm">
          <p className=" text-xl font-bold text-sky-700"> Overall Statistics</p>
          <p>
            <FaInfoCircle size={20} color="gray" />
          </p>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Chart_section;
