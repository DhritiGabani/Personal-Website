import React from "react";
import { Projects } from "../components/Projects";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProjectInfo() {
  const projectId = useParams().projectId;
  const project = Projects[projectId];
  return (
    <div className="project-display">
      <p className="subtitle">{project.name}</p>
      <div style={{ display: "flex", "padding-bottom": "10px" }}>
        {/* <Container fluid={true}> */}
        <p>{project.description}</p>
      </div>
      <div>
        <Row className="justify-content-center info-wrapper">
          <Col>
            <img
              style={{ padding: 0 }}
              className="project-screenshot"
              src={project.screenshot}
              alt=""
            />
          </Col>
          <Col className="motivation-wrapper">
            <div style={{ align: "left", "font-size": "23px" }}>Motivation</div>
            <p style={{ align: "center" }}>{project.motivation}</p>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <p style={{ "padding-top": "10px", "font-size": "18px" }}>
            Tools used:{" "}
            <span style={{ "font-size": "13px" }}>
              <kbd className="code">{project.tools}</kbd>
            </span>
          </p>
        </Row>
        <Row>
          <img className="project-screenshot" src={project.screenshot} alt="" />
        </Row>
        {/* </Container> */}
      </div>
    </div>
  );
}

export default ProjectInfo;
