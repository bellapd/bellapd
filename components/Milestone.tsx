import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-4xl font-bold mb-4 text-white italic">Milestone</h1>
      <div className="container mx-auto">
        <ol className="relative border-l border-gray-200">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-xl italic leading-none text-[#F24E1E]">
              2022
            </time>
            <h3 className="text-lg font-semibold text-white">
              Bella's Personal Website Version 1
            </h3>
            <p className="mb-4 text-md font-normal text-white">
              An Old Version of Bella's Personal Website build with Next.js and Chakra UI.
            </p>
            <div>
              <Link href="/your-resume.pdf">
                <button className="rounded-full bg-white text-md shadow-inner shadow-lg ring-black ring-opacity-25 px-7 py-1  hover:bg-red-600 hover:text-white transition-colors duration-300">
                  See More
                </button>
              </Link>
              <FaGithub className="inline-block ml-4 text-3xl text-white" />
            </div>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Marketing UI design in Figma
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              E-Commerce UI code in Tailwind CSS
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default About;
