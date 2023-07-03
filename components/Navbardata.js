import React from "react";

import {SiAboutdotme} from "react-icons/si";
import {BsPersonWorkspace} from "react-icons/bs";
import {AiOutlineMail,AiOutlineHome} from "react-icons/ai";

export const Navbardata = [
  {
    title: "Home",
    path: "/",
    icon: <AiOutlineHome />,
    cName: "nav-text"
  },
  {
    title: "About",
    path: "/#about",
    icon: <SiAboutdotme />,
    cName: "nav-text"
  },
  {
    title: "Projects",
    path: "/#projects",
    icon: <BsPersonWorkspace />,
    cName: "nav-text"
  },
  {
    title: "Contact Me",
    path: "/#contact",
    icon: <AiOutlineMail />,
    cName: "nav-text"
  },
];
