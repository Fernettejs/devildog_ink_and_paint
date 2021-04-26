import React from "react";
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

import artist from "../assets/images/the-artist.jpg";
import ig from "../assets/images/ig-icon.jpg";
import youtube from "../assets/images/youtube-icon.jpg";

const About = () => {
  return (
    <div>
      <Navigation />
      <Sidebar />
      <section className="about" id="about">
        <div className="content">
          <div className="w50">
            <img src={artist} className="img" alt="" />
          </div>
          <div className="contentBox">
            <div className="heading">
              <h2>The Artist</h2>
            </div>
            <p id="the-artist">
              Meet Joe, a Marine Corps Purple Heart veteran. Joe served in
              Fallujah, Iraq in 2006. On Dec. 28th he was shot twice by sniper
              fire and severely wounded. After a very long recovery, Joe started
              to draw and paint as therapy for his arm, hand, and mind. He uses
              art as a way to help himself and others. Through art like
              tattooing, Devildog Ink & Paint llc. provides Pain Therapy (as
              Joe's veteran brothers and sisters call it). Its a way to get your
              mind off things and to be in a comfortable place where you can
              enjoy the process of getting a great piece of art. Joe also does
              airbrush projects as a way to keep his mind busy. That is the
              Paint Therapy Art. For the ones that cant afford the mainstream
              graphics artist for custom work. Joe uses his time to create the
              best one of a kind custom art piece that he can produce. Devildog
              Ink & Paint llc. specializes in veteran and patriotic themes.
              Combat scenes, memorials, American Flags, and much more. Custom
              paint by hand or air brush on most surfaces or items such as
              motorcycle fenders, gas tanks, fairings, saddle bags, guitars,
              mailboxes, snowmobiles, helmets, hard hats, hockey masks, rifles,
              canvas, walls, and many other items. Check out Devildog Ink &
              Paint llc. Portfolio page to see some of Joe's work.
            </p>
          </div>
        </div>
        <section className="social" id="social">
          <div className="content">
            <div className="social-box" id="youtube-box">
              <a
                href="https://www.youtube.com/channel/UCsp7n4jSu-uMAbMqL-QHJ9A"
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtube} alt="" />
              </a>
            </div>
            <div className="social-box" id="ig-box">
              <a
                href="https://www.instagram.com/devildog_inkandpaintllc/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ig} alt="" />
              </a>
            </div>
            <div className="social-box">
                  <Link
                    className="social-icon"
                    to="https://www.youtube.com/channel/UCsp7n4jSu-uMAbMqL-QHJ9A"
                  >
                    <FaIcons.FaFacebook/>
                  </Link>
                </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
