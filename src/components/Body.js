import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Typewriter } from "react-simple-typewriter";

function Body(props) {
  return (
    <div>
      <Container fluid="true" style={{ marginLeft: "1rem" }}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={8}>
            {props.title}

            {props.typewriter && (
              <div
                style={{
                  height: "0rem",
                  marginBottom: "3.5rem",
                  color: "#C0D1FB",
                  fontWeight: 500,
                  fontSize: "2rem",
                  "font-family": "DM Sans",
                }}
              >
                <span style={{ color: "#B1C8FF" }}>
                  <Typewriter
                    words={[
                      "a builder",
                      "a creater",
                      "a developer",
                      "an avid learner",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={40}
                    deleteSpeed={50}
                    delaySpeed={1700}
                  />
                </span>
              </div>
            )}

            {props.subTitle && <div className="display">{props.subTitle}</div>}
            {props.text && (
              <div className="press">
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
