import React from "react";
import { Grid } from "@mui/material";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => (
  <Grid
    container
    sx={{
      display: "flex",
      justifyContent: "center",
      background: (theme) => theme.palette.primary.contrastText,
      flexDirection: "column",
      minWidth: "60vw",
      borderRadius: 2,
    }}
  >
    {projects &&
      projects.map((project) => {
        console.log(project);
        return <ProjectCard project={project} />;
      })}
  </Grid>
);

export default ProjectsPage;
