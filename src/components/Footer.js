import React from "react";
import { FaPaperPlane, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div>
        <a
          href="mailto:dhritigabani@gmail.com"
          className="sm-link"
          target="_blank"
          rel="noreferrer"
        >
          <FaPaperPlane size={28} className="social-media" />
        </a>
        <a
          href="https://github.com/dhritigabani"
          className="sm-link"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={28} className="social-media" />
        </a>
        <a
          href="https://www.linkedin.com/in/dhritigabani/"
          className="sm-link"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn size={28} className="social-media" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
