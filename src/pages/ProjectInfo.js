import React from "react";
import { Projects } from "../components/Projects";
import { useParams } from "react-router-dom";

function ProjectInfo() {
  const projectId = useParams().projectId;
  const project = Projects[projectId];
  return (
    <div>
      <div>
        <div>{project.name}</div>
        <div>
          <img className="project-screenshot" src={project.screenshot} alt="" />
        </div>
        <div>Motivation: {project.description}</div>
        <div>Tools used: {project.tools}</div>
      </div>
    </div>
  );
}

export default ProjectInfo;
