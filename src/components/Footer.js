import React from "react";
import { FaPaperPlane, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div>
        <a href="mailto:dhritigabani@gmail.com" className="sm-link">
          <FaPaperPlane size={28} className="social-media" />
        </a>
        <a href="https://github.com/dhritigabani" className="sm-link">
          <FaGithub size={28} className="social-media" />
        </a>
        <a
          href="https://www.linkedin.com/in/dhriti-gabani-0658611ba/"
          className="sm-link"
        >
          <FaLinkedinIn size={28} className="social-media" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
