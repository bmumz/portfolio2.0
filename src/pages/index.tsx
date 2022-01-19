import * as React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "../theme";

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
    </ThemeProvider>
  );
};

export default IndexPage;
