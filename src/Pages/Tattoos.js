import React from "react";
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import Photo from "../Components/Photo";
import Footer from "../Components/Footer";

import bandana from "../assets/images/tattoos/bandana.jpg";
import birds from "../assets/images/tattoos/birds.jpg";
import born_to_kill from "../assets/images/tattoos/born-to-kill.jpg";
import dead from "../assets/images/tattoos/dead.jpg";
import deer from "../assets/images/tattoos/deer.jpg";
import dont_tread from "../assets/images/tattoos/dont-tread-on-me.jpg";
import eagle from "../assets/images/tattoos/eagle.jpg";
import flag_in_arm from "../assets/images/tattoos/flag-in-arm.jpg";
import gears from "../assets/images/tattoos/gears-in-arm.jpg";
import grapes from "../assets/images/tattoos/grapes.jpg";
import graves from "../assets/images/tattoos/graves.jpg";
import gunners from "../assets/images/tattoos/gunners-mate.jpg";
import inside_arm from "../assets/images/tattoos/inside-arm.jpg";
import iwo_jima from "../assets/images/tattoos/iwo-jima.jpg";
import jiu_jitsu from "../assets/images/tattoos/jiu-jitsu.jpg";
import knight from "../assets/images/tattoos/knight.jpg";
import lipstick from "../assets/images/tattoos/lipstick.jpg";
import m4 from "../assets/images/tattoos/m4.jpg";
import map from "../assets/images/tattoos/map.jpg";

import mask from "../assets/images/tattoos/mask.jpg";
import mom from "../assets/images/tattoos/mom-tattoo.jpg";
import rifle from "../assets/images/tattoos/rifle-memorial.jpg";
import samurai from "../assets/images/tattoos/samurai.jpg";
import scroll from "../assets/images/tattoos/scroll.jpg";
import star from "../assets/images/tattoos/star.jpg";
import temple from "../assets/images/tattoos/temple.jpg";
import tree from "../assets/images/tattoos/tree.jpg";

const Tattoos = (props) => {
    return (
      <div className="tattoos" id="tattoos">
        <Navigation />
        <Sidebar />
        <div className="header" id="myHeader">
          <h1>Tattoos</h1>
        </div>
        <div className="container">
          {/* <Photo photo={tree} alt={"tree"} /> */}
          <div className="gallery-container h-2">
            <div className="gallery-item">
              <div className="image">
                <img src={bandana} alt="bandana" />
              </div>
            </div>
          </div>
          <div className="gallery-container w-2">
            <div className="gallery-item">
              <div className="image">
                <img src={birds} alt="birds" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={born_to_kill} alt="born to kill" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={dead} alt="dead" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={deer} alt="deer" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={dont_tread} alt="dont tread on me" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={eagle} alt="eagle" />
              </div>
            </div>
          </div>
          <div className="gallery-container h-2">
            <div className="gallery-item">
              <div className="image">
                <img src={flag_in_arm} alt="flag_in_arm" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={gears} alt="gears" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={grapes} alt="grapes" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img loading="lazy" src={graves} alt="graves" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img loading="lazy" src={gunners} alt="gunners" />
              </div>
            </div>
          </div>
          <div className="gallery-container w-2">
            <div className="gallery-item">
              <div className="image">
                <img loading="lazy" src={inside_arm} alt="inside_arm" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img loading="lazy" src={iwo_jima} alt="iwo_jima" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img loading="lazy" src={jiu_jitsu} alt="jiu_jitsu" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img loading="lazy" src={knight} alt="knight" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img loading="lazy" src={lipstick} alt="lipstick" />
              </div>
            </div>
          </div>
          <div className="gallery-container w-2">
            <div className="gallery-item">
              <div className="image">
                <img loading="lazy" src={m4} alt="m4" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img loading="lazy" src={map} alt="map" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img loading="lazy" src={mask} alt="mask" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img loading="lazy" src={mom} alt="mom" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img loading="lazy" src={rifle} alt="rifle" />
              </div>
            </div>
          </div>
          <div className="gallery-container h-2">
            <div className="gallery-item">
              <div className="image">
                <img loading="lazy" src={samurai} alt="samurai" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img loading="lazy" src={scroll} alt="scroll" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img loading="lazy" src={star} alt="star" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img loading="lazy" src={temple} alt="canoe" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img loading="lazy" src={tree} alt="canoe" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Tattoos;
