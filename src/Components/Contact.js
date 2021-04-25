import React from "react";
import * as FaIcons from "react-icons/fa";

const Contact = () => {
  return (
    <section class="contact" id="contact">
      <div class="heading">
        <h2>Contact</h2>
      </div>
      <div class="content">
        <div class="contactInfo">
          <div class="contactInfoBox">
            <div class="box">
                <FaIcons.FaPhone class="icon"/>
              <div class="text">
                <h3>Call or Text</h3>
                <a href="tel:989-859-3499">989-429-4753</a>
              </div>
            </div>
            <div class="box">
                <FaIcons.FaEnvelope class="icon"/>
              <div class="text">
                <h3>Email</h3>
                <a href="mailto:Joe@DevilDogInkandPaint.com">
                  Joe@DevilDogInkandPaint.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
