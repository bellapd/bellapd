import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Main() {
  return (
    <div className="flex flex-col items-center justify-left min-h-screen">
      <div>
        <Image src="/logo.png" alt="logo" width={500} height={500} />
      </div>
      <p className="text-xl text-center text-#2A6B56">
        A web developer enthusiast
        <br />
        long-time learner, and curious.
      </p>
      <div className="flex space-x-4 py-4">
        <Link href="https://www.linkedin.com/annbellapd">
          <div className="text-3xl text-#2A6B56">
            <FaLinkedin />
          </div>
        </Link>
        <Link href="mailto:your-annabellaputridirgo@gmail.com">
          <div className="text-3xl text-#2A6B56">
            <FaEnvelope />
          </div>
        </Link>
        <Link href="https://github.com/bellapd">
          <div className="text-3xl text-#2A6B56">
            <FaGithub />
          </div>
        </Link>
      </div>
      <Link href="/your-resume.pdf">
        <button className="rounded-full bg-yellow-500 shadow-md px-4 py-2 text-blue-900 font-semibold">
          Resume
        </button>
      </Link>
    </div>
  );
}

export default Main;
