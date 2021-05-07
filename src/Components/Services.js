import React from "react";
import { Link } from "react-router-dom";
import bandana from "../assets/images/tattoos/bandana.jpg";
import afghan from "../assets/images/murals/afghan.jpg";
import iwo from "../assets/images/airbrush/iwo-jima-bike.jpg";
import ied from "../assets/images/canvas/ied.jpg";


const Services = () => {

  // const faders = document.querySelectorAll(".fade-in");
  // const appearOptions = {
  //   threshold: 1,
  //   rootMargin: "0px 0px -100px 0px", 
  // };

  // const appearOnScroll = new IntersectionObserver(function (
  //   entries,
  //   appearOnScroll
  // ) {
  //   entries.forEach(entry => {
  //     if (!entry.isIntersecting) {
  //       return;
  //     } else {
  //       entry.target.classList.add("appear");
  //       appearOnScroll.unobserve(entry.target);
  //     }
  //   });
  // },

  // appearOptions);

  // faders.forEach(fader => {
  //   appearOnScroll.observe(fader);
  // });

  return (
    <section className="services" id="services">
      <div className="heading">
        <h2>Portfolio</h2>
      </div>

      <div className="content">
        <div className="servicesBox fade-in">
          <Link to="/airbrush">
            <img src={iwo} alt="" />
          </Link>
          <h2>Custom Airbrush</h2>
        </div>
        <div className="servicesBox fade-in">
          <Link to="/tattoos">
            <img src={bandana} alt="" />
          </Link>
          <h2>Tattoos</h2>
        </div>
        <div className="servicesBox fade-in">
          <Link to="/murals">
            <img src={afghan} alt="" />
          </Link>
          <h2>Wall Murals</h2>
        </div>
        <div className="servicesBox fade-in">
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
