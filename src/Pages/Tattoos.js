import React, { useState } from 'react'
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";


import img1 from "../assets/images/tattoos/tattoos-two/IMG_20191114_174019.jpg"
import img2 from "../assets/images/tattoos/tattoos-two/IMG_20191114_174023.jpg"
import img3 from "../assets/images/tattoos/tattoos-two/IMG_20191205_221214.jpg"
import img4 from "../assets/images/tattoos/tattoos-two/IMG_20191205_221220.jpg"
import img5 from "../assets/images/tattoos/tattoos-two/IMG_20191210_214105.jpg"
import img6 from "../assets/images/tattoos/tattoos-two/IMG_20200114_181403.jpg"
import img7 from "../assets/images/tattoos/tattoos-two/KIMG0169.jpg"
import img8 from "../assets/images/tattoos/tattoos-two/KIMG0172.jpg"
import img9 from "../assets/images/tattoos/tattoos-two/KIMG1439.jpg"
import img10 from "../assets/images/tattoos/tattoos-two/KIMG1443.jpg"
import img11 from "../assets/images/tattoos/tattoos-two/KIMG1446.jpg"
import img12 from "../assets/images/tattoos/tattoos-two/KIMG1495.jpg"
import img13 from "../assets/images/tattoos/tattoos-two/KIMG1497.jpg"
import img14 from "../assets/images/tattoos/tattoos-two/KIMG1507.jpg"
import img15 from "../assets/images/tattoos/tattoos-two/KIMG1597.jpg"
import img16 from "../assets/images/tattoos/tattoos-two/KIMG1599.jpg"
import img17 from "../assets/images/tattoos/tattoos-two/KIMG1601.jpg"
import img18 from "../assets/images/tattoos/tattoos-two/KIMG1602.jpg"
import img19 from "../assets/images/tattoos/tattoos-two/KIMG1603.jpg"
import img20 from "../assets/images/tattoos/tattoos-two/KIMG1699.jpg"
import img21 from "../assets/images/tattoos/tattoos-two/KIMG1700.jpg"
import img22 from "../assets/images/tattoos/tattoos-two/KIMG1715.jpg"
import img23 from "../assets/images/tattoos/tattoos-two/KIMG2268.jpg"
import img24 from "../assets/images/tattoos/tattoos-two/KIMG2269.jpg"
import img25 from "../assets/images/tattoos/tattoos-two/KIMG2270.jpg"
import img26 from "../assets/images/tattoos/tattoos-two/KIMG2458.jpg"
import img27 from "../assets/images/tattoos/tattoos-two/KIMG2460.jpg"
import img28 from "../assets/images/tattoos/tattoos-two/00D5DB38-820C-4893-A401-B42C10E49ECF-min.jpg"
import img29 from "../assets/images/tattoos/tattoos-two/0DBD5A02-F3C3-4EE6-AD50-E12585176D5D-min.jpg"
import img30 from "../assets/images/tattoos/tattoos-two/3A49C25B-5329-489D-A614-A5355781AFCB-min.jpg"
import img31 from "../assets/images/tattoos/tattoos-two/6C28277A-4F2F-4F3E-8704-497D0E68AA10-min.jpg"
import img32 from "../assets/images/tattoos/tattoos-two/6DCA5CA0-E3FB-4151-9444-3EA13D65CC9B-min.jpg"
import img33 from "../assets/images/tattoos/tattoos-two/8B136BB8-CDA2-413F-9525-92F00FFA4833-min.jpg"
import img34 from "../assets/images/tattoos/tattoos-two/29D6EC9E-D9B0-434E-B067-BC4F2E0CB58B-min.jpg"
import img35 from "../assets/images/tattoos/tattoos-two/31F44E1F-ECE3-4389-BA7C-44D464672023-min.jpg"
import img36 from "../assets/images/tattoos/tattoos-two/92397755-7C41-4FFA-A281-3D8CA051207D-min.jpg"
import img37 from "../assets/images/tattoos/tattoos-two/BD69B1D2-896D-4487-A6B7-DF5AB92765D2-min.jpg"
import img38 from "../assets/images/tattoos/tattoos-two/C3DA95ED-CE1F-4624-9EC4-207925A5AC2F-min.jpg"
import img39 from "../assets/images/tattoos/tattoos-two/C6BCAED6-2323-49BB-821D-16D95A5417A7-min.jpg"
import img40 from "../assets/images/tattoos/tattoos-two/IMG_1248-min.jpg"
import img41 from "../assets/images/tattoos/tattoos-two/IMG_1251-min.jpg"
import img42 from "../assets/images/tattoos/tattoos-two/IMG_1261-min.jpg"
import img43 from "../assets/images/tattoos/tattoos-two/IMG_1264-min.jpg"
import img44 from "../assets/images/tattoos/tattoos-two/IMG_1316-min.jpg"
import img45 from "../assets/images/tattoos/tattoos-two/IMG_1479-min.jpg"
import img46 from "../assets/images/tattoos/tattoos-two/IMG_1515-min.jpg"
import img47 from "../assets/images/tattoos/tattoos-two/IMG_1710-min.jpg"
import img48 from "../assets/images/tattoos/tattoos-two/IMG_1759.jpg"
import img49 from "../assets/images/tattoos/tattoos-two/IMG_1777.jpg"
import img50 from "../assets/images/tattoos/tattoos-two/IMG_1779.jpg"
import img51 from "../assets/images/tattoos/tattoos-two/IMG_1781.jpg"
import img52 from "../assets/images/tattoos/tattoos-two/IMG_1783.jpg"
import img53 from "../assets/images/tattoos/tattoos-two/IMG_1810.jpg"
import img54 from "../assets/images/tattoos/tattoos-two/IMG_1965.jpg"
import img55 from "../assets/images/tattoos/tattoos-two/IMG_1966.jpg"
import img56 from "../assets/images/tattoos/tattoos-two/IMG_1993.jpg"
import img57 from "../assets/images/tattoos/tattoos-two/IMG_2043.jpg"
import img58 from "../assets/images/tattoos/tattoos-two/IMG_2059.jpg"
import img59 from "../assets/images/tattoos/tattoos-two/IMG_20190306_131503.jpg"
import img60 from "../assets/images/tattoos/tattoos-two/IMG_20190828_200955.jpg"
import img61 from "../assets/images/tattoos/tattoos-two/IMG_20190829_210404.jpg"
import img62 from "../assets/images/tattoos/tattoos-two/IMG_20190918_190947.jpg"
import img63 from "../assets/images/tattoos/tattoos-two/IMG_20191113_230915.jpg"
import img64 from "../assets/images/tattoos/tattoos-two/IMG_20191114_122843.jpg"
import img65 from "../assets/images/tattoos/tattoos-two/IMG_20191114_142440.jpg"
import img66 from "../assets/images/tattoos/tattoos-two/IMG_20191114_142455.jpg"
import img67 from "../assets/images/tattoos/tattoos-two/IMG_20191114_174001.jpg"
import img68 from "../assets/images/tattoos/bandana.jpg";
import img69 from "../assets/images/tattoos/birds.jpg";
import img70 from "../assets/images/tattoos/born-to-kill.jpg";
import img71 from "../assets/images/tattoos/dead.jpg";
import img72 from "../assets/images/tattoos/deer.jpg";
import img73 from "../assets/images/tattoos/dont-tread-on-me.jpg";
import img74 from "../assets/images/tattoos/eagle.jpg";
import img75 from "../assets/images/tattoos/flag-in-arm.jpg";
import img76 from "../assets/images/tattoos/gears-in-arm.jpg";
import img77 from "../assets/images/tattoos/grapes.jpg";
import img78 from "../assets/images/tattoos/graves.jpg";
import img79 from "../assets/images/tattoos/gunners-mate.jpg";
import img80 from "../assets/images/tattoos/inside-arm.jpg";
import img81 from "../assets/images/tattoos/iwo-jima.jpg";
import img82 from "../assets/images/tattoos/jiu-jitsu.jpg";
import img83 from "../assets/images/tattoos/knight.jpg";
import img84 from "../assets/images/tattoos/lipstick.jpg";
import img85 from "../assets/images/tattoos/m4.jpg";
import img86 from "../assets/images/tattoos/map.jpg";
import img87 from "../assets/images/tattoos/mask.jpg";
import img88 from "../assets/images/tattoos/mom-tattoo.jpg";
import img89 from "../assets/images/tattoos/rifle-memorial.jpg";
import img90 from "../assets/images/tattoos/samurai.jpg";
import img91 from "../assets/images/tattoos/scroll.jpg";
import img92 from "../assets/images/tattoos/star.jpg";
import img93 from "../assets/images/tattoos/temple.jpg";
import img94 from "../assets/images/tattoos/tree.jpg";


const Tattoos = () => {
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
    },
    {
      image: img55,
    },
    {
      image: img56,
    },
    {
      image: img57,
    },
    {
      image: img58,
    },
    {
      image: img59,
    },
    {
      image: img60,
    },
    {
      image: img61,
    },
    {
      image: img62,
    },
    {
      image: img63,
    },
    {
      image: img64,
    },
    {
      image: img65,
    },
    {
      image: img66,
    },
    {
      image: img67,
    },
    {
      image: img68,
    },
    {
      image: img69,
    },
    {
      image: img70,
    },
    {
      image: img71,
    },
    {
      image: img72,
    },
    {
      image: img73,
    },
    {
      image: img74,
    },
    {
      image: img75,
    },
    {
      image: img76,
    },
    {
      image: img77,
    },
    {
      image: img78,
    },
    {
      image: img79,
    },
    {
      image: img80,
    },
    {
      image: img81,
    },
    {
      image: img82,
    },
    {
      image: img83,
    },
    {
      image: img84,
    },
    {
      image: img85,
    },
    {
      image: img86,
    },
    {
      image: img87,
    },
    {
      image: img88,
    },
    {
      image: img89,
    },
    {
      image: img90,
    },
    {
      image: img91,
    },
    {
      image: img92,
    },
    {
      image: img93,
    },
    {
      image: img94,
    }
  ]);

  // const Tattoos = (props) => {
  //   const faders = document.querySelectorAll(".fade-in");
  //   const appearOptions = {
  //     threshold: 1,
  //     rootMargin: "0px 0px -100px 0px"
  //   };

  //   const appearOnScroll = new IntersectionObserver(function (
  //     entries,
  //     appearOnScroll
  //   ) {
  //     entries.forEach(entry => {
  //       if (!entry.isIntersecting) {
  //         return;
  //       } else {
  //         entry.target.classList.add("appear");
  //         appearOnScroll.unobserve(entry.target)
  //       }
  //     })
  //   },
  //   appearOptions);

  //   faders.forEach(fader => {
  //     appearOnScroll.observe(fader);
  //   })

  return (
    <div className="tattoos" id="tattoos">
      <Navigation />
      <Sidebar />
      <div className="header" id="myHeader">
        <h1>Tattoos</h1>
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
// };
export default Tattoos;
