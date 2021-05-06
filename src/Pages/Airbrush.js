import React, { useState } from 'react'
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

import img1 from "../assets/images/airbrush/airbrush-two/FB_IMG_1583551403532.jpg"
import img2 from "../assets/images/airbrush/airbrush-two/FB_IMG_1583551406881.jpg"
import img3 from "../assets/images/airbrush/airbrush-two/FB_IMG_1583551409577.jpg"
import img4 from "../assets/images/airbrush/airbrush-two/FB_IMG_1583551424611.jpg"
import img5 from "../assets/images/airbrush/airbrush-two/FB_IMG_1583551463123.jpg"
import img6 from "../assets/images/airbrush/airbrush-two/FB_IMG_1614175385211.jpg"
import img7 from "../assets/images/airbrush/airbrush-two/FB_IMG_1614175398076.jpg"
import img8 from "../assets/images/airbrush/airbrush-two/FB_IMG_1614175403281-min.jpg"
import img9 from "../assets/images/airbrush/airbrush-two/FB_IMG_1614175406700-min.jpg"
import img10 from "../assets/images/airbrush/airbrush-two/FB_IMG_1614175416217-min.jpg"
import img11 from "../assets/images/airbrush/airbrush-two/FB_IMG_1614175422977-min.jpg"
import img12 from "../assets/images/airbrush/airbrush-two/IMG_1692-min.jpg"
import img123 from "../assets/images/airbrush/airbrush-two/IMG_1693-min.jpg"
import img13 from "../assets/images/airbrush/airbrush-two/IMG_1695-min.jpg"
import img14 from "../assets/images/airbrush/airbrush-two/IMG_1698-min.jpg"
import img15 from "../assets/images/airbrush/airbrush-two/IMG_1723-min.jpg"
import img16 from "../assets/images/airbrush/airbrush-two/IMG_1724-min.jpg"
import img17 from "../assets/images/airbrush/airbrush-two/KIMG0470.jpg"
import img18 from "../assets/images/airbrush/airbrush-two/KIMG0478.jpg"
import img19 from "../assets/images/airbrush/airbrush-two/KIMG0479.jpg"
import img20 from "../assets/images/airbrush/airbrush-two/KIMG0726.jpg"
import img21 from "../assets/images/airbrush/airbrush-two/KIMG0729.jpg"
import img22 from "../assets/images/airbrush/airbrush-two/KIMG0734.jpg"
import img23 from "../assets/images/airbrush/airbrush-two/KIMG0737.jpg"
import img24 from "../assets/images/airbrush/airbrush-two/KIMG0883.jpg"
import img25 from "../assets/images/airbrush/airbrush-two/KIMG0889.jpg"
import img26 from "../assets/images/airbrush/airbrush-two/KIMG0892.jpg"
import img27 from "../assets/images/airbrush/airbrush-two/KIMG0974.jpg"
import img28 from "../assets/images/airbrush/airbrush-two/KIMG1005.jpg"
import img29 from "../assets/images/airbrush/airbrush-two/KIMG1138.jpg"
import img30 from "../assets/images/airbrush/airbrush-two/KIMG1139.jpg"
import img31 from "../assets/images/airbrush/airbrush-two/KIMG1143.jpg"
import img32 from "../assets/images/airbrush/airbrush-two/KIMG1172.jpg"
import img33 from "../assets/images/airbrush/airbrush-two/KIMG1269.jpg"
import img34 from "../assets/images/airbrush/airbrush-two/KIMG1276.jpg"
import img35 from "../assets/images/airbrush/airbrush-two/KIMG1279.jpg"
import img36 from "../assets/images/airbrush/airbrush-two/KIMG1283.jpg"
import img37 from "../assets/images/airbrush/airbrush-two/KIMG1305.jpg"
import img38 from "../assets/images/airbrush/airbrush-two/KIMG2307.jpg"
import img39 from "../assets/images/airbrush/airbrush-two/KIMG2308.jpg"
import img40 from "../assets/images/airbrush/airbrush-two/KIMG2309.jpg"
import img41 from "../assets/images/airbrush/airbrush-two/KIMG2412.jpg"
import img42 from "../assets/images/airbrush/airbrush-two/KIMG2413.jpg"
import img43 from "../assets/images/airbrush/canoe.jpg";
import img44 from "../assets/images/airbrush/berger.jpg";
import img45 from "../assets/images/airbrush/berger-front.jpg";
import img46 from "../assets/images/airbrush/usmc-tank.jpg";
import img47 from "../assets/images/airbrush/eagle-bike.jpg";
import img48 from "../assets/images/airbrush/helo-bike.jpg";
import img49 from "../assets/images/airbrush/iwo-jima-bike.jpg";
import img50 from "../assets/images/airbrush/nvg-bike.jpg";
import img51 from "../assets/images/airbrush/mattis-full.jpg";
import img52 from "../assets/images/airbrush/mattis-side.jpg";
import img53 from "../assets/images/airbrush/memorial-rear.jpg";
import img54 from "../assets/images/airbrush/swords.jpg";



const Airbrush = () => {
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
      image: img123,
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
    },
    {
      image: img28,
    },
    {
      image: img29,
    },
    {
      image: img30,
    },
    {
      image: img31,
    },
    {
      image: img32,
    },
    {
      image: img33,
    },
    {
      image: img34,
    },
    {
      image: img35,
    },
    {
      image: img36,
    },
    {
      image: img37,
    },
    {
      image: img38,
    },
    {
      image: img39,
    },
    {
      image: img40,
    },
    {
      image: img41,
    },
    {
      image: img42,
    },
    {
      image: img43,
    },
    {
      image: img44,
    },
    {
      image: img45,
    },
    {
      image: img46,
    },
    {
      image: img47,
    },
    {
      image: img48,
    },
    {
      image: img49,
    },
    {
      image: img50,
    },
    {
      image: img51,
    },
    {
      image: img52,
    },
    {
      image: img53,
    },
    {
      image: img54,
    }
  ]);
  return (
    <div className="tattoos" id="tattoos">
      <Navigation />
      <Sidebar />
      <div className="header" id="myHeader">
        <h1>Custom Airbrush</h1>
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
        {/* <div className="gallery-container w-2">
          <div className="gallery-item">
            <div className="image">
              <img src={canoe} alt="canoe"></img>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Airbrush;
