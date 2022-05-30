import { Typography } from "@mui/material";
import React, { FC } from "react";

import { Background, HamburgerMenu } from "../components";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Background>
      <>{children}</>
      <Typography
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: 50,
        }}
      >
        &copy; {new Date().getFullYear()} brandiCodes
      </Typography>
    </Background>
  </>
);

export default Layout;
