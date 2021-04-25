import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import airbrush from "../assets/icons/iconfinder_Airbrush_1021008.png";
import tattoo from "../assets/icons/tattoo-gun-icon.png";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Services",
    path: "",
    icon: <FaIcons.FaConciergeBell />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Tattoos",
        path: "/tattoos",
        icon: <img class="icon" src={tattoo} alt="tattoo gun"/>,
      },
      {
        title: "Airbrush",
        path: "/services/airbrush",
        icon: <img class="icon" src={airbrush} alt="airbrush"/>,
      },
      {
        title: "Murals",
        path: "/services/murals",
        icon: <FaIcons.FaPaintBrush />,
      },
      {
        title: "Canvas",
        path: "/services/canvas",
        icon: <FaIcons.FaBrush />,
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
  },
];
