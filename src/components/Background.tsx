import React, { FC } from "react";
import { Theme, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  backgroundLeft: {
    backgroundColor: "#f5ede6",
  },
  backgroundRight: {
    backgroundColor: "#034C52",
  },
}));

type BackgroundProps = {
  children: JSX.Element | JSX.Element[];
};

const Background: FC<BackgroundProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Box
        className={classes.backgroundLeft}
        style={{
          minHeight: "100vh",
          width: "35vw",
          position: "absolute",
          justifyContent: "flex-start",
          zIndex: 2,
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        {children}
      </Box>

      <Box
        className={classes.backgroundRight}
        style={{
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          position: "absolute",
        }}
      ></Box>
    </>
  );
};
export default Background;
