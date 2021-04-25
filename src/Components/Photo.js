import React from "react";
import PropTypes from "prop-types";

const Photo = (text, photo, alt) => {
  return (
    <div
      // style={{
      //   grid: { size },
      // }}
      className="gallery-container"
    >
      <div className="gallery-item">
        <div className="image">
          <img src={photo} alt={alt}></img>
        </div>
      </div>
    </div>
  );
};

Window.propTypes = {
  img: PropTypes.string
};


export default Photo;
