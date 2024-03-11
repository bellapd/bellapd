import React from "react";
import Link from "next/link";

function Contact() {
  return (
    <div id="contact" className="container mx-auto px-4 py-8 mt-4">
      <h1 className="text-4xl font-bold mb-4 text-white italic">
        Get in touch
      </h1>

      <p className="mb-4 text-lg text-white max-w-xl max-h-xl overflow-hidden text-justify leading-relaxed ">
        I am currently available and interested in exploring exciting
        opportunities, as well as collaborating on open-source projects. Feel
        free to contact me or simply say hello!
      </p>

      <div className="mt-5">
        <Link href="mailto:annabellaputridirgo@gmail.com">
          <button className="rounded-full bg-white text-md shadow-inner shadow-lg ring-black ring-opacity-25 px-7 py-1  hover:bg-[#F24E1E] hover:text-white transition-colors duration-300">
            Say Hello!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
