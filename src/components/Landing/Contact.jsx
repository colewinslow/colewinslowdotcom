import React from "react";

function Contact() {
  return (
    <div className=" w-full flex justify-center items-center mt-52 sm:mt-0 ">
      <div className="bg-white dark:bg-[#131313] rounded-[40px] flex flex-col  shadow-sm w-full  p-5  md:p-14  ">
        <div className=" flex flex-col w-full p-6">
          <h2 className="md:text-[38px] text-[25px] flex  w-full font-bold text-[#484848] dark:text-white  ">
            Get In Touch
          </h2>
          <p className="my-4 leading-8 w-full dark:text-[#8C8C8C] md:text-[16px] text-[14px]">
            Use the form to get in touch so we can start up a conversation or
            message me on my socials.
          </p>
        </div>
        <form
          action="https://formsubmit.co/colewinslow174@gmail.com"
          method="POST"
          className="w-full    rounded-md shadow-lg bg-white dark:bg-[#040404]  "
        >
          <div className="flex justify-evenly flex-wrap w-full p-6  sm:p-8">
            <div
              className=" w-full
        flex flex-col sm:flex-row items-center"
            >
              <div className="flex flex-col w-full sm:w-[50%]  ">
                <label>Name</label>
                <input
                  required
                  type="name"
                  name="name"
                  className="mt-2 p-4 bg-[#F4F4F4] rounded-md"
                  placeholder="Full Name"
                />
              </div>{" "}
              <div className="flex flex-col  w-full sm:w-[50%] ml-0 sm:ml-10  mt-4 sm:mt-0 ">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 p-4 bg-[#F4F4F4] rounded-md "
                  placeholder="Email Address"
                />
              </div>{" "}
            </div>
            <input type="hidden" name="_captcha" value="false"></input>
            <label className="w-full mt-6">Message</label>
            <textarea
              required
              name="message"
              className="mt-2 p-4 bg-[#F4F4F4] w-full h-[250px] rounded-md resize-none"
              placeholder="Enter your message here"
            />
            <button
              type="submit"
              className="bg-[#3296F1] mt-8 text-white rounded-full p-5 px-10 text-[14px] font-medium w-full"
            >
              Send Message
            </button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
