import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <Link
      to="/blog/2"
      className="bg-white mt-10 overflow-hidden dark:bg-[#131313] rounded-[40px] shadow-sm w-full sm:h-[300px]  h-[500px] flex flex-col sm:flex-row items-center sm:justify-evenly cursor-pointer hover:opacity-80"
    >
      <div className="sm:w-[480px] w-full  h-[200px] sm:h-full flex justify-center items-center">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Blog"
        />
      </div>{" "}
      <div className="items-center flex justify-evenly sm:w-[80%] w-full"></div>
    </Link>
  );
}

export default BlogCard;
