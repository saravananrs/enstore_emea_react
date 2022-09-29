import React from "react";
import { Button, Grid, Typography, Box } from "@mui/material";
import { useStyledComponent } from "./Styles/useStyles.hook";

export default function HerosectionImg() {
  const classes = useStyledComponent()
  return (
    <Grid className={classes.homeContainer}>
      <img
        className={classes.homeImg}
        src="https://store-d9.enphase.com/sites/default/files/styles/max_1300x1300/public/2022-07/Thumbnail.jpg?itok=KW9oba69"
        alt="houseimg"
      />
      <Box className={classes.homeContent}>
        <Typography variant="body2" className={classes.homeText}>
          FÜR NEUE HAUSBESITZER
        </Typography>
        <Typography variant="h3" className={classes.homeHeadings}>
          {" "}
          Bereit, ein neues zu kaufen
          <br />
          Enphase Energiesystem ?
        </Typography>
        <Button className={classes.homeButton}>
          Lernen Sie das Energiesystem von Enphase kennen
        </Button>
      </Box>
    </Grid>
  );
}
