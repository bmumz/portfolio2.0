import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { CardMedia, Grid, lighten, Typography } from "@mui/material";
import StyledButton from "./StyledButton";
import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const { title, img, stack, blurb, description } = project;
  const [showDescription, setShowDescription] = useState<boolean>(false);
  return (
    <>
      <Grid
        item
        sx={{
          padding: (theme) => theme.spacing(2),
          borderBottom: (theme) => `1px solid ${theme.palette.text.secondary}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: `${lighten("#f5ede6", 0.45)} !important`,
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
          }}
        >
          <Typography
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
            {stack &&
              stack.map((technology: Technology) => (
                <Typography
                  sx={{
                    color: (theme) => theme.palette.text.secondary,
                    padding: (theme) => theme.spacing(0, 0.25),
                  }}
                  key={technology.name}
                >
                  {technology.icon}
                </Typography>
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
            borderBottom: (theme) =>
              `1px solid ${theme.palette.text.secondary}`,
          }}
        >
          <Grid
            item
            xs={12}
            lg={5}
            sx={{
              padding: (theme) => theme.spacing(2),
            }}
          >
            <Typography
              sx={{
                color: (theme) => theme.palette.text.secondary,
                letterSpacing: 0.15,
              }}
            >
              Blah blah blah description
            </Typography>
          </Grid>
          <Grid item xs={12} lg={7}>
            <CardMedia
              component="img"
              height="250"
              image={img.url}
              alt={img.alt}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ProjectCard;
