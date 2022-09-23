import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepperShipping from "./StepperShipping";
import StepperDelivery from "./StepperDelivery";
// import MobileStepper from "@mui/material/MobileStepper";
import StepperPayment from "./StepperPayment";
import { makeStyles } from "@material-ui/styles";
import useStepper from "./useStepper.hook";
const useStyles = makeStyles(() => ({
  mobileStepper: {
    "& .css-1kpn1p9-MuiLinearProgress-root-MuiMobileStepper-progress": {
      width: "100% !important",
    },
    "& .css-1d4g1jy-MuiLinearProgress-bar1": {
      backgroundColor: "#F37321 !important",
    },
  },
  fixes: {
    marginLeft: "30px",
  },
}));
const IntialShippingRegister = {
  email: "",
  phone: "",
  fname: "",
  lname: "",
  country: "",
  address: "",
  optional: "",
  postal: "",
  city: "",
  province: "",
};

export default function CheckoutStepper(props) {
  const [activeStep, setActiveStep] = useState(0);
  const [register, setRegister] = useState(IntialShippingRegister);
  const [shippingMethod, setShippingMethod] = useState({});
  const { handleClose, handleCloseMenu } = props;
  const { handleStep, steps } = useStepper();
  const classes = useStyles();
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              {activeStep === 2 ? (
                <StepLabel className={classes.fixes} {...labelProps}>
                  {label}
                </StepLabel>
              ) : (
                <StepLabel {...labelProps}>{label}</StepLabel>
              )}
            </Step>
          );
        })}
      </Stepper>
      {/* <MobileStepper
        variant="progress"
        className={classes.mobileStepper}
        steps={3}
        position="static"
        activeStep={activeStep}
        sx={{ width: "100%" }}
      /> */}
      <div>
        <React.Fragment>
          {activeStep === 0 ? (
            <StepperShipping
              setActiveStep={setActiveStep}
              activeStep={activeStep}
              handleClose={handleClose}
              setShippingMethod={setShippingMethod}
              setRegister={setRegister}
              register={register}
            />
          ) : activeStep === 2 ? (
            <StepperPayment
              register={register}
              handleClose={handleClose}
              handleCloseMenu={handleCloseMenu}
            />
          ) : (
            <StepperDelivery
              setActiveStep={setActiveStep}
              activeStep={activeStep}
              shippingMethod={shippingMethod}
              register={register}
            />
          )}
        </React.Fragment>
      </div>
    </Box>
  );
}
