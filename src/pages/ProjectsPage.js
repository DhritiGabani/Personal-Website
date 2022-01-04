import React from "react";
import { Link } from "react-router-dom";
import { Projects } from "../components/Projects";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";

function ProjectsPage() {
  const renderProject = ([projectId, project]) => {
    return (
      <Grid item md={6} sm={12} id={projectId} className="project-gallery">
        <Item id={projectId}>
          <div className="project">
            <Link to={projectId}>
              <img className="project-image" src={project.img} alt="" />
            </Link>
            <div className="project-info">
              {project.name}
              <p>{project.subTitle}</p>
            </div>
          </div>
        </Item>
      </Grid>
      // </Box>
    );
  };

  return (
    <div>
      <p className="project-page-title">
        Some of the projects I have worked on
      </p>
      {/* Iterate through my Projects and then I want to display each project */}
      <Grid container>{Object.entries(Projects).map(renderProject)}</Grid>
    </div>
  );
}

export default ProjectsPage;
