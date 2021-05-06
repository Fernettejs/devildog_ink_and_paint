import React, { useState } from "react";
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

import img1 from "../assets/images/murals/afghan.jpg"
import img3 from "../assets/images/murals/FB_IMG_1583551263672.jpg"
import img4 from "../assets/images/murals/FB_IMG_1583551279006.jpg"
import img5 from "../assets/images/murals/ghcCKizc-min.jpg"
import img6 from "../assets/images/murals/IMG_1764.jpg"
import img7 from "../assets/images/murals/IMG_1765.jpg"
import img8 from "../assets/images/murals/IMG_1766.jpg"
import img9 from "../assets/images/murals/IMG_1767.jpg"
import img10 from "../assets/images/murals/IMG_1772.jpg"
import img11 from "../assets/images/murals/IMG_1769.jpg"
import img12 from "../assets/images/murals/IMG_1770.jpg"
import img13 from "../assets/images/murals/IMG_1771.jpg"
import img14 from "../assets/images/murals/IMG_1768.jpg"
import img15 from "../assets/images/murals/IMG_1785.jpg"
import img16 from "../assets/images/murals/IMG_20191024_180357.jpg"
import img17 from "../assets/images/murals/IMG_20191027_000407.jpg"
import img18 from "../assets/images/murals/IMG_20191028_022052.jpg"
import img19 from "../assets/images/murals/IMG_20191028_022102.jpg"
import img20 from "../assets/images/murals/IMG_20191028_022143.jpg"
import img21 from "../assets/images/murals/IMG_20191028_022229.jpg"
import img22 from "../assets/images/murals/KIMG1168.jpg"
import img23 from "../assets/images/murals/KIMG1186.jpg"
import img24 from "../assets/images/murals/KIMG1189.jpg"
import img25 from "../assets/images/murals/KIMG1192.jpg"
import img26 from "../assets/images/murals/nam.jpg"
import img27 from "../assets/images/murals/ww1.jpg"

const Murals = () => {
  const [images] = useState([
    {
      image: img1,
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
    },
    {
      image: img21,
    },
    {
      image: img22,
    },
    {
      image: img23,
    },
    {
      image: img24,
    },
    {
      image: img25,
    },
    {
      image: img26,
    },
    {
      image: img27,
    }
  ]);
  return (
    <div className="tattoos" id="tattoos">
      <Navigation />
      <Sidebar />
      <div className="header" id="myHeader">
        <h1>Murals</h1>
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

export default Murals;
