import React from "react";
import { Link } from "react-scroll";
import Computer from "../../Assets/Computer.svg";
function Hero() {
  return (
    <div className="w-full h-[100vh] max-h-[900px]  flex justify-center items-center ">
      <div className="bg-white dark:bg-[#131313] rounded-[40px] shadow-sm w-full h-[60%] sm:h-[80%] p-6 py-24 sm:mt-20 sm:my-20 ">
        <div className=" flex justify-center sm:justify-evenly items-center h-full w-full relative">
          <div className="lg:w-[50%] flex flex-col   h-full justify-center sm:z-0 z-2">
            <h1 className="md:text-[65px] text-[40px] w-full font-bold text-[#484848] dark:text-white  mt-[-20px]">
              Creating <br />
              Wonderful Web <br />
              Software.
            </h1>
            <p className="my-5 leading-8 w-[80%] md:text-[16px] text-[14px] dark:text-[#8C8C8C] ">
              Hi i'm Cole, software engineer and web developer. View my websites
              or contact me to get a conversation going.
            </p>
            <div className="my-5 z-20">
              <Link
                spy={true}
                smooth={true}
                offset={-150}
                className="bg-[#3296F1] mr-8 text-white rounded-full p-5 px-10 text-[14px] font-medium hover:opacity-60 cursor-pointer"
                to="portfolio"
              >
                {" "}
                View Portfolio
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={-150}
                to="contact"
                className="hover:opacity-60 cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="sm:w-[40%] w-[98%] h-full top-20 lg:opacity-100 opacity-[8%]  lg:static absolute flex">
            <img src={Computer} alt="Computer" className="w-[120%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
