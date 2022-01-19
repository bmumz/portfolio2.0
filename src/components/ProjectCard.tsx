import React, { FC } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  darken,
  Theme,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

type ProjectCardProps = {
  project: IProject;
};

const useStyles = makeStyles((theme: Theme) => ({
  cardRoot: {
    maxWidth: 500,
    margin: theme.spacing(1),
    backgroundColor: `${darken(
      theme.palette.background.paper,
      0.015
    )} !important`,
  },
  linksRoot: {
    backgroundColor: `${darken(
      theme.palette.background.paper,
      0.03
    )} !important`,
    cursor: "default",
  },
}));

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { title, img, stack, description } = project;
  const classes = useStyles();
  return (
    <Card raised className={classes.cardRoot}>
      <CardMedia component="img" height="300" image={img.url} alt={img.alt} />

      <CardContent>
        <Typography variant="h6" gutterBottom color="secondary">
          {title}
        </Typography>
        {stack &&
          stack.map((technology: Technology) => (
            <Typography variant="body2" color="text.secondary">
              {technology.name}
            </Typography>
          ))}
        <Typography variant="body2" color="text.secondary">
          Tech Stack
        </Typography>

        {description &&
          description.map((paragraph: string) => (
            <Typography variant="body2" color="text.secondary">
              {paragraph}
            </Typography>
          ))}
      </CardContent>
      <CardActionArea className={classes.linksRoot}>
        <CardActions>
          <Button size="small">View Live</Button>
          <Button size="small">View Source Code</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
