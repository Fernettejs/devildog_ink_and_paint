import React from "react";
import { Link } from "react-router-dom";

import thunder from "../assets/images/other/thunder-roads.png";
import hope from "../assets/images/other/hope-for-the-warriors.png";

const SocialProof = () => {

  // const faders = document.querySelectorAll(".fade-in");
  // const appearOptions = {
  //   threshold: 1,
  //   rootMargin: "0px 0px -100px 0px", 
  // };

  // const appearOnScroll = new IntersectionObserver(function (
  //   entries,
  //   appearOnScroll
  // ) {
  //   entries.forEach(entry => {
  //     if (!entry.isIntersecting) {
  //       return;
  //     } else {
  //       entry.target.classList.add("appear");
  //       appearOnScroll.unobserve(entry.target);
  //     }
  //   });
  // },

  // appearOptions);

  // faders.forEach(fader => {
  //   appearOnScroll.observe(fader);
  // });

  return (
    <div className="social-proof" >
      <div className="heading">
        <h2>Work Seen In</h2>
      </div>
      <div className="content">
      <div className="social-proof-box fade-in">
          <Link to="/thunder-roads">
            <img src={thunder} alt="" />
          </Link>
        </div>
        <div className="social-proof-box fade-in">
          <a href="https://www.hopeforthewarriors.org/newsroom/shop-these-small-business-saturday-deals-and-support-hope/">
            <img src={hope} alt="" />
          </a>
        </div>
        {/* <div className="social-proof-box fade-in">
          <img src={thunder} alt="" />
        </div>
        <div className="social-proof-box fade-in">
          <img src={thunder} alt="" />
        </div>
        <div className="social-proof-box fade-in">
          <img src={thunder} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default SocialProof;
