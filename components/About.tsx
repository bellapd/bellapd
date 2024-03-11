import React from "react";
import Link from "next/link";

function About() {
  return (
    <div id="about" className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-4xl font-bold mb-4 text-white italic">About</h1>
      <div className="container mx-auto">
        <p className="mb-4 text-lg text-white max-w-xl max-h-xl overflow-hidden text-justify leading-relaxed">
          Hey there! I'm currently a senior at National Tsing Hua University,
          pursuing a double major in Electrical Engineering and Computer
          Science. My journey into the world of computer science began back in
          2022 when I discovered my passion for software engineering. Starting
          with frontend development by creating my own personal website, I
          gradually delved deeper into the realm of full-stack development.
          <br />
          As time passed, my perspective on computers evolved beyond just
          software engineering. I realized the importance of diversifying my
          skill set and not limiting myself to one area of expertise. That's why
          lately, I've been drawn to the field of data analysis, computational
          statistics, and numerical optimization. I believe in continuously
          expanding my knowledge and skills to adapt to the ever-changing
          landscape of technology.
          <br /> Stay tune for an exciting projects about data analysis!
        </p>
      </div>
      <Link href="https://drive.google.com/file/d/1W5FzNKqdJ7d1fhA8YoUEtaQAr_LMGANf/view?usp=sharing">
        <button className="rounded-full bg-white text-md italic shadow-inner shadow-lg ring-black ring-opacity-25 px-9 py-2 hover:bg-[#F24E1E] hover:text-white transition-colors duration-300 mb-4">
          See My Resume
        </button>
      </Link>
    </div>
  );
}

export default About;
