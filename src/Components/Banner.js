import React from "react";
import Social from "../Components/Social";

// import { TimelineLite } from 'gsap'


const Banner = () => {
  // const { btn } = this.$refs
  //   const timeline = new TimelineLite() 

  // timeline.from(btn, {duration: 2, x: '-500%', ease: 'bounce', delay: 2})
  return (
    <section className="banner center" id="home">
      <div className="banner-text">
        <h1>DEVILDOG INK & PAINT</h1>
        <h4>Custom Art Studio</h4>
        <button className="banner-btn">
          <a href="#contact" className="btn">
            Get some shit done
          </a>
        </button>
      </div>
      <Social />
    </section>

  );
};

export default Banner;
