import React, { FC, useState } from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

import Menu from "./Menu";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/" },
  { title: "Projects", href: "/" },
  { title: "Blog", href: "/" },
  { title: "Contact", href: "/" },
];

const useStyles = makeStyles({
  appBar: {
    boxShadow: "none !important",
    zIndex: 2,
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
  },
  hamburgerIcon: {
    zIndex: 2,
  },
});

const Hamburger: FC = () => {
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
            className={classes.hamburgerIcon}
          >
            {isOpen ? (
              <CloseIcon color="primary" fontSize="large" />
            ) : (
              <MenuIcon color="primary" fontSize="large" />
            )}
          </IconButton>

          <Menu isOpen={isOpen} setIsOpen={setIsOpen} pages={menuItems} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Hamburger;
