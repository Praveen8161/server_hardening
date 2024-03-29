import { FaXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 mt-10">
      <div className=" max-w-[150px] max-h-[150px]">
        <img src="/images/logo.png" alt="logo" />
      </div>

      <div className="flex flex-row items-center justify-between ">
        <p className=" max-w-[500px] font-light">
          Necurity Solutions is a holistic information technology security
          solution provider. We focus on providing innovative security
          solutions, to ensure the value of your digital assets.
        </p>
        <p className="flex flex-col">
          <span>Terms and conditions</span>
          <span>Privacy policy</span>
        </p>
      </div>
      <hr className="bg-gray-300 h-[3px] mt-6" />
      <div className="flex flex-row justify-between ">
        <p className="flex flex-row items-center gap-3 ">
          <span>
            <FaXTwitter size={30} color="#0369a1" />
          </span>

          <span>
            <BsFacebook size={30} color="#0369a1" />
          </span>

          <span>
            <RiInstagramFill size={30} color="#0369a1" />
          </span>
        </p>

        <p className="text-sm ">
          Copyright 2024, All Rights Reserved by necurities
        </p>
      </div>
    </footer>
  );
};

export default Footer;
