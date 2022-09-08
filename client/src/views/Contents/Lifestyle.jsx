import { Grid, Typography, Box, Button } from "@mui/material";
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
  lifestyleFooterContainer: {
    backgroundColor: "#61C06A",
    padding: "20px 0px",
  },
  lifestyleFooter: {
    float: "none",
    margin: "0 auto",
    maxWidth: "90%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btncontainer: {
    padding: "0px 20px",
    borderRadius: "50px",
    transition: "background .2s ease-out",
    minWidth: "unset",
    backgroundColor: "#ffffff",
    height: "44px",
  },
  btn: {
    color: "black",
    padding: "0",
    height: "44px",
    fontFamily: "enphase-visuelt-medium,sans-serif",
    textTransform: "capitalize !important",
    fontSize: "0.875rem !important",
    cursor: "pointer",
    fontWeight: "550 !important",
  },
  questions: {
    fontFamily: "enphase-visuelt-regular,sans-serif",
    fontSize: "1.5rem !important",
  },
}));
export default function Lifestyle() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.storageContainer}>
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
      <Grid container className={classes.lifestyleFooterContainer}>
        <Grid container className={classes.lifestyleFooter}>
          <Box className={classes.questions}>
            Questions? Contact us. We'll help you build your system, today.
          </Box>
          <Box className={classes.btncontainer}>
            <Button className={classes.btn}>Get Enphase</Button>
          </Box>
        </Grid>
      </Grid>

      <LifestyleParts />
    </React.Fragment>
  );
}
