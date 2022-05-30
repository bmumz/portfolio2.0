import React, { FC } from "react";
import {
  Card as MUICard,
  CardMedia,
  Grid,
  lighten,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from "@mui/styles";
import SocialButtonGroup from "../SocialButtonGroup";

const useStyles = makeStyles((theme: Theme) => ({
  divider: {
    borderColor: `${theme.palette.secondary.dark} !important`,
    borderBottomWidth: "2 !important",
    width: "30%",
    marginBottom: 5,
  },

  blurbRoot: {
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(0, 6),
    },
  },
  name: {
    paddingLeft: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  statsContainer: {
    width: "unset !important",
  },
  projectRoot: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
}));

const Card: FC<{ children: JSX.Element }> = ({ children }) => {
  const classes = useStyles();
  const isLarge = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  const isBetween = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between("lg", 1600)
  );
  const isXtra = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between(1600, 2000)
  );
  const isQHD = useMediaQuery((theme: Theme) => theme.breakpoints.up(2000));
  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between("md", "lg")
  );
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down(640));

  const getWidth = () => {
    if (isMobile) {
      return "95vw";
    } else if (isTablet) {
      return "80vw";
    } else if (isLarge && !isBetween && !isXtra && !isQHD) {
      return "55vw";
    } else if (isBetween) {
      return "75vw";
    } else if (isXtra && !isQHD) {
      return "60vw";
    } else if (isQHD) {
      return "40vw";
    }
  };

  const data = useStaticQuery(graphql`
    query GitHubStats {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "stats" } } }) {
        edges {
          node {
            html
          }
        }
      }
    }
  `);
  const node = data.allMarkdownRemark.edges[0].node;

  return (
    <MUICard
      raised
      sx={{
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        zIndex: 3,
        backgroundColor: `${lighten("#f5ede6", 0.45)} !important`,
        margin: (theme) => theme.spacing(8, 0),
        minWidth: {
          lg: "16vw",
          md: "40vw",
          sm: "40vw",
        },
        maxWidth: {
          md: "80vw",
          sm: "80vw",
        },
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "center",
          flexDirection: (theme) =>
            theme.breakpoints.down("md") ? "row" : "column",
          maxWidth: getWidth(),
        }}
        className={classes.projectRoot}
      >
        <Grid
          container
          sx={{ justifyContent: "space-around", alignItems: "center" }}
        >
          <Grid
            item
            xs={12}
            lg={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image="https://brandi.codes/static/75b7b58e52612b5966855f7e3acf1c36/88b18/headshot01.jpg"
              alt="Brandi's headshot"
              sx={{ borderRadius: "100%", width: 250, height: 250 }}
            />
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                // paddingTop: (theme) => theme.spacing(2),
              }}
            >
              <Typography
                variant="h4"
                color="secondary"
                sx={{
                  fontWeight: 500,
                  fontSize: (theme) => theme.breakpoints.down("sm") && "1.5rem",
                }}
              >
                Brandi Mummery
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ letterSpacing: (theme) => theme.spacing(0.15) }}
              >
                Software Developer
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ letterSpacing: (theme) => theme.spacing(0.25) }}
              >
                Toronto, ON{" "}
                <FontAwesomeIcon icon={faCanadianMapleLeaf} color="#C41E3A" />
              </Typography>
            </Grid>
          </Grid>
          {!isMobile && (
            <Grid
              container
              sx={(theme: Theme) =>
                theme.breakpoints.down("md") && { justifyContent: "center" }
              }
              className={classes.statsContainer}
            >
              <Grid
                item
                key={node.title}
                dangerouslySetInnerHTML={{
                  __html: node.html,
                }}
              />
            </Grid>
          )}
        </Grid>
        {children}
      </Grid>
      <SocialButtonGroup />
    </MUICard>
  );
};

export default Card;
