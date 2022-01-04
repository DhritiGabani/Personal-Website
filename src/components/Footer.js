import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import "../App.css";

function Footer() {
  return (
    <footer className="mt-5">
      {/* className="mt-5" */}
      <Container fluid={true}>
        <Row className="justify-content-between p-3">
          <Col className="icons">
            <IconContext.Provider value={{ size: "2em" }}>
              <p className="more-info">Connect with me here!</p>
              <div className="fa">
                {" "}
                <a href="mailto:dhritigabani@gmail.com" className="sm-link">
                  <i className="fa-envelope social-media">
                    <FaEnvelope />
                  </i>
                </a>
                <a href="https://github.com/dhritigabani" className="sm-link">
                  <i className="fa-github social-media">
                    <FaGithub />
                  </i>
                </a>
                <a
                  href="https://www.linkedin.com/in/dhriti-gabani-0658611ba/"
                  className="sm-link"
                >
                  <i className="fa-linkedin social-media">
                    <FaLinkedin />{" "}
                  </i>
                </a>
              </div>
            </IconContext.Provider>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
