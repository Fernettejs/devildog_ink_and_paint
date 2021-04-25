import React from "react";

const Banner = () => {
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
    </section>
  );
};

export default Banner;
