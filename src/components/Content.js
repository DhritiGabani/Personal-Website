import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Content(props) {
  return (
    <div>
      <Container fluid={true}>
        {/* <Row className="justify-content-center">
          <Col sm={7} xs={10} className="about-content">
            {props.children}
          </Col>
          <Col sm={5} xs={10}>
            <img
              className="about-image"
              src={require("../imgs/headshot.JPG")}
              alt="headshot"
            />
          </Col>
        </Row> */}
        <div className="content-wrapper">
          <div className="about-content">{props.children}</div>
          <div className="image-container">
            <img
              className="about-image"
              src={require("../imgs/headshot.JPG")}
              alt="headshot"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Content;
