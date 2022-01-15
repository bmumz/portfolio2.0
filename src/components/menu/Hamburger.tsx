import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";
import React, { FC, useState } from "react";
import Menu from "./Menu";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/" },
  { title: "Contact", href: "/" },
];

const Hamburger: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <IconButton
            edge="start"
            color="default"
            aria-label="open drawer"
            onClick={() => setIsOpen(!isOpen)}
            disableRipple
            sx={{ zIndex: 2 }}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          <Menu isOpen={isOpen} setIsOpen={setIsOpen} pages={menuItems} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Hamburger;
