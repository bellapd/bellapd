import React from "react";
import Navbar from "@/components/Navbar";
import PersonalWebV1 from "@/components/Project/PersonalWebV1";

function personalwebv1() {
  return (
    <div className="css-selector">
      <Navbar />
      <div className="container mx-auto px-10 py-10 overflow-hidden">
        <PersonalWebV1 />
      </div>
    </div>
  );
}

export default personalwebv1;
