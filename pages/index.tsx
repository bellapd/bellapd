import React, { useState, useEffect } from "react";
import Main from "../components/Main";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Image from "next/image";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="css-selector">
      {isMobile ? (
        <div>
          <Navbar />
          <Main />
          <About />
          <Project />
          <Contact />
        </div>
      ) : (
        <div className="h-screen flex">
          <div className="w-2/4 fixed h-full">
            <Navbar />
            <Main />
          </div>
          <div className="w-1/2 ml-auto overflow-y-scroll ml-20">
            <div className="relative z-10">
              <About />
              <Project />
              <Contact />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
