import React from "react";
import Container from "react-bootstrap/Container";

function Content(props) {
  return (
    <div>
      <Container fluid={true}>
        <div className="content-wrapper">
          <div className="about-content">{props.children}</div>
          <div className="image-container">
            <img
              className="about-image"
              src={require("../imgs/headshot.jpg")}
              alt="headshot"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Content;
