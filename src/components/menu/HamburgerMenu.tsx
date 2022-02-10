import React, { FC, useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

import Menu from "./Menu";
import { pages } from "../../routes";

const useStyles = makeStyles({
  appBar: {
    boxShadow: "none !important",
    zIndex: 2,
    minHeight: "100%",
    width: "unset !important",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

const HamburgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar color="transparent" className={classes.appBar}>
        <Toolbar disableGutters className={classes.toolbar}>
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={() => setIsOpen(!isOpen)}
            disableRipple
            size="large"
            sx={{ zIndex: 2 }}
          >
            {isOpen ? (
              <CloseIcon
                color="secondary"
                fontSize={isMobile ? "medium" : "large"}
              />
            ) : (
              <MenuIcon
                fontSize={isMobile ? "medium" : "large"}
                sx={{
                  color: (theme) => theme.palette.background.paper,
                }}
              />
            )}
          </IconButton>
          <Menu isOpen={isOpen} setIsOpen={setIsOpen} pages={pages} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HamburgerMenu;
