import React from "react";
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import Photo from "../Components/Photo";
import Footer from "../Components/Footer";


import afghan from "../assets/images/murals/afghan.jpg";
import nam from "../assets/images/murals/nam.jpg";
import ww1 from "../assets/images/murals/ww1.jpg";

const Murals = () => {
  return (
    <div className="tattoos" id="tattoos">
      <Navigation />
      <Sidebar />
      <div className="header" id="myHeader">
        <h1>Murals</h1>
      </div>
      <div className="container">
        {/* <Photo img={bergerFront}/> */}
        <div className="gallery-container w-3 h-1">
          <div className="gallery-item">
            <div className="image">
              <img src={afghan} alt="canoe" />
            </div>
          </div>
        </div>
        <div className="gallery-container w-3 h-1">
          <div className="gallery-item">
            <div className="image">
              <img src={nam} alt="canoe" />
            </div>
          </div>
        </div>
        <div className="gallery-container w-3 h-1">
          <div className="gallery-item">
            <div className="image">
              <img src={ww1} alt="canoe" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Murals;
