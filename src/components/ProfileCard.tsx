import React, { FC } from "react";
import {
  Card,
  CardMedia,
  Divider,
  Grid,
  lighten,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from "@mui/styles";
import SocialButtonGroup from "./SocialButtonGroup";
import Headshot from "./Headshot";

const useStyles = makeStyles((theme: Theme) => ({
  cardRoot: {
    minWidth: "16vw",
    minHeight: "40vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 3,
    backgroundColor: `${lighten("#f5ede6", 0.45)} !important`,
    margin: theme.spacing(8, 0),
    [theme.breakpoints.down("md")]: {
      minWidth: "40vw",
      maxWidth: "80vw",
    },
  },
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
}));

const ProfileCard: FC = () => {
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
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

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

  return (
    <Card
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
          padding: (theme) => theme.spacing(4, 6),
          flexDirection: (theme) =>
            theme.breakpoints.down("md") ? "row" : "column",
          maxWidth: getWidth(),
        }}
      >
        <Headshot divider />
        <Grid
          item
          xs={12}
          lg={8}
          className={classes.blurbRoot}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              display: "flex",
              flexDirection: "row",
              paddingTop: (theme) => theme.spacing(2),
            }}
          >
            Hi 👋, I'm{" "}
            <Typography
              component="span"
              variant="h6"
              color="primary"
              sx={(theme) => ({
                paddingLeft: theme.spacing(1),
              })}
            >
              Brandi
            </Typography>{" "}
            —
          </Typography>
          <Grid container>
            <Typography
              color="text.secondary"
              sx={{ padding: (theme) => theme.spacing(1, 0) }}
            >
              a self-taught developer with a background in photography and
              customer service.
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ padding: (theme) => theme.spacing(1, 0) }}
            >
              I am currently working for a web design and development agency,
              contributing across the whole stack for a variety of clients. I
              really enjoy it, because it gives me a chance to dabble in so many
              different technologies.
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ paddingTop: (theme) => theme.spacing(1) }}
            >
              <b>Technologies I'm currently working with:</b>
              <br /> ⚛️ React, React Native, Typescript, Node.js, Express, both
              relational and non-relational databases.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <div style={{ marginTop: "auto" }}>
        <SocialButtonGroup />
      </div>
    </Card>
  );
};

export default ProfileCard;
