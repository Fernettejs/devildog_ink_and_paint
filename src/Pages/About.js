import React from "react";
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import Social from "../Components/Social";

import artist from "../assets/images/the-artist.jpg";
import deployed1 from "../assets/images/other/deployed-1.jpg";


const About = () => {
  return (
    <div>
      <Navigation />
      <Sidebar />
      <section className="about" id="about">
        <div className="content">
          <div className="contentBox">
            <div className="heading">
              <h2>The Artist</h2>
            </div>
            <p className="the-artist">
              Meet Joe, a Marine Corps Purple Heart veteran. Joe served in
              Fallujah, Iraq in 2006. On Dec. 28th he was shot twice by sniper
              fire and severely wounded. <br /> <br/>
              After a very long recovery, Joe started
              to draw and paint as therapy for his arm, hand, and mind. He uses
              art as a way to help himself and others. Through art like
              tattooing, Devildog Ink & Paint llc. provides Pain Therapy (as
              Joe's veteran brothers and sisters call it). <br/> <br/>
              Its a way to get your
              mind off things and to be in a comfortable place where you can
              enjoy the process of getting a great piece of art.
            </p>
          </div>
          <img src={deployed1} className="img" alt="" />

          {/* <div className="w50"> */}
          <img src={artist} className="img" alt="" />
          <div className="contentBox">

            <p className="the-artist"> Joe also does
            airbrush projects as a way to keep his mind busy. That is the
            Paint Therapy Art. For the ones that can't afford the mainstream
            graphics artist for custom work.<br /> <br/>
            Joe uses his time to create the
            best one of a kind custom art piece that he can produce. Devildog
            Ink & Paint llc. specializes in veteran and patriotic themes.
            Combat scenes, memorials, American Flags, and much more. <br /> <br/>
            Custom
            paint by hand or air brush on most surfaces or items such as
            motorcycle fenders, gas tanks, fairings, saddle bags, guitars,
            mailboxes, snowmobiles, helmets, hard hats, hockey masks, rifles,
            canvas, walls, and many other items. <br /> <br/>
            Check out <a rel="stylesheet" href="/#services" className="inline-link">Devildog Ink & Paint llc. Portfolio page </a> to see some of Joe's work.</p>
          </div>
          {/* <img src={deployed2} className="img" alt="" /> */}
        </div>
        <Social />
      </section>
    </div>
  );
};

export default About;
