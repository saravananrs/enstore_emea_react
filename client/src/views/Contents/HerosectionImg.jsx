import React from "react";
import { Button, Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  homeContainer: {
    float: "none",
    margin: "0 auto",
    maxWidth: "95%",
    position: "relative",
    "@media (max-width: 780px)": {
      maxWidth: "90%",
    },
    "&:hover": {
      boxShadow: "0px 20px 36px -8px rgb(0 0 0 / 10%)",
    },
  },
  homeImg: {
    width: "100%",
    borderRadius: "16px",
    "@media (max-width: 780px)": {
      objectPosition: "center center",
      maxHeight: " 100vh",
      objectFit: "cover",
      height: "380px",
      letterSpacing:"0 !important"
    },
  },
  homeContent: {
    position: "absolute",
    zIndex: "10",
    top: "8%",
    left: "2%",
  },
  homeText: {
    fontSize: "0.6875rem !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    lineHeight: "0.875rem !important",
  },
  homeHeadings: {
    fontSize: "2.625rem !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    margin: "16px 0px 8px 0px !important",
    lineHeight: "3.3rem !important",
    marginBottom: "30px !important",
    "@media (max-width: 780px)": {
      fontSize: "1.625rem !important",
      lineHeight: "1.3em !important",
      fontWeightL:"normal !important"
    },
  },
  homeButton: {
    border: "1px solid #3c3c3c !important",
    color: "#3c3c3c !important",
    background: "transparent !important",
    padding: "12px 32px !important",
    borderRadius: "36px !important",
    textTransform: "capitalize !important",
    fontSize: "0.875rem !important",
    fontFamily: "enphase-visuelt-medium !important",
    "&:hover": {
      border: "1px solid #3c3c3c !important",
      color: "#fff !important",
      background: "#3c3c3c  !important",
    },
    "@media (max-width: 780px)": {
      padding:"8px 16px !important",
      backgroundColor:' #3c3c3c !important',
      border: '1px solid #3c3c3c !important',
      color:'#fff !important',
      fontSize: "0.7rem !important",
  }
  },
}));
export default function HerosectionImg() {
  const classes = useStyles();
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
