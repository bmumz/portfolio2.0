import { Box, Theme, ThemeProvider, Typography, useTheme } from "@mui/material";
import { ProjectCard } from "../components";

import * as React from "react";
import { theme } from "../theme";
import { projects } from "../data/projects";

const IndexPage = () => {
  console.log(projects);
  return (
    <ThemeProvider theme={theme}>
      <Box
        style={{
          backgroundColor: theme.palette.cognac.main,
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Hello World
      </Box>
    </ThemeProvider>
  );
};

export default IndexPage;
