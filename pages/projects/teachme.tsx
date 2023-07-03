import React from "react";
import Navbar from "@/components/Navbar";
import TeachMe from "@/components/Project/TeachMe";

function personalwebv1() {
  return (
    <div className="css-selector">
        <Navbar />
        <div className="container mx-auto px-10 py-10 overflow-hidden">
        <TeachMe />
        </div>
    </div>
  );
}

export default personalwebv1;
