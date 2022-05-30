import { Grid, Typography, CardMedia, Divider } from "@mui/material";
import React from "react";
import LinkButton from "../components/LinkButton";

const referralLinks = [
  {
    title: "Try Sunsama free for 2 weeks!",
    url: "https://sunsama.grsm.io/brandiCodes",
  },
  {
    title: "Get 10% off at Xreart Frames",
    url: "https://xreart.com/discount/BRANDICODES10?ref=fqg0B2t6",
  },
];

const socials = [
  {
    title: "Twitter",
    url: "https://twitter.com/brandicodes",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/brandicodes/",
  },
];

const codingResources = [
  {
    title: "The Odin Project",
    url: "https://www.theodinproject.com/",
  },
  {
    title: "FreeCodeCamp",
    url: "https://www.freecodecamp.org/",
  },
  {
    title: "Codecademy",
    url: "https://www.codecademy.com/",
  },
  {
    title: "Harvard CS50",
    url: "https://cs50.harvard.edu/",
  },
];

const LinksPage = () => (
  <Grid container flexDirection="column">
    <Grid container justifyContent="center">
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
          sx={{ borderRadius: "100%", width: 150, height: 150 }}
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
            color="textPrimary"
            sx={{
              fontWeight: 500,
              fontSize: (theme) => theme.breakpoints.down("sm") && "1.5rem",
            }}
          >
            brandiCodes
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
        </Grid>
      </Grid>
    </Grid>
    <Typography
      variant="body1"
      sx={{ padding: (theme) => theme.spacing(1), fontWeight: 600 }}
    >
      Referral Links
    </Typography>
    {referralLinks.map((link) => (
      <LinkButton key={link.title} title={link.title} url={link.url} />
    ))}
    <Typography
      variant="body1"
      sx={{ padding: (theme) => theme.spacing(1), fontWeight: 600 }}
    >
      Socials
    </Typography>
    {socials.map((link) => (
      <LinkButton key={link.title} title={link.title} url={link.url} />
    ))}
    <Typography
      variant="body1"
      sx={{ padding: (theme) => theme.spacing(1), fontWeight: 600 }}
    >
      Coding Resources
    </Typography>
    {codingResources.map((link) => (
      <LinkButton key={link.title} title={link.title} url={link.url} />
    ))}
  </Grid>
);

export default LinksPage;
