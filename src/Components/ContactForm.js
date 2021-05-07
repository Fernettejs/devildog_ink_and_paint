import React from 'react'

export const ContactForm = () => {
  return (
    <form method="POST" data-netlify="true">
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
    </form>
  )
}
export default ContactForm;

