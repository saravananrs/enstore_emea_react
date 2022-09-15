import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Box, Button } from "@mui/material";

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
    "@media (max-width: 780px)": {
      flexDirection:"column !important"
    }
  },
  helpGridPart:{
    "@media (max-width: 780px)": {
      justifyContent:"flex-start",
      marginBottom:"10px"
    }
  },
  helpGridSection: {
    marginRight: "20px",
    color: "#3c3c3c",
    fontSize: "12px",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    "@media (max-width: 780px)": {
      marginBottom:"10px"
    }
  },
  content: {
    marginRight: "20px",
    color: "#3c3c3c",
    fontSize: "13px",
    fontFamily: "enphase-visuelt-regular,sans-serif",
    "@media (max-width: 780px)": {
      marginBottom:"13px",
    }
  },
  payment: {
    display: "flex",
  },
  payImg: {
    height: "32px",
    marginRight: "20px",
  },
  lifestyleFooterContainer: {
    backgroundColor: "#61C06A",
    padding: "20px 0px",
    "@media (max-width: 780px)": {
      borderRadius:"16px",
      textAlign:"center",
      padding:'0'
    }
  },
  lifestyleFooter: {
    float: "none",
    margin: "0 auto",
    maxWidth: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 780px)": {
      flexDirection:"column !important",
      padding:"30px"
    }
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
    fontFamily: "enphase-visuelt-medium,sans-serif !important",
    textTransform: "capitalize !important",
    fontSize: "0.875rem !important",
    cursor: "pointer",
    fontWeight: "550 !important",
  },
  questions: {
    fontFamily: "enphase-visuelt-regular,sans-serif",
    fontSize: "1.5rem !important",
    "@media (max-width: 780px)": {
      fontSize: "1.125rem !important",
      marginBottom:"40px !important"
    }
  },
}));
export default function LifestyleParts() {
  const classes = useStyles();
  return (<>
    <Grid container className={classes.lifestyleFooterContainer}>
        <Grid container className={classes.lifestyleFooter}>
          <Box className={classes.questions}>
          Fragen? Kontaktiere uns. Wir helfen Ihnen noch heute beim Aufbau Ihres Systems.
          </Box>
          <Box className={classes.btncontainer}>
            <Button className={classes.btn}>Get Enphase</Button>
          </Box>
        </Grid>
      </Grid>
    <Grid container className={classes.helpContaier}>
      <Box>
        <Grid container className={classes.helpGrid}>
          <Box className={classes.content}>Benötigen Sie Hilfe beim Laden?</Box>
          <Box className={classes.content}>enphasestore@enphase.com</Box>
          <Box className={classes.content}>833-963-3820 Option 3</Box>
        </Grid>
        <Grid container className={classes.helpGridPart}>
          <Box className={classes.helpGridSection}>Mein Konto</Box>
          <Box className={classes.helpGridSection}>Tasche</Box>
          <Box className={classes.helpGridSection}>Aufträge</Box>
          <Box className={classes.helpGridSection}>Rückgabe und Umtausch</Box>
          <Box className={classes.helpGridSection}>Verkaufsbedingungen</Box>
          <Box className={classes.helpGridSection}>Versandbedingungen</Box>
          <Box className={classes.helpGridSection}>
            Return process for Guest Users
          </Box>
        </Grid>
      </Box>
      <Grid className={classes.payment}>
        <img
          className={classes.payImg} alt='payimage'
          src="https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-10/visa.png?itok=Kbo2TBCn"
        />
        <img
          className={classes.payImg} alt='payimage'
          src="https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-10/master.png?itok=uc2NawCj"
        />
        <img
          className={classes.payImg} alt='payimage'
          src="https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-10/paypal.png?itok=OcLhvwdr"
        />
        <img
          className={classes.payImg} alt='payimage'
          src="https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-10/affirm.png?itok=V9k-BVVx"
        />
      </Grid>
    </Grid>
    </>
  );
}
