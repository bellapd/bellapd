import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-end py-4 pr-8 ">
        <Link href="/" className="px-4 py-2">
          Home
        </Link>
        <Link href="/about" className="px-4 py-2">
          About
        </Link>
        <Link href="/projects" className="px-4 py-2">
          Projects
        </Link>
        <Link href="/contact" className="px-4 py-2">
          Contact Me
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
