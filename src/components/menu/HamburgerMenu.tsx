import React, { FC, useState } from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

import Menu from "./Menu";
import { pages } from "../../routes";

const useStyles = makeStyles({
  appBar: {
    boxShadow: "none !important",
    zIndex: 2,
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

const HamburgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const classes = useStyles();

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
          >
            {isOpen ? (
              <CloseIcon color="secondary" fontSize="large" />
            ) : (
              <MenuIcon
                fontSize="large"
                sx={{ color: (theme) => theme.palette.background.paper }}
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
