import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="py-4">
      <div className="container mx-auto flex items-center justify-start">
        <a
          href="https://github.com/bellapd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="inline-block ml-4 text-3xl text-white transition-colors duration-300 hover:text-[#F24E1E]"/>
        </a>
        <a
          href="https://linkedin.com/in/annabellapd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="inline-block ml-4 text-3xl text-white transition-colors duration-300 hover:text-[#F24E1E]" />
        </a>
        <a href="mailto:annabellaputridirgo@gmail.com">
          <MdEmail className="inline-block ml-4 text-3xl text-white transition-colors duration-300 hover:text-[#F24E1E]" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
