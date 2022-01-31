import React, { Dispatch, FC, SetStateAction } from "react";
import { Box, Drawer, Link, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import GatsbyLink from "gatsby-link";

import { isInternalLink } from "../../utils";

const useStyles = makeStyles((theme: Theme) => ({
  drawerRoot: {
    zIndex: "3 !important",
  },
  drawerPaper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      width: "25vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
  menuRoot: {
    paddingTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
  },
  linkRoot: {
    textDecoration: "none",
    fontSize: "2rem",
    padding: theme.spacing(1),
  },
  linkTitle: {
    fontWeight: "500 !important",
    letterSpacing: `${theme.spacing(0.25)} !important`,
    position: "relative",
    textDecoration: "none",
    display: "inline-block",
    transition: "color ease 0.3s",
    padding: theme.spacing(0, 1),
    "&::after": {
      content: "''",
      position: "absolute",
      zIndex: -1,
      width: "100%",
      height: 2,
      left: "0",
      bottom: "0",
      backgroundColor: theme.palette.secondary.main,
      transition: "all ease 0.3s",
    },
    [theme.breakpoints.up("md")]: {
      "&:hover": {
        color: theme.palette.primary.contrastText,
        "&::after": { height: "100%" },
      },
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem !important",
      fontWeight: 400,
      padding: 0,
    },
  },
}));

type MenuProps = {
  pages: IPage[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Menu: FC<MenuProps> = ({ pages, isOpen, setIsOpen }) => {
  const classes = useStyles();

  const PageTitle: FC<Partial<IPage>> = ({ title }) => (
    <Typography variant="h4" className={classes.linkTitle} color="secondary">
      {title}
    </Typography>
  );

  return (
    <Drawer
      anchor="right"
      variant="temporary"
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className={classes.drawerRoot}
      PaperProps={{
        className: classes.drawerPaper,
        sx: { backgroundColor: (theme) => theme.palette.background.default },
      }}
    >
      <Box className={classes.menuRoot}>
        {pages &&
          pages.map((page: IPage) => {
            const isInternal = isInternalLink(page.href);
            return (
              <>
                {isInternal ? (
                  <Link
                    component={GatsbyLink}
                    to={page.href}
                    onClick={() => setIsOpen(false)}
                    className={classes.linkRoot}
                  >
                    <PageTitle title={page.title} />
                  </Link>
                ) : (
                  <a
                    href={page.href}
                    onClick={() => setIsOpen(false)}
                    className={classes.linkRoot}
                  >
                    <PageTitle title={page.title} />
                  </a>
                )}
              </>
            );
          })}
      </Box>
    </Drawer>
  );
};

export default Menu;
