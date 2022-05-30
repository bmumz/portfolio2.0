import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Button, CardMedia, Grid, Theme, Typography } from "@mui/material";
import StyledButton from "../StyledButton";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import TechnologyIcon from "./TechnologyIcon";

const useStyles = makeStyles((theme: Theme) => ({
  cardRoot: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `1px solid rgba(33,33,33, 0.3) !important`,
    cursor: "pointer",

    "&:last-child": {
      borderBottom: "none !important",
    },
  },
  expandedCard: {
    borderBottom: `1px solid rgba(33,33,33, 0.3) !important`,
    "&:last-child": {
      borderBottom: "none !important",
    },
  },
  icon: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(0, 0.25),
  },
}));

const ProjectCard = ({ project }) => {
  const { title, imgUrl, blurb, url, sourceCode, technologies } =
    project.frontmatter;
  const { html } = project;
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const classes = useStyles();

  return (
    <>
      <Grid
        item
        sx={{
          padding: (theme) => theme.spacing(2, 0),
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className={classes.cardRoot}
        onClick={() => setShowDescription(!showDescription)}
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{
              fontWeight: 500,
              letterSpacing: 0.15,
              paddingRight: (theme) => theme.spacing(1),
            }}
          >
            {title}
          </Typography>
          <Typography color="textSecondary"> - {blurb}</Typography>
          <Grid
            item
            sx={{ display: "flex", paddingLeft: (theme) => theme.spacing(1) }}
          >
            {technologies.map((technology: string) => (
              <TechnologyIcon
                technology={technology}
                className={classes.icon}
                key={technology}
              />
            ))}
          </Grid>
        </Grid>
        <StyledButton onClick={() => setShowDescription(!showDescription)}>
          {showDescription ? (
            <KeyboardArrowUp
              fontSize="small"
              sx={{
                color: (theme) => theme.palette.secondary.main,
              }}
            />
          ) : (
            <KeyboardArrowDown
              fontSize="small"
              sx={{
                color: (theme) => theme.palette.secondary.main,
              }}
            />
          )}
        </StyledButton>
      </Grid>
      {showDescription && (
        <Grid
          container
          flexDirection="row"
          sx={{
            flexWrap: "nowrap",
            alignItems: "space-between",
            justifyContent: "space-between",
          }}
          className={classes.expandedCard}
        >
          <Grid
            item
            xs={12}
            lg={5}
            sx={{
              padding: (theme) => theme.spacing(2, 0),
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Grid item>
              <Typography
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  letterSpacing: 0.15,
                }}
                dangerouslySetInnerHTML={{
                  __html: html,
                }}
              />
            </Grid>

            <Grid
              container
              flexDirection="row"
              sx={{
                justifyContent: "flex-end",
              }}
            >
              <Button
                size="small"
                variant="contained"
                href={url}
                sx={{ margin: (theme) => theme.spacing(2, 1) }}
                target="_blank"
              >
                View Live
              </Button>
              <Button
                size="small"
                variant="contained"
                href={sourceCode}
                sx={{ margin: (theme) => theme.spacing(2, 1) }}
                target="_blank"
              >
                Source Code
              </Button>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            lg={7}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <CardMedia
              component="img"
              image={imgUrl}
              alt={`${title} - ${blurb}`}
              sx={{
                display: "unset",
                width: 450,
                borderRadius: 2,
                margin: (theme) => theme.spacing(2),
              }}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ProjectCard;
