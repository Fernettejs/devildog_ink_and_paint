import React, { useState } from "react";
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

import img1 from "../assets/images/canvas/FB_IMG_1577371889335.jpg"
import img2 from "../assets/images/canvas/FB_IMG_1577371893096.jpg"
import img3 from "../assets/images/canvas/IMG_20191028_081955.jpg"
import img4 from "../assets/images/canvas/IMG_1624-min.jpg"
import img5 from "../assets/images/canvas/IMG_20181228_134615.jpg"
import img6 from "../assets/images/canvas/ied.jpg"
import img7 from "../assets/images/canvas/IMG_20191028_082117.jpg"
import img8 from "../assets/images/canvas/IMG_20191028_082123.jpg"
import img9 from "../assets/images/canvas/IMG_20191028_082130.jpg"
import img10 from "../assets/images/canvas/IMG_20191028_082146.jpg"
import img11 from "../assets/images/canvas/IMG_20191028_082203.jpg"
import img12 from "../assets/images/canvas/IMG_20191028_170221.jpg"
import img13 from "../assets/images/canvas/IMG_20191028_170225.jpg"
import img14 from "../assets/images/canvas/IMG_20191028_170241.jpg"
import img15 from "../assets/images/canvas/IMG_20191221_015109.jpg"
import img16 from "../assets/images/canvas/KIMG0541.jpg"
import img17 from "../assets/images/canvas/KIMG0550.jpg"
import img18 from "../assets/images/canvas/KIMG0554.jpg"
import img19 from "../assets/images/canvas/KIMG0555.jpg"
import img20 from "../assets/images/canvas/KIMG0581.jpg"

const Canvas = () => {
  const [images] = useState([
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
    {
      image: img6,
    },
    {
      image: img7,
    },
    {
      image: img8,
    },
    {
      image: img9,
    },
    {
      image: img10,
    },
    {
      image: img11,
    },
    {
      image: img12,
    },
    {
      image: img13,
    },
    {
      image: img14,
    },
    {
      image: img15,
    },
    {
      image: img16,
    },
    {
      image: img17,
    },
    {
      image: img18,
    },
    {
      image: img19,
    },
    {
      image: img20,
    }
  ]);

  return (
    <div className="tattoos" id="tattoos">
      <Navigation />
      <Sidebar />
      <div className="header" id="myHeader">
        <h1>Canvas</h1>
      </div>
      <div className="container">
        <>
          <div className="gallery-container">
            <div className="gallery-item">
              {images.map((image, index) => (
                <div className="image" key={index}>
                  <img src={image.image} alt={image.image} />
                </div>))}
            </div>
          </div>
        </>
      </div>
      <Footer />
    </div>
  );
};

export default Canvas;
