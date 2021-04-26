import React from "react";
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import Photo from "../Components/Photo";
import Footer from "../Components/Footer";

import ied from "../assets/images/canvas/ied.jpg";

const Canvas = () => {
  return (
    <div className="tattoos" id="tattoos">
      <Navigation />
      <Sidebar />
      <div className="header" id="myHeader">
        <h1>Canvas</h1>
      </div>
      <div className="container">
        {/* <Photo img={bergerFront}/> */}
        <div className="gallery-container w-4 h-4">
          <div className="gallery-item">
            <div className="image">
              <img src={ied} alt="canoe" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Canvas;
