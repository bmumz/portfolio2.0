import React, { FC } from "react";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, CardMedia, Typography, Divider } from "@mui/material";

const Headshot: FC<{ divider?: boolean }> = ({ divider }) => (
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
      image="https://i.ibb.co/7kgHt0W/4-FC2-D199-135-E-4054-B814-E6-CF750-D0-E78.jpg"
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
      {divider && (
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
      )}
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
        Toronto, ON
        <FontAwesomeIcon icon={faCanadianMapleLeaf} color="#C41E3A" />
      </Typography>
    </Grid>
  </Grid>
);

export default Headshot;
