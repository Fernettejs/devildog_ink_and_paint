import React from 'react'

export const ContactForm = () => {
  return (
    <form name="contact v1" method="POST" data-netlify="true" onSubmit="submit">
      <input type="hidden" name="form-name" value="contact v1"/>
      <div className="fields">
        <div className="field half">
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div className="field half">
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="field">
          <textarea
            name="comments"
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
          <button type="submit" value="Send Message" class="button">Send</button>
        </li>
      </ul>
    </form>
  )
}
export default ContactForm;

