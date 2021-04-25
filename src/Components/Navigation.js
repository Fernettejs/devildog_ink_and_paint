import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-white.png";
import * as RiIcons from "react-icons/ri";

const Navigation = () => {
  return (
    <nav className="topnav">
      <div className="menu">
      <Link to="/">
          <img id="logo" src={logo} alt="logo" />
        </Link>
        <ul className="topnav-both topnav-left">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div className="topnav-both topnav-right">
          <div className="subnav">
            <a href="#services" id="navlink">
              Portfolio
              <RiIcons.RiArrowDownSFill />
            </a>
            <div className="subnav-content">
              <Link className="sublink" to="/airbrush">
                Airbrush
              </Link>
              <Link className="sublink" to="/tattoos">
                Tattoos
              </Link>
              <Link className="sublink" to="/murals">
                Murals
              </Link>
              <Link className="sublink" to="/canvas">
                Canvas
              </Link>
            </div>
          </div>
          <Link to="/#contact" id="contact-btn">
            <button
              to="/about"
              onClick="toggleMenu();"
              className="nav-btn nav-link"
            >
              Contact
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
