import React from "react";
import { Link } from "react-router-dom";
import bandana from "../assets/images/tattoos/bandana.png";
import afghan from "../assets/images/murals/afghan.png";
import iwo from "../assets/images/airbrush/iwo-jima-bike.png";
import ied from "../assets/images/canvas/ied.png";


const Services = () => {
  return (
    <section class="services" id="services">
      <div class="heading">
        <h2>Services</h2>
        <h3>This is what I do.</h3>
      </div>
      <div class="content">
        <div class="servicesBox">
          <Link to="/airbrush">
            <img src={iwo} alt="" />
          </Link>
          <h2>Custom Airbrush</h2>
        </div>
        <div class="servicesBox">
          <Link to="/tattoos">
            <img src={bandana} alt="" />
          </Link>
          <h2>Tattoos</h2>
        </div>
        <div class="servicesBox">
          <Link to="/murals">
            <img src={afghan} alt="" />
          </Link>
          <h2>Wall Murals</h2>
        </div>
        <div class="servicesBox">
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
