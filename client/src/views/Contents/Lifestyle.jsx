import { Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import LifestyleParts from "./LifestyleParts";

const useStyles = makeStyles(() => ({
  storageContainer: {
    padding: "70px 0px",
  },
  storageHeader: {
    float: "none",
    width: "100%",
    margin: "0 auto",
    maxWidth: "90%",
    paddingBottom: "2%",
    fontFamily: "enphase-visuelt-regular,sans-serif",
    "&:active": {
      transform: "translateY(1.5rem)",
      opacity: "1",
    },
  },
  headTitle: {
    marginBottom: "15px !important",
    fontSize: "2.67rem !important",
  },
  lifestyle: {
    textAlign: "center",
  },
  lifeText: {
    position: "absolute",
    zIndex: "1",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "2.625rem !important",
    left: "28%",
    marginTop: "60px !important",
  },
 
 
}));
export default function Lifestyle() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid className={classes.storageContainer}>
        <Box className={classes.storageHeader}>
          <Typography variant="h3" className={classes.headTitle}>
            Enphase Lifestyle Products
          </Typography>
        </Box>
        <Box className={classes.lifestyle}>
          <Typography className={classes.lifeText}>
            Jackets, hats, tools, and more
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
