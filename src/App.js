import { useState, useEffect } from "react";
import "./App.css";
import Switch from "./components/Switch";

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
    <div className={`App ${themeMode} dark:bg-gray-900`}>
      {/* Navbar */}
      <header>
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
          <Switch isOn={themeMode === "dark"} handleToggle={toggleThemeMode} />
        </div>
      </header>
      {/* Content */}
      <main>
        {/* Hero */}
        <div name="home"></div>
        {/* About */}
        <div name="about"></div>

        {/* Skills */}
        <div name="Skills"></div>

        {/* Portfolio */}
        <div name="portfolio"></div>

        {/* Contact */}
        <div name="contact"></div>

        {/* ----- Blog ----- */}
        {/* Blog Home */}
        {/* Blog Single */}
      </main>
    </div>
  );
}

export default App;
