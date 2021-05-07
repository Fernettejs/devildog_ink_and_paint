import React from "react";
import * as FaIcons from "react-icons/fa";

import ContactForm from "../Components/ContactForm";


const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="heading">
        <h2>Contact</h2>
      </div>
      <ContactForm />
      <div className="content">
        <div className="contactInfo">
          <div className="contactInfoBox">
            <div className="box">
              <FaIcons.FaPhone className="icon" />
              <div className="text">
                <h3>Call or Text</h3>
                <a href="tel:989-859-3499">989-429-4753</a>
              </div>
            </div>
            <div className="box">
              <FaIcons.FaEnvelope className="icon" />
              <div className="text">
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
