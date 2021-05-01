import React from 'react'
import * as FaIcons from "react-icons/fa";

const Social = () => {
    return (
        <div className="social" id="social">
          <div className="content">
            <div className="social-box">
              <a
                className="social-icon"
                href="https://www.youtube.com/channel/UCsp7n4jSu-uMAbMqL-QHJ9A"
                target="_blank"
                rel="noreferrer"
              >
                <FaIcons.FaYoutubeSquare />
              </a>
            </div>
            <div className="social-box">
              <a
                className="social-icon"
                href="https://www.instagram.com/devildog_inkandpaintllc/"
                target="_blank"
                rel="noreferrer"
              >
                <FaIcons.FaInstagramSquare />
              </a>
            </div>
            <div className="social-box">
              <a
                className="social-icon"
                href="https://www.facebook.com/DevildogInkandPaint"
                target="_blank"
                rel="noreferrer"
              >
                <FaIcons.FaFacebookSquare />
              </a>
            </div>
          </div>
        </div>
    )
}

export default Social
