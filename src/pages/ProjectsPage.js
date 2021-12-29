import React from "react";
import { Link } from "react-router-dom";
import { Projects } from "../components/Projects";

function ProjectsPage() {
  const renderProject = ([projectId, project]) => {
    return (
      <div id={projectId} className="project-gallery">
        <Link to={projectId}>
          <div id={projectId} className="project">
            <img className="project-image" src={project.img} alt="" />
            <div className="project-info">
              {project.name}
              <p>{project.subTitle}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div>
      <h3>Some of the projects I have worked on</h3>
      {/* Iterate through my Projects and then I want to display each project */}
      {Object.entries(Projects).map(renderProject)}
    </div>
  );
}

export default ProjectsPage;
