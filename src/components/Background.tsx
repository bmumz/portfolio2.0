import React, { FC } from "react";
import { Theme, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HamburgerMenu from "./menu/HamburgerMenu";

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
      <HamburgerMenu />
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </>
  );
};
export default Background;
