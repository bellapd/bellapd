import Image from "next/image";
import Footer from "./Footer";

function Main() {
  return (
    <div
      id="home"
      className="flex flex-col items-left justify-center min-h-screen ml-20 px-5"
    >
      <div className="mb-5 ">
        <Image src="/Logo.svg" width={90} height={90} alt="Logo" />
      </div>
      <div>
        <Image src="/bella.svg" width={500} height={500} alt="Bella" />
      </div>
      <p className="text-lg sm:text-xl text-left text-white ml-2">
        A lifelong learner and a curious individual.
      </p>
      <Footer />
    </div>
  );
}

export default Main;
