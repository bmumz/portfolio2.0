import React from "react";
import { Grid } from "@mui/material";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Card from "../components/Card";

const ProjectsPage = () => {
  return (
    <Card>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          minWidth: "40vw",
          borderRadius: 10,
          marginTop: "2rem",
        }}
      >
        {projects &&
          projects.map((project) => {
            console.log(project);
            return <ProjectCard project={project} />;
          })}
      </Grid>
    </Card>
  );
};

export default ProjectsPage;
