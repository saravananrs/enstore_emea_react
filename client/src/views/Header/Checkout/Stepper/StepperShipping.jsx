import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import instance from "../../../../utils/axiosconfig";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import useStepper from "./useStepper.hook";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
import StepperShippingForm from "./StepperShippingForm";
const useStyles = makeStyles(() => ({
  shippingContainer: {
    padding: "calc(3 * 8px) calc(4 * 8px) calc(1.5 * 8px)",
  },

  nextstep: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  continuebtn: {
    margin: "calc(3 * 8px) 0 calc(2 * 8px) !important",
    alignItems: "center !important",
    background: "#F37321 !important",
    borderRadius: "4px !important",
    padding: "1px 16px !important",
    cursor: "pointer !important",
    color: "#fff !important",
    display: "flex !important",
    fontSize: "16px !important",
    height: "48px !important",
    justifyContent: "center !important",
    position: "relative !important",
    width: "100% !important",
  },
  exitbtn: {
    letterSpacing: ".2px !important",
    fontSize: "11px !important",
    display: "flex !important",
    textAlign: "center !important",
    justifyContent: "center !important",
    color: "#707070 !important",
    padding: "5px 0 10px !important",
    outline: "none !important",
  },
}));

export default function StepperShipping(props) {
  const {
    activeStep,
    setActiveStep,
    setShippingMethod,
    register,
    handleClose,
    setRegister,
  } = props;
  const classes = useStyles();
  const [toggle, setToggle] = useState(true);
  const { allStepsCompleted, isLastStep, completed, steps } = useStepper();

  const handleShipmentClick = async () => {
    setToggle(false);
    const quoteId = localStorage.getItem("tokenKey");
    const reqBody = {
      address: {
        region: register.city,
        country_id: "DE",
        street: [register.address],
        postcode: register.postal,
        city: register.city,
        firstname: register.fname,
        lastname: register.lname,
        customer_id: null,
        email: register.email,
        telephone: register.phone,
        same_as_billing: 1,
      },
      data: quoteId,
    };
    await instance
      .post("/estimateShipping", reqBody)
      .then((response) => {
        console.log("response", response.data);
        setShippingMethod(response.data);
        setToggle(true);
      })
      .catch((error) => {
        console.log(error);
      });

    // const newActiveStep =
    //   isLastStep() && !allStepsCompleted()
    //     ? steps.findIndex((step, i) => !(i in completed))
    //     : activeStep + 1;
    await setActiveStep((prevActiveStep) => prevActiveStep + 1)
  };
  return (
    <Box className={classes.shippingContainer}>
      <StepperShippingForm register={register} setRegister={setRegister}/>
      <Box className={classes.nextstep}>
        {toggle ? (
          <Button
            className={classes.continuebtn}
            onClick={handleShipmentClick}
            sx={{ mr: 1 }}
          >
            Continue
          </Button>
        ) : (
          <LoadingButton
            size="small"
            disabled
            className={classes.continuebtn}
            loadingPosition="start"
            variant="contained"
          >
            Loading...
          </LoadingButton>
        )}
      </Box>
      <Box>
        <Button className={classes.exitbtn} onClick={handleClose}>← Exit Checkout</Button>
      </Box>
    </Box>
  );
}
