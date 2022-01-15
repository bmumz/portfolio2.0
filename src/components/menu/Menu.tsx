import { Box, Drawer, Link } from "@mui/material";
import GatsbyLink from "gatsby-link";
import React, { Dispatch, FC, SetStateAction } from "react";

type MenuProps = {
  pages: IPage[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Menu: FC<MenuProps> = ({ pages, isOpen, setIsOpen }) => (
  <Drawer
    anchor="right"
    variant="temporary"
    open={isOpen}
    onClose={() => setIsOpen(false)}
    PaperProps={{
      sx: {
        width: { xs: "50vw", sm: "35vw", lg: "25vw" },
        padding: (theme) => theme.spacing(2),
      },
    }}
    sx={{ zIndex: 1 }}
  >
    <Box
      sx={{
        paddingTop: (theme) => theme.spacing(6),
        display: "flex",
        flexDirection: "column",
      }}
    >
      {pages &&
        pages.map((page: IPage) => (
          <Link
            component={GatsbyLink}
            to={page.href}
            sx={{ textDecoration: "none", fontSize: "2rem" }}
          >
            {page.title}
          </Link>
        ))}
    </Box>
  </Drawer>
);

export default Menu;
