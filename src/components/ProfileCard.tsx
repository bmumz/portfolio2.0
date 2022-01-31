import React, { FC } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  lighten,
  Theme,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
  faCanadianMapleLeaf,
} from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  cardRoot: {
    minWidth: "16vw",
    minHeight: "40vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "absolute",
    left: "28%",
    top: "30%",
    zIndex: 3,
    backgroundColor: `${lighten("#f5ede6", 0.45)} !important`,
    [theme.breakpoints.down("md")]: {
      left: "20%",
      minWidth: "40vw",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      left: "10%",
      top: "10%",
      minHeight: "50vh",
    },
  },
  divider: {
    borderColor: `${theme.palette.secondary.dark} !important`,
    borderBottomWidth: "2 !important",
    width: "30%",
    marginBottom: 5,
  },
  linksRoot: {
    backgroundColor: "#fefefa !important",
  },
  links: {
    display: "flex",
    justifyContent: "flex-end",
  },
  link: {
    padding: theme.spacing(0, 0.25),
  },
}));

const ProfileCard: FC = () => {
  const classes = useStyles();
  return (
    <Card raised className={classes.cardRoot}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: (theme) => theme.spacing(4),
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image="https://brandi.codes/static/75b7b58e52612b5966855f7e3acf1c36/88b18/headshot01.jpg"
          alt="Brandi's headshot"
          sx={{ borderRadius: "100%", width: 250, height: 250 }}
        />
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" color="secondary" sx={{ fontWeight: 500 }}>
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
          sx={{ letterSpacing: (theme) => theme.spacing(0.25) }}
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
      </CardContent>
      <CardActionArea className={classes.linksRoot}>
        <CardActions className={classes.links}>
          <FontAwesomeIcon
            className={classes.link}
            size="2x"
            color="black"
            icon={faGithub}
          />
          <FontAwesomeIcon
            className={classes.link}
            size="2x"
            color="black"
            icon={faTwitter}
          />
          <FontAwesomeIcon
            className={classes.link}
            size="2x"
            color="black"
            icon={faLinkedin}
          />
          <FontAwesomeIcon
            className={classes.link}
            size="2x"
            color="black"
            icon={faInstagram}
          />
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default ProfileCard;
