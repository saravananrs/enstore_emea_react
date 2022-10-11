import React, { useState } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import StoreSignInForm from "./StoreSignInForm";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSavedAddress, storeLogin } from "../../redux/actions/EnstoreActions";
import { useStyledComponent } from "../Contents/Styles/useStyles.hook";

const IntialStoreSignInRegister = {
  email: "",
  password: "",
};
export default function StoreSignin() {
  const classes = useStyledComponent()
  //  const {savedAddress}  = useSelector((state)=> state.store)
  const storeSignIn = localStorage.getItem("storeSignIn");
  const [isLoading, setIsLoading] = useState(true);
  const loginData = JSON.parse(storeSignIn);
  console.log(loginData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, setRegister] = useState(IntialStoreSignInRegister);
  const handleSignInClick = async (event) => {
    event.preventDefault();
    setIsLoading(false)
    const data = {
      enlightenusername: register.email,
      enlightenpassword: register.password,
    };
    await dispatch(storeLogin(data));
    const emailData = {
        email: register.email
    }
    await navigate("/");
    await dispatch(getSavedAddress(emailData))
    setIsLoading(true)
  };
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
            {isLoading ? (
              <Box>
                <Button
                  className={classes.storeSignInBtn}
                  onClick={(event) => handleSignInClick(event)}
                >
                  Sign In
                </Button>
              </Box>
            ) : (
              <Box>
                <Button
                  className={classes.storeSignInBtn}
                >
                  Signing in..
                </Button>
              </Box>
            )}
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
