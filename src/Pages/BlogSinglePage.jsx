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
      <div className="bg-white dark:bg-[#131313] rounded-[40px] shadow-sm w-full mt-[110px] h-[100vh]"></div>
    </main>
  );
}

export default BlogSinglePage;
