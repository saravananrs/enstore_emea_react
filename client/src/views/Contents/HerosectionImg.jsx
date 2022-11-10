import React from "react";

// MUI
import { Button, Grid, Typography, Box } from "@mui/material";

// Hooks
import { useStyledComponent } from "./Styles/useStyles.hook";

export default function HerosectionImg() {
  const classes = useStyledComponent();
  return (
    <Grid className={classes.homeContainer}>
      <img
        className={classes.homeImg}
        src="https://store-d9.enphase.com/sites/default/files/styles/max_1300x1300/public/2022-07/Thumbnail.jpg?itok=KW9oba69"
        alt="houseimg"
      />
      <Box className={classes.homeContent}>
        <Typography variant="body2" className={classes.homeText}>
          FOR NEW HOMEOWNERS
        </Typography>
        <Typography variant="h3" className={classes.homeHeadings}>
          {" "}
          Ready to buy a new one
          <br />
          Enphase energy system ?
        </Typography>
        <Button className={classes.homeButton}>
          Learn about Enphase's power system
        </Button>
      </Box>
    </Grid>
  );
}
