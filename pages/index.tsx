import Main from "../components/Main";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <div className="css-selector">
      <div className="background-image">
        <Image
          src="/background.svg"
          width={900}
          height={900}
          objectFit="cover"
          alt="Background"
          className="absolute top-0 left-0 z-0 mr-20"
        />
      </div>
      <div className="h-screen flex">
        <div className="w-2/4 fixed h-full">
          <Navbar />
          <Main />
        </div>
        <div
          className="w-1/2 ml-auto overflow-y-scroll ml-20"
        >
          <div className="relative z-10">
            <About />
            <Project />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
