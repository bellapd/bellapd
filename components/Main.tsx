import Image from "next/image";
import Footer from "./Footer";

function Main() {
  return (
    <div id="home" className="flex flex-col items-left justify-center min-h-screen ml-4 px-5">
      <div>
        <Image src="/bella.svg" width={500} height={500} alt="Bella" />
      </div>
      <p className="text-lg sm:text-xl text-left text-white ">
        A lifelong learner and a curious individual.
      </p>
      <Footer />
    </div>
  );
}

export default Main;
