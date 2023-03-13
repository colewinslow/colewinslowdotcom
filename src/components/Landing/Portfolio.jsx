import React from "react";

function Portfolio() {
  return (
    <div className=" w-full flex justify-center items-center ">
      <div className="bg-white dark:bg-[#131313] rounded-[40px] flex flex-col  shadow-sm w-full  p-5  md:p-14  ">
        <div className=" w-full p-6">
          <h2 className="md:text-[38px] text-[25px] flex sm:mt-[-20px] w-full font-bold text-[#484848] dark:text-white  ">
            Programming Portfolio
          </h2>
          <p className="my-4 leading-8 w-full dark:text-[#8C8C8C] md:text-[16px] text-[14px]">
            Click on the website link or to view the code that runs each website
            with the code repository button.
          </p>
        </div>
        <div className="flex flex-col items-center lg:flex-row space-evenly"></div>
      </div>
    </div>
  );
}

export default Portfolio;
