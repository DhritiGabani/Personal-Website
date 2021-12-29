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
      <Container fluid={true}>
        <Row className="justify-content-between p-3">
          <Col className="icons">
            <IconContext.Provider value={{ size: "2em" }}>
              <ul className="list">
                <li key="Connect">Connect with me here!</li>
                <li key="icons">
                  <FaEnvelope />
                  <FaGithub />
                  <FaLinkedin />
                </li>
              </ul>
            </IconContext.Provider>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
