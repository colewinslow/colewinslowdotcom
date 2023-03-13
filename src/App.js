import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Switch from "./components/Switch";
import Logo from "./components/Logo";
import SocialLinks from "./components/SocialLinks";
import NavLinks from "./components/NavLinks";
import LandingPage from "./Pages/LandingPage";
import BlogPage from "./Pages/BlogPage";
import BlogSinglePage from "./Pages/BlogSinglePage";
function App() {
  const [themeMode, setThemeMode] = useState(() => {
    const storedThemeMode = localStorage.getItem("themeMode");
    return storedThemeMode !== null ? storedThemeMode : "light";
  });
  const toggleThemeMode = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
    const newThemeMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newThemeMode);
    localStorage.setItem("themeMode", newThemeMode);
  };
  useEffect(() => {
    localStorage.setItem("theme", themeMode);
    if (themeMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [themeMode]);

  return (
    <div className={`App ${themeMode} flex justify-center`}>
      <Router>
        {/* Navbar */}
        <header className="bg-white/90 dark:bg-[#131313]/90 flex items-center p-2 sm:p-3 rounded-full fixed top-4 w-[95%] max-w-7xl  z-40">
          <div className="flex items-center flex-1">
            <Logo isOn={themeMode === "dark"} />
            <NavLinks />
          </div>
          <div className="flex items-center mr-5">
            <SocialLinks isOn={themeMode === "dark"} />
            <Link
              to="/blog"
              className="bg-[#3296F1] sm:mx-8  mx-2 mr-10 text-white rounded-full p-3 px-6 text-[12px] sm:text-[14px] font-medium hover:opacity-60 cursor-pointer"
            >
              Programming Blog
            </Link>
            <Switch
              isOn={themeMode === "dark"}
              handleToggle={toggleThemeMode}
            />
          </div>
        </header>
        {/* Content */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogSinglePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
