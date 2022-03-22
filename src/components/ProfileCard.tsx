import React, { FC } from "react";
import {
  Card,
  CardMedia,
  Divider,
  Grid,
  lighten,
  Theme,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from "@mui/styles";
import SocialButtonGroup from "./SocialButtonGroup";

const useStyles = makeStyles((theme: Theme) => ({
  cardRoot: {
    minWidth: "16vw",
    maxWidth: "55vw",
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

  return (
    <Card raised className={classes.cardRoot}>
      <Grid
        container
        sx={{
          padding: (theme) => theme.spacing(4, 6),
          flexDirection: (theme) =>
            theme.breakpoints.down("md") ? "row" : "column",
        }}
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
              paddingTop: (theme) => theme.spacing(2),
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

            <Divider
              variant="fullWidth"
              sx={{
                borderColor: (theme) => theme.palette.primary.main,
                borderBottomWidth: 3,
                width: "25%",
                margin: (theme) => theme.spacing(2),
                letterSpacing: (theme) => theme.spacing(0.25),
              }}
            />
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
            Hi 👋, I'm <span className={classes.name}>Brandi</span> —
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
      <SocialButtonGroup />
    </Card>
  );
};

export default ProfileCard;
