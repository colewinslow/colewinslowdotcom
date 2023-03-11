import React from "react";
import { Link } from "react-scroll";
import Computer from "../Assets/Computer.svg";
function LandingPage() {
  return (
    <main className="w-[95%] max-w-7xl flex flex-col items-center">
      {/* Hero */}
      <div
        name="home"
        className="h-[100vh] w-full flex justify-center sm:items-center sm:mt-0 mt-[120px]"
      >
        <div className="bg-white dark:bg-[#131313] rounded-[40px] shadow-sm w-full sm:mt-[58px] p-5  sm:h-[70%]  h-[70%] md:p-0 md:py-10">
          <div className=" flex justify-center sm:justify-evenly items-center h-full w-full relative">
            <div className="lg:w-[50%] flex flex-col  md:pl-0 sm:pl-10  h-full justify-center sm:z-0 z-2">
              <h1 className="md:text-[65px] text-[40px] w-full font-bold text-[#484848] dark:text-white mb-10">
                Creating <br />
                Wonderful Web <br />
                Software.
              </h1>
              <p className="mb-8 leading-8 w-[80%] md:text-[16px] text-[14px] ">
                Hi i'm Cole, software engineer and web developer. View my
                websites or contact me to get a conversation going.
              </p>
              <div className="my-5 z-20">
                <Link
                  spy={true}
                  smooth={true}
                  className="bg-[#3296F1] mr-8 text-white rounded-full p-5 px-10 text-[14px] font-medium"
                  to="portfolio"
                >
                  {" "}
                  View Portfolio
                </Link>
                <Link spy={true} smooth={true} to="portfolio">
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="sm:w-[40%] w-[68%] h-full top-20 lg:opacity-100 opacity-[5%] sm:pr-10 lg:static absolute flex">
              <img src={Computer} alt="Computer" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div name="about" className="h-[100vh] w-full flex justify-center ">
        <div className="bg-white dark:bg-[#131313] rounded-[40px] shadow-sm w-full  p-5  sm:h-[80%]  h-[80%] md:p-0 md:py-10"></div>
      </div>

      {/* Skills */}
      <div name="skills" className="h-[100vh] flex justify-center items-center">
        skills
      </div>

      {/* Portfolio */}
      <div
        name="portfolio"
        className="h-[100vh] flex justify-center items-center"
      >
        portfolio
      </div>

      {/* Contact */}
      <div
        name="contact"
        className="h-[100vh]  flex justify-center items-center"
      >
        contact
      </div>
    </main>
  );
}

export default LandingPage;
