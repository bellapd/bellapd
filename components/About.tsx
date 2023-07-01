import React from "react";
import Link from "next/link";

function About() {
  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-4xl font-bold mb-4 text-white italic">About</h1>
      <div className="container mx-auto">
        <p className="mb-4 text-white max-w-lg max-h-md overflow-hidden text-justify leading-relaxed">
          I am currently an undergraduate student at National Tsing Hua
          University in Hsinchu, Taiwan, tudying Electrical Engineering and
          Computer Science. I actively work on web development projects using
          tools such as React, Next.js, and Docker. In my free time, I enjoy
          exploring new tools and technologies, not only in the field of
          software engineering but also in the realm of numerical optimization
          algorithms. Apart from my academic pursuits, I have a passion for
          reading books, particularly those related to medicine, psychology, and
          philosophy.
        </p>
      </div>
      <Link href="/your-resume.pdf">
        <button className="rounded-full bg-white text-md shadow-inner shadow-lg ring-black ring-opacity-25 px-9 py-2  hover:bg-red-600 hover:text-white transition-colors duration-300">
          See My Resume
        </button>
      </Link>
    </div>
  );
}

export default About;
