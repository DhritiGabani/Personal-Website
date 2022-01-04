import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeWriterEffect from "react-typewriter-effect";

function Body(props) {
  return (
    <div>
      <Container fluid="true" style={{ marginLeft: "1rem" }}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={8}>
            {props.title && (
              <div className="displays font-weight-bold">{props.title}</div>
            )}

            {props.typewriter && (
              <div style={{ height: "1rem", marginBottom: "3rem" }}>
                <TypeWriterEffect
                  textStyle={{
                    color: "#3F3D56",
                    fontWeight: 500,
                    fontSize: "2rem",
                    "font-family": "DM Sans",
                  }}
                  startDelay={1500}
                  cursorColor="black"
                  multiText={[
                    "a builder",
                    "a creater",
                    "a developer",
                    "an avid learner",
                  ]}
                  multiTextDelay={1700}
                  typeSpeed={40}
                />
              </div>
            )}

            {props.subTitle && <div className="display">{props.subTitle}</div>}
            {props.text && (
              <div className="lead font-weight-light">
                press <kbd className="code">cmd</kbd> +{" "}
                <kbd className="code">k</kbd> / <kbd className="code">ctrl</kbd>{" "}
                + <kbd className="code">k</kbd> to learn more about me
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Body;
