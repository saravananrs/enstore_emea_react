import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepperShipping from "./StepperShipping";
import StepperDelivery from "./StepperDelivery";
import StepperPayment from "./StepperPayment";
import { makeStyles } from "@material-ui/styles";
import useStepper from "./useStepper.hook";
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
  const [razorpayOrderIdResponse, setRazorpayOrderIdResponse] = useState({});
  const { handleClose, handleCloseMenu } = props;
  const {  steps } = useStepper();
  const savedAddress = localStorage.getItem("savedAddress");
  const storeSavedAddress = JSON.parse(savedAddress);
  const getAddress = storeSavedAddress?.map((i) => {
    return i.addresses;
  });
   const selectAddress = getAddress?.flat() 
  let indAddress = selectAddress?.filter((item) => {
    return item.country_id === "IN";
  });
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        <React.Fragment>
          {activeStep === 0 ? (
            <StepperShipping
            indAddress={indAddress}
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
              indAddress={indAddress}
              handleClose={handleClose}
              handleCloseMenu={handleCloseMenu}
              razorpayOrderIdResponse={razorpayOrderIdResponse}
            />
          ) : (
            <StepperDelivery
            indAddress={indAddress}
              setActiveStep={setActiveStep}
              activeStep={activeStep}
              shippingMethod={shippingMethod}
              register={register}
              setRazorpayOrderIdResponse={setRazorpayOrderIdResponse}
            />
          )}
        </React.Fragment>
      </div>
    </Box>
  );
}
