import React, {useState} from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import StepperShipping from "./StepperShipping";
import StepperDelivery from "./StepperDelivery";
import StepperPayment from "./StepperPayment";
import { makeStyles } from "@material-ui/styles";
import useStepper from "./useStepper.hook";
const useStyles = makeStyles(() => ({}));

export default function CheckoutStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingMethod, setShippingMethod] = useState({});
  const {
      activeSteps,
    completed,
    handleBack,
    handleNext,
    handleStep,
    // setActiveStep,
    steps,
  } = useStepper();
  const classes = useStyles();
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep} className={classes.stepper}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color="primary" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        <React.Fragment>
          {activeStep === 0 ? (
            <StepperShipping setActiveStep = {setActiveStep} activeStep={activeStep} setShippingMethod= {setShippingMethod}/>
          ) : activeStep === 1 ? (
            <StepperDelivery setActiveStep = {setActiveStep} activeStep={activeStep} shippingMethod={shippingMethod} setShippingMethod= {setShippingMethod}/>
          ) : (
            <StepperPayment />
          )}
          {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeSteps === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext} sx={{ mr: 1 }}>
              Next
            </Button>
          </Box> */}
        </React.Fragment>
      </div>
    </Box>
  );
}
