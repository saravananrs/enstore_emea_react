import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Components
import StoreSignInForm from "./StoreSignInForm";

// MUI
import { Box, Container, Grid, Typography, Button } from "@mui/material";

// Redux
import { useDispatch } from "react-redux";
import { getSavedAddress, storeLogin } from "../../redux/actions/EnstoreActions";

// Hooks
import { useStyledComponent } from "../Contents/Styles/useStyles.hook";

//utils 
import instance from "../../utils/axiosconfig";

const IntialStoreSignInRegister = {
  email: "",
  password: "",
};
export default function StoreSignin() {
  const classes = useStyledComponent()
  const storeSignIn = localStorage.getItem("storeSignIn");
  const [isLoading, setIsLoading] = useState(true);
  const loginData = JSON.parse(storeSignIn);
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
    const tokenData ={
      username: register.email,
      password:register.password
    }
    await instance
    .post("/account/userToken",tokenData)
    .then((response) => {
      console.log(response.data,"response");
    })
    .catch((error) => {
      console.log(error,"errrrr");
    });
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
