import React from "react";
import * as FaIcons from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="heading">
        <h2>Contact</h2>
      </div>
      {/* <form method="POST" data-netlify="true">
        <div className="fields">
          <div className="field half">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="field half">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="field">
            <textarea
              name="message"
              id="message"
              cols="60"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="field">
            <input
              type="file"
              name="myfile"
              id="myfile"
              cols="60"
              rows="10"
              placeholder="Upload File"
            />
          </div>
          <div className="field">
            <div data-netlify-recaptcha="true"></div>
          </div>
        </div>
        <ul class="actions">
          <li>
            <input type="submit" value="Send Message" class="button primary" />
          </li>
        </ul>
      </form> */}

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
