import React, { useEffect } from "react";

function BlogSinglePage() {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }
  return (
    <main className="w-[95%] max-w-7xl flex flex-col items-center">
      <ScrollToTopOnMount />
      <div className="bg-white dark:bg-[#131313] rounded-[40px] shadow-sm w-full mt-[110px] h-[100vh] overflow-hidden">
        <div className=" w-full  h-[220px]  flex justify-center items-center">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Blog"
          />
        </div>{" "}
      </div>
    </main>
  );
}

export default BlogSinglePage;
