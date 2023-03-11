import { useState } from "react";
import "./App.css";
import Switch from "./components/Switch";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const toggleThemeMode = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };
  return (
    <div className={`App ${themeMode}`}>
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
