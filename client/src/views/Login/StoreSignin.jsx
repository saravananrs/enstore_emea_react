import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import StoreSignInForm from "./StoreSignInForm";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  storeSignInContainer: {
    padding:"40px 0px"
  },
  storeLogin: {},
  signInRegister: {
    width: "400px !important",
    margin: "0 auto",
  },
  storeLogin: {
    backgroundColor: "#fff",
    width: "100%",
    background: "#faf6ef",
    padding: "40px",
    borderRadius: "16px",
  },
  blockTitle: {
    marginBottom: "0",
    paddingBottom: "8px",
  },
  blockTitleVariant: {
    fontFamily: "enphase-visuelt-medium,sans-serif !important",
    fontWeight: "normal !important",
    fontSize: "1.8rem !important",
  },
  storeSignInContent: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  storeSignInBtn: {
    border: "1px solid #000 !important",
    backgroundColor: "#000 !important",
    color: "#fff !important",
    fontSize: "1rem !important",
    fontFamily: "enphase-visuelt-medium !important",
    borderRadius: "56px !important",
    textTransform: "capitalize !important",
    width: "100% !important",
  },
  storeSignUpBtn: {
    "&:before": {
      content: '"Not a Member Yet?" !important',
      paddingRight: "10px !important",
    },
    marginTop: "25px !important",
    fontSize: "12px !important !important",
    fontFamily: "enphase-visuelt-regular,sans-serif  !important",
    textTransform: "none !important",
  },
  frgtPassword: {
    fontSize: "12px",
    marginTop: "16px",
    fontFamily: "enphase-visuelt-regular,sans-serif  !important",
  },
}));
const IntialStoreSignInRegister = {
  email: "",
  password: "",
};
export default function StoreSignin() {
  const classes = useStyles();
  const [register, setRegister] = useState(IntialStoreSignInRegister);
  return (
    <Container className={classes.storeSignInContainer}>
      <Grid className={classes.storeLoginContain}>
        <Box className={classes.signInRegister}>
          <Box className={classes.storeLogin}>
            <Box className={classes.blockTitle}>
              <Typography variant="h5" className={classes.blockTitleVariant}>
                <strong>Enlighten Registered Customers</strong>
              </Typography>
            </Box>
            <Box className={classes.storeSignInContent}>
              <StoreSignInForm register={register} setRegister={setRegister} />
            </Box>
            <Box>
              <Button className={classes.storeSignInBtn}>Sign In</Button>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button className={classes.storeSignUpBtn}>Sign Up</Button>
            </Box>
            <Box className={classes.frgtPassword}>
              <Link to="#">
                <span>Forgot Your Password?</span>
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
}
