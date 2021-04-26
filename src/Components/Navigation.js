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
          <div className="subnav">
            <a href="#services" id="navlink">
              Services
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
        </ul>

        <div className="topnav-both topnav-right">
          <Link id="shop-link" to="/shop">
            Shop
          </Link>
          <a className="snipcart-checkout topnav-right mobile-cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
            </svg>
            <span className="snipcart-items-count"></span>
          </a>
          <a href="/#contact" id="contact-btn">
            <button
              // onClick="toggleMenu();"
              className="nav-btn nav-link"
            >
              Contact
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
