import React, { useState } from "react";
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

import thunder from "../assets/images/other/thunder-roads.png"
import img1 from "../assets/images/other/KIMG2440.jpg"
import img2 from "../assets/images/other/KIMG2441.jpg"
import img3 from "../assets/images/other/KIMG2442.jpg"
import img4 from "../assets/images/other/KIMG2444.jpg"
import img5 from "../assets/images/other/KIMG2443.jpg"

const ThunderRoads = () => {
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
        }
    ]);
    return (
        <div className="tattoos" id="tattoos">
            <Navigation />
            <Sidebar />
            <div className="header" id="myHeader">
                <img src={thunder} alt="thunder roads" />
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

export default ThunderRoads;
