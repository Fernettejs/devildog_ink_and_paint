import React from "react";
import { Link } from "react-router-dom";
import bandana from "../assets/images/tattoos/bandana.jpg";
import afghan from "../assets/images/murals/afghan.jpg";
import iwo from "../assets/images/airbrush/iwo-jima-bike.jpg";
import ied from "../assets/images/canvas/ied.jpg";


const Services = () => {
  return (
    <section className="services" id="services">
      <div className="heading">
        <h2>Services</h2>
        <h3>This is what I do.</h3>
      </div>
      <div className="content">
        <div className="servicesBox">
          <Link to="/airbrush">
            <img src={iwo} alt="" />
          </Link>
          <h2>Custom Airbrush</h2>
        </div>
        <div className="servicesBox">
          <Link to="/tattoos">
            <img src={bandana} alt="" />
          </Link>
          <h2>Tattoos</h2>
        </div>
        <div className="servicesBox">
          <Link to="/murals">
            <img src={afghan} alt="" />
          </Link>
          <h2>Wall Murals</h2>
        </div>
        <div className="servicesBox">
          <Link to="/canvas">
            <img src={ied} alt="" />
          </Link>
          <h2>Canvas Paintings</h2>
        </div>
      </div>
    </section>
  );
};

export default Services;
