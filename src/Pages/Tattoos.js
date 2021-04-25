import React from "react";
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import Photo from "../Components/Photo";
import Footer from "../Components/Footer";

import bandana from "../assets/images/tattoos/bandana.png";
import birds from "../assets/images/tattoos/birds.png";
import born_to_kill from "../assets/images/tattoos/born-to-kill.png";
import dead from "../assets/images/tattoos/dead.png";
import deer from "../assets/images/tattoos/deer.png";
import dont_tread from "../assets/images/tattoos/dont-tread-on-me.png";
import eagle from "../assets/images/tattoos/eagle.png";
import flag_in_arm from "../assets/images/tattoos/flag-in-arm.png";
import gears from "../assets/images/tattoos/gears-in-arm.png";
import grapes from "../assets/images/tattoos/grapes.png";
import graves from "../assets/images/tattoos/graves.png";
import gunners from "../assets/images/tattoos/gunners-mate.png";
import inside_arm from "../assets/images/tattoos/inside-arm.png";
import iwo_jima from "../assets/images/tattoos/iwo-jima.png";
import jiu_jitsu from "../assets/images/tattoos/jiu-jitsu.png";
import knight from "../assets/images/tattoos/knight.png";
import lipstick from "../assets/images/tattoos/lipstick.png";
import m4 from "../assets/images/tattoos/m4.png";
import map from "../assets/images/tattoos/map.png";

import mask from "../assets/images/tattoos/mask.png";
import mom from "../assets/images/tattoos/mom-tattoo.png";
import rifle from "../assets/images/tattoos/rifle-memorial.png";
import samurai from "../assets/images/tattoos/samurai.png";
import scroll from "../assets/images/tattoos/scroll.png";
import star from "../assets/images/tattoos/star.png";
import temple from "../assets/images/tattoos/temple.png";
import tree from "../assets/images/tattoos/tree.png";

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
                <img src={graves} alt="graves" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={gunners} alt="gunners" />
              </div>
            </div>
          </div>
          <div className="gallery-container w-2">
            <div className="gallery-item">
              <div className="image">
                <img src={inside_arm} alt="inside_arm" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={iwo_jima} alt="iwo_jima" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={jiu_jitsu} alt="jiu_jitsu" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={knight} alt="knight" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={lipstick} alt="lipstick" />
              </div>
            </div>
          </div>
          <div className="gallery-container w-2">
            <div className="gallery-item">
              <div className="image">
                <img src={m4} alt="m4" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={map} alt="map" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={mask} alt="mask" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={mom} alt="mom" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={rifle} alt="rifle" />
              </div>
            </div>
          </div>
          <div className="gallery-container h-2">
            <div className="gallery-item">
              <div className="image">
                <img src={samurai} alt="samurai" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={scroll} alt="scroll" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={star} alt="star" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={temple} alt="canoe" />
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={tree} alt="canoe" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Tattoos;
