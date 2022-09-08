import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Box, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  helpContaier: {
    float: "none",
    width: "100%",
    margin: "0 auto",
    maxWidth: "90%",
    justifyContent: "space-between",
    padding: "24px 0px",
  },
  helpGrid: {
    marginBottom: "20px",
  },
  helpGridSection: {
    marginRight: "20px",
    color: "#3c3c3c",
    fontSize: "12px",
    fontFamily: "enphase-visuelt-regular,sans-serif",
  },
  content: {
    marginRight: "20px",
    color: "#3c3c3c",
    fontSize: "13px",
    fontFamily: "enphase-visuelt-regular,sans-serif",
  },
  payment: {
    display: "flex",
  },
  payImg: {
    height: "32px",
    marginRight: "20px",
  },
}));
export default function LifestyleParts() {
  const classes = useStyles();
  return (
    <Grid container className={classes.helpContaier}>
      <Box>
        <Grid container className={classes.helpGrid}>
          <Box className={classes.content}>Need help with the store?</Box>
          <Box className={classes.content}>enphasestore@enphase.com</Box>
          <Box className={classes.content}>833-963-3820 Option 3</Box>
        </Grid>
        <Grid container>
          <Box className={classes.helpGridSection}>My account</Box>
          <Box className={classes.helpGridSection}>Bag</Box>
          <Box className={classes.helpGridSection}>Orders</Box>
          <Box className={classes.helpGridSection}>Returns and exchanges</Box>
          <Box className={classes.helpGridSection}>Terms of sale</Box>
          <Box className={classes.helpGridSection}>Terms of shipping</Box>
          <Box className={classes.helpGridSection}>
            Return process for Guest Users
          </Box>
        </Grid>
      </Box>
      <Grid className={classes.payment}>
        <img
          className={classes.payImg}
          src="https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-10/visa.png?itok=Kbo2TBCn"
        />
        <img
          className={classes.payImg}
          src="https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-10/master.png?itok=uc2NawCj"
        />
        <img
          className={classes.payImg}
          src="https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-10/paypal.png?itok=OcLhvwdr"
        />
        <img
          className={classes.payImg}
          src="https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-10/affirm.png?itok=V9k-BVVx"
        />
      </Grid>
    </Grid>
  );
}
