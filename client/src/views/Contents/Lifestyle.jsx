import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import LifestyleParts from "./LifestyleParts";
import { useStyledComponent } from "./Styles/useStyles.hook";


export default function Lifestyle() {
  const classes = useStyledComponent()
  return (
    <React.Fragment>
      <Grid className={classes.lifeStyleContainer}>
        <Box className={classes.lifeStyleHeader}>
          <Typography variant="h3" className={classes.lifeStyleTitle}>
            Enphase Lifestyle-Produkte
          </Typography>
        </Box>
        <Box className={classes.lifestyleHeadings}>
          <Typography className={classes.lifeText}>
            Jacken, Mützen, Werkzeuge und mehr
          </Typography>
          <img
            className="lifestyleImg"
            srcSet="https://store-d9.enphase.com/sites/default/files/styles/max_1300x1300/public/2021-11/swag%20family.png?itok=asAWuwtl"
            alt="name"
          />
        </Box>
      </Grid>

      <LifestyleParts />
    </React.Fragment>
  );
}
