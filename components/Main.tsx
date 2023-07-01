import Image from "next/image";
import Footer from "./Footer";

function Main() {
  return (
    <div id="home" className="flex flex-col items-left justify-center min-h-screen ml-20">
      <div>
        <Image src="/bella.svg" width={500} height={500} alt="Bella" />
      </div>
      <p className="text-lg text-left text-white italic ">
        A lifelong learner and a curious individual.
      </p>
      <Footer />
    </div>
  );
}

export default Main;
