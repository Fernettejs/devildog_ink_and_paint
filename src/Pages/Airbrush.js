import React from "react";
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import Photo from "../Components/Photo";
import Footer from "../Components/Footer";

import canoe from "../assets/images/airbrush/canoe.jpg";
import berger from "../assets/images/airbrush/berger.jpg";
import bergerFront from "../assets/images/airbrush/berger-front.jpg";
import tank from "../assets/images/airbrush/usmc-tank.jpg";
import eagle from "../assets/images/airbrush/eagle-bike.jpg";
import helo from "../assets/images/airbrush/helo-bike.jpg";
import iwo from "../assets/images/airbrush/iwo-jima-bike.jpg";
import nvg from "../assets/images/airbrush/nvg-bike.jpg";
import mattisFull from "../assets/images/airbrush/mattis-full.jpg";
import mattisSide from "../assets/images/airbrush/mattis-side.jpg";
import memorial from "../assets/images/airbrush/memorial-rear.jpg";
import swords from "../assets/images/airbrush/swords.jpg";

const Airbrush = () => {
  return (
    <div className="tattoos" id="tattoos">
      <Navigation />
      <Sidebar />
      <div className="header" id="myHeader">
        <h1>Custom Airbrush</h1>
      </div>
      <div className="container">
        {/* <Photo img={bergerFront}/> */}
        <div className="gallery-container w-2">
          <div className="gallery-item">
            <div className="image">
              <img src={canoe} alt="canoe"></img>
            </div>
          </div>
        </div>
        <div className="gallery-container h-2">
          <div className="gallery-item">
            <div className="image">
              <img src={bergerFront} alt="canoe"></img>
            </div>
          </div>
        </div>
        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img src={berger} alt="canoe" />
            </div>
          </div>
        </div>
        <div className="gallery-container h-2">
          <div className="gallery-item">
            <div className="image">
              <img src={tank} alt="canoe" />{" "}
            </div>
          </div>
        </div>
        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img src={eagle} alt="canoe" />{" "}
            </div>
          </div>
        </div>
        <div className="gallery-container w-2">
          <div className="gallery-item">
            <div className="image">
              <img src={helo} alt="canoe" />{" "}
            </div>
          </div>
        </div>
        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img src={iwo} alt="canoe" />{" "}
            </div>
          </div>
        </div>
        <div className="gallery-container h-2">
          <div className="gallery-item">
            <div className="image">
              <img src={nvg} alt="canoe" />{" "}
            </div>
          </div>
        </div>
        <div className="gallery-container w-2">
          <div className="gallery-item">
            <div className="image">
              <img src={mattisFull} alt="canoe" />{" "}
            </div>
          </div>
        </div>
        <div className="gallery-container w-2">
          <div className="gallery-item">
            <div className="image">
              <img src={mattisSide} alt="canoe" />{" "}
            </div>
          </div>
        </div>
        <div className="gallery-container h-2">
          <div className="gallery-item">
            <div className="image">
              <img src={memorial} alt="canoe" />{" "}
            </div>
          </div>
        </div>
        <div className="gallery-container w-2">
          <div className="gallery-item">
            <div className="image">
              <img src={swords} alt="canoe" />{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Airbrush;
