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
      <div className="contactInfoBox">
        <div className="box">
          <FaIcons.FaPhone className="icon" />
          <div className="text">
            <h3>Or Call or Text</h3>
            <a href="tel:989-429-4753">989-429-4753</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
