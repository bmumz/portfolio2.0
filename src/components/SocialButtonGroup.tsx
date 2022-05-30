import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { CardActionArea, CardActions, ButtonGroup, Link } from "@mui/material";
import StyledButton from "./StyledButton";

const SocialButtonGroup = () => {
  const socials = {
    github: { link: "https://www.github.com/bmumz" },
    twitter: { link: "https://www.twitter.com/brandicodes" },
    linkedin: { link: "https://www.linkedin.com/in/brandimummery" },
    instagram: { link: "https://www.instagram.com/brandicodes" },
  };

  return (
    <CardActionArea sx={{ cursor: "default", backgroundColor: "#fefefa" }}>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <ButtonGroup variant="text" sx={{ border: "none" }}>
          <StyledButton
            // @ts-ignore
            component={Link}
            target="_blank"
            rel="noreferrer"
            href={socials.github.link}
          >
            <FontAwesomeIcon size="lg" icon={faGithub} />
          </StyledButton>
          <StyledButton
            // @ts-ignore
            component={Link}
            target="_blank"
            rel="noreferrer"
            href={socials.twitter.link}
          >
            <FontAwesomeIcon size="lg" icon={faTwitter} />
          </StyledButton>
          <StyledButton
            // @ts-ignore
            component={Link}
            target="_blank"
            rel="noreferrer"
            href={socials.linkedin.link}
          >
            <FontAwesomeIcon size="lg" icon={faLinkedin} />
          </StyledButton>
          <StyledButton
            // @ts-ignore
            component={Link}
            target="_blank"
            rel="noreferrer"
            href={socials.instagram.link}
          >
            <FontAwesomeIcon size="lg" icon={faInstagram} />
          </StyledButton>
        </ButtonGroup>
      </CardActions>
    </CardActionArea>
  );
};

export default SocialButtonGroup;
