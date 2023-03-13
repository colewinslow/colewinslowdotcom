import React from "react";
import About from "../components/Landing/About";
import Contact from "../components/Landing/Contact";

import Hero from "../components/Landing/Hero";
import Portfolio from "../components/Landing/Portfolio";
import Skills from "../components/Landing/Skills";
function LandingPage() {
  return (
    <main name="home" className="w-[95%] max-w-7xl flex flex-col items-center">
      {/* Hero */}
      <div className="my-10 w-full">
        <Hero />
      </div>
      {/* About */}{" "}
      <div name="about" className="my-20 flex">
        <About />
      </div>
      {/* Skills */}
      <div name="skills" className="my-20 flex w-full">
        <Skills />
      </div>
      {/* Portfolio */}
      <div name="portfolio" className="my-20 w-full">
        <Portfolio />
      </div>
      {/* Contact */}
      <div name="contact" className="my-20 w-full">
        <Contact />
      </div>
    </main>
  );
}

export default LandingPage;
