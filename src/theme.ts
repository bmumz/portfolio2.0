import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    cognac?: Palette["primary"];
    navy?: Palette["primary"];
    pewter: Palette["primary"];
  }

  interface PaletteOptions {
    cognac?: PaletteOptions["primary"];
    navy?: PaletteOptions["primary"];
    pewter: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      // cognac
      main: "#9E6F6D",
    },
    cognac: {
      main: "#9E6F6D",
      light: "#e5dedd",
      dark: "#7e5957",
    },
    navy: {
      main: "#1E3148",
    },
    pewter: {
      main: "#a7a19e",
      light: "#e5e3e2",
    },
    // rich navy
    secondary: {
      main: "#1E3148",
    },
    error: {
      main: "#c1220c",
    },
    text: {
      // off-white "rose quartz"
      primary: "#E6D7D5",
      // black
      secondary: "#333333",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#fbe8e8",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
  },
});
