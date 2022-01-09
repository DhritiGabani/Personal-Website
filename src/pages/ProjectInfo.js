import React from "react";
import { Projects } from "../components/Projects";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProjectInfo() {
  const projectId = useParams().projectId;
  const project = Projects[projectId];
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="project-display">
        <p className="subtitle">{project.name}</p>
        <div style={{ display: "flex", "padding-bottom": "10px" }}>
          {/* <Container fluid={true}> */}
          <p>
            <span style={{ "font-size": "18px" }}>{project.description}</span>
          </p>
        </div>
        <div>
          <Row className="justify-content-center info-wrapper">
            <Col>
              <img
                style={{ padding: 0 }}
                className="project-screenshot"
                src={project.screenshotMain}
                alt=""
              />
            </Col>
            <Col className="motivation-wrapper">
              <div
                style={{
                  align: "left",
                  "font-size": "23px",
                  "font-weight": "500",
                }}
              >
                Motivation
              </div>
              <p style={{ align: "center", "font-size": "18px" }}>
                {project.motivation}
              </p>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <p
              style={{
                "margin-top": "20px",
                "font-size": "20px",
                "font-weight": "500",
              }}
            >
              Tools used:{" "}
              <span style={{ "font-size": "13px" }}>
                {project.tools.map((item) => (
                  <kbd className="language" style={{ marginRight: "0.5rem" }}>
                    {item}
                  </kbd>
                ))}
              </span>
            </p>
          </Row>
          <Row>
            <img
              className="project-screenshot-sec"
              src={project.screenshotSecondary}
              alt=""
            />
          </Row>
          {/* </Container> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;
