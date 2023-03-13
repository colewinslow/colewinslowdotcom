import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <Link
      to="/blog/2"
      className="bg-white mt-10 dark:bg-[#131313] rounded-[40px] shadow-sm w-full  h-[300px]"
    >
      <div className="items-center flex">
        <div></div>
      </div>
    </Link>
  );
}

export default BlogCard;
