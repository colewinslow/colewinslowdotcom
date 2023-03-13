import React, { useEffect } from "react";
import BlogCard from "../components/BlogCard";

function BlogPage() {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }
  return (
    <main className="w-[95%] max-w-7xl flex flex-col items-center mt-[105px]">
      <ScrollToTopOnMount />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </main>
  );
}

export default BlogPage;
