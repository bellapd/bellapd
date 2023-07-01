import Image from "next/image";

function Main() {
  return (
    <div className="flex flex-col items-left justify-center min-h-screen ml-20">
      <div>
        <Image src="/bella.svg" width={400} height={400} alt="Bella" />
      </div>
      <p className="text-lg text-left text-white italic">
        A long-time learner and A Curious.
      </p>
      <div>

      </div>
    </div>
  );
}

export default Main;
