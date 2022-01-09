import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  darken,
  Typography,
} from "@mui/material";
import * as React from "react";

type ProjectCardProps = {
  project: IProject;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, img, stack, description } = project;
  return (
    <Card
      raised
      sx={{
        maxWidth: 500,
        margin: (theme) => theme.spacing(1),
        backgroundColor: (theme) => theme.palette.pewter.light,
      }}
    >
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
      <CardActionArea
        sx={{
          backgroundColor: (theme) => darken(theme.palette.pewter.light, 0.025),
          cursor: "default",
        }}
      >
        <CardActions>
          <Button size="small">View Live</Button>
          <Button size="small">View Source Code</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
