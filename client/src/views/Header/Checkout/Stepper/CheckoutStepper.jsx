import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import StepperShipping from "./StepperShipping";
import StepperDelivery from "./StepperDelivery";
import StepperPayment from "./StepperPayment";
import { makeStyles } from "@material-ui/styles";
import useStepper from "./useStepper.hook";
const useStyles = makeStyles(() => ({}));
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
  const[isLoading,setIsLoading]= useState(true)
  const{setTotal, overAll,setOpen,handleClose} = props
  const { handleStep, steps } = useStepper();
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
            <StepperShipping
              setActiveStep={setActiveStep}
              activeStep={activeStep}
              setShippingMethod={setShippingMethod}
              setRegister={setRegister}
              register={register}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
            />
          ) : activeStep === 1 ? (
            <StepperDelivery
              setActiveStep={setActiveStep}
              activeStep={activeStep}
              shippingMethod={shippingMethod}
              register={register}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
              setTotal={setTotal}
            />
          ) : (
            <StepperPayment register={register} overAll={overAll}  handleClose={handleClose}/>
          )}
        </React.Fragment>
      </div>
    </Box>
  );
}
