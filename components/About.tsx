import React from "react";
import Link from "next/link";

function About() {
  return (
    <div id="about" className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-4xl font-bold mb-4 text-white italic">About</h1>
      <div className="container mx-auto">
        <p className="mb-4 text-lg text-white max-w-xl max-h-xl overflow-hidden text-justify leading-relaxed">
          I am currently an undergraduate student at National Tsing Hua
          University in Hsinchu, Taiwan, studying Electrical Engineering and
          Computer Science. I actively work on web development projects using
          tools such as React, Next.js, and Docker. In my free time, I enjoy
          exploring new tools and technologies, not only in the field of
          software engineering but also in the realm of numerical optimization
          algorithms. Apart from my academic pursuits, I have a passion for
          reading books, particularly those related to medicine, psychology, and
          philosophy.
        </p>
      </div>
      <Link href="https://drive.google.com/file/d/1W5FzNKqdJ7d1fhA8YoUEtaQAr_LMGANf/view?usp=sharing">
        <button className="rounded-full bg-white text-md italic shadow-inner shadow-lg ring-black ring-opacity-25 px-9 py-2 hover:bg-[#F24E1E] hover:text-white transition-colors duration-300 mb-4">
          See My Resume
        </button>
      </Link>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="relative">
          <kbd className="px-2 py-1 text-xs sm:text-sm font-semibold text-white bg-transparent rounded-full shadow-blur">
            Python
          </kbd>
        </div>
        <div className="relative">
          <kbd className="px-2 py-1 text-xs font-semibold text-white bg-transparent rounded-full shadow-blur">
            Docker
          </kbd>
        </div>
        <div className="relative">
          <kbd className="px-2 py-1 text-xs font-semibold text-white bg-transparent rounded-full shadow-blur">
            HTML/CSS
          </kbd>
        </div>
        <div className="relative">
          <kbd className="px-2 py-1 text-xs font-semibold text-white bg-transparent rounded-full shadow-blur">
            Typescript
          </kbd>
        </div>
        <div className="relative">
          <kbd className="px-2 py-1 text-xs font-semibold text-white bg-transparent rounded-full shadow-blur">
            React
          </kbd>
        </div>
        <div className="relative">
          <kbd className="px-2 py-1 text-xs font-semibold text-white bg-transparent rounded-full shadow-blur">
            Javascript
          </kbd>
        </div>
        <div className="relative">
          <kbd className="px-2 py-1 text-xs font-semibold text-white bg-transparent rounded-full shadow-blur">
            Next.js
          </kbd>
        </div>
        <div className="relative">
          <kbd className="px-2 py-1 text-xs font-semibold text-white bg-transparent rounded-full shadow-blur">
            Figma
          </kbd>
        </div>
        <div className="relative">
          <kbd className="px-2 py-1 text-xs font-semibold text-white bg-transparent rounded-full shadow-blur hover:bg-gh-hover">
            Github
          </kbd>
        </div>
      </div>
    </div>
  );
}

export default About;
