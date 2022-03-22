import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from "@mui/styles";
import React from "react";
import {
  CardActionArea,
  CardActions,
  ButtonGroup,
  Theme,
  Link,
} from "@mui/material";
import StyledButton from "./StyledButton";

const useStyles = makeStyles((theme: Theme) => ({
  links: {
    display: "flex",
    justifyContent: "flex-end",
  },
  link: {
    padding: theme.spacing(0, 0.25),
  },
}));
const SocialButtonGroup = () => {
  const classes = useStyles();

  const socials = {
    github: { link: "https://www.github.com/bmumz" },
    twitter: { link: "https://www.twitter.com/brandicodes" },
    linkedin: { link: "https://www.linkedin.com/in/brandimummery" },
    instagram: { link: "https://www.instagram.com/brandicodes" },
  };

  return (
    <CardActionArea sx={{ cursor: "default", backgroundColor: "#fefefa" }}>
      <CardActions className={classes.links}>
        <ButtonGroup variant="text" sx={{ border: "none" }}>
          <StyledButton
            // @ts-ignore
            component={Link}
            target="_blank"
            rel="noreferrer"
            href={socials.github.link}
          >
            <FontAwesomeIcon
              className={classes.link}
              size="2x"
              icon={faGithub}
            />
          </StyledButton>
          <StyledButton
            // @ts-ignore
            component={Link}
            target="_blank"
            rel="noreferrer"
            href={socials.twitter.link}
          >
            <FontAwesomeIcon
              className={classes.link}
              size="2x"
              icon={faTwitter}
            />
          </StyledButton>
          <StyledButton
            // @ts-ignore
            component={Link}
            target="_blank"
            rel="noreferrer"
            href={socials.linkedin.link}
          >
            <FontAwesomeIcon
              className={classes.link}
              size="2x"
              icon={faLinkedin}
            />
          </StyledButton>
          <StyledButton
            // @ts-ignore
            component={Link}
            target="_blank"
            rel="noreferrer"
            href={socials.instagram.link}
          >
            <FontAwesomeIcon
              className={classes.link}
              size="2x"
              icon={faInstagram}
            />
          </StyledButton>
        </ButtonGroup>
      </CardActions>
    </CardActionArea>
  );
};

export default SocialButtonGroup;
