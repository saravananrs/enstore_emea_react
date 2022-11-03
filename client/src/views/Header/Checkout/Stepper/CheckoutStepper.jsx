import React, { useState } from "react";
import { Box } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepperShipping from "./StepperShipping";
import StepperDelivery from "./StepperDelivery";
import StepperPayment from "./StepperPayment";
import useStepper from "./useStepper.hook";
import { useSelector } from "react-redux";

export default function CheckoutStepper(props) {
  const [street, setStreet] = useState(false);
  const { steps, regiondata } = useStepper();
  const{checkout} = useSelector((state)=> state.store)
  console.log(checkout,'checkout');
  const filteredIndReg = regiondata.filter((reg) => reg.country_id === "IN");
  const savedAddress = localStorage.getItem("savedAddress");
  const storeSavedAddress = JSON.parse(savedAddress);
  const getAddress = storeSavedAddress?.map((i) => {
    return i.addresses;
  });
  const selectAddress = getAddress?.flat();
  let indAddress = selectAddress?.filter((item) => {
    return item.country_id === "IN";
  });
  const storeSignIn = localStorage.getItem("storeSignIn");
  const registeData = JSON.parse(storeSignIn);
  const IntialShippingRegister = {
    email: registeData?.email ? registeData?.email : "",
    phone: indAddress !== undefined ? indAddress[0]?.telephone : "",
    fname: indAddress !== undefined ? indAddress[0]?.firstname : "",
    lname: indAddress !== undefined ? indAddress[0]?.lastname : "",
    country:"IN",
    address: "",
    postal: indAddress !== undefined ? indAddress[0]?.postcode : "",
    city: indAddress !== undefined ? indAddress[0]?.city : "",
    province: indAddress !== undefined ? indAddress[0]?.region.region : "",
  };

  const [activeStep, setActiveStep] = useState(0);
  const [register, setRegister] = useState(IntialShippingRegister);
  const [shippingMethod, setShippingMethod] = useState({});
  const [razorpayOrderIdResponse, setRazorpayOrderIdResponse] = useState({});
  const { handleClose, handleCloseMenu } = props;
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
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
              setStreet={setStreet}
              street={street}
              filteredIndReg={filteredIndReg}
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
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              indAddress={indAddress}
              handleClose={handleClose}
              filteredIndReg={filteredIndReg}
              handleCloseMenu={handleCloseMenu}
              razorpayOrderIdResponse={razorpayOrderIdResponse}
              shippingMethod={shippingMethod}
              setRazorpayOrderIdResponse={setRazorpayOrderIdResponse}
            />
          ) : (
            <StepperDelivery
              indAddress={indAddress}
              filteredIndReg={filteredIndReg}
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
