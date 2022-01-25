import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./src/theme";
import { SnackbarProvider } from "notistack";
import { Zoom } from "@mui/material";
import Background from "./src/components/Background.tsx";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Background>
          <SnackbarProvider
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            TransitionComponent={Zoom}
            maxSnack={1}
          >
            {element}
          </SnackbarProvider>
        </Background>
      </CssBaseline>
    </ThemeProvider>
  );
}
