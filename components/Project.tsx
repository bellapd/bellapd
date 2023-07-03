import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

function Project() {
  return (
    <div id="projects" className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-4xl font-bold mb-4 text-white italic">Projects</h1>
      <div className="container mx-auto">
        <ol className="relative border-l border-gray-200">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-xl italic leading-none text-[#F24E1E]">
              2022
            </time>
            <h3 className="text-lg font-semibold text-white">
              Personal Website V1
            </h3>
            <p className="mb-4 text-md font-normal text-white">
              An Old Version of Bella's Personal Website build with Next.js and
              Chakra UI.
            </p>
            <div>
              <Link href="/projects/personalwebv1">
                <button className="rounded-full bg-white text-md italic shadow-inner shadow-lg ring-black ring-opacity-25 px-7 py-1  hover:bg-[#F24E1E] hover:text-white transition-colors duration-300">
                  See More
                </button>
              </Link>
              <Link href="https://github.com/bellapd/bellapd-v1.git">
                <FaGithub className="inline-block ml-4 text-3xl text-white transition-colors duration-300 hover:text-[#F24E1E]" />
              </Link>
            </div>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-xl italic leading-none text-[#F24E1E]">
              2023
            </time>
            <h3 className="text-lg font-semibold text-white">TeachMe</h3>
            <p className="text-base font-normal text-gray-300">
              Full stack (Front-end and Back-end)
            </p>
            <p className="mb-4 text-base font-normal text-white">
              A platform for students to find tutors.
            </p>
            <div>
              <Link href="/projects/teachme">
                <button className="rounded-full bg-white italic text-md shadow-inner shadow-lg ring-black ring-opacity-25 px-7 py-1  hover:bg-[#F24E1E] hover:text-white transition-colors duration-300">
                  See More
                </button>
              </Link>
              <Link href="https://github.com/bellapd/teachme.git">
                <FaGithub className="inline-block ml-4 text-3xl text-white transition-colors duration-300 hover:text-[#F24E1E]" />
              </Link>
            </div>
          </li>

          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <h3 className="text-lg font-semibold text-white">
              Newest Personal Website
            </h3>
            <p className=" mb-4 text-base font-normal text-white">
              Build with Next.js and Tailwind CSS (WIP)
            </p>
            <div>
              <Link href="/your-resume.pdf">
                <button className="rounded-full bg-white text-md italic shadow-inner shadow-lg ring-black ring-opacity-25 px-7 py-1 hover:bg-[#F24E1E] hover:text-white transition-colors duration-300">
                  See More
                </button>
              </Link>
              <Link href="https://github.com/bellapd/bellapd.git">
                <FaGithub className="inline-block ml-4 text-3xl text-white transition-colors duration-300 hover:text-[#F24E1E]" />
              </Link>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Project;
