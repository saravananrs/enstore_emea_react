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
    setActiveStep,
    setShippingMethod,
    register,
    handleClose,
    setRegister,
    indAddress,
  } = props;
  const classes = useStyles();
  const [toggle, setToggle] = useState(true);
  const storeSignIn = localStorage.getItem("storeSignIn");
  const registeData = JSON.parse(storeSignIn);
  const handleShipmentClick = async () => {
    setToggle(false);
    const quoteId = localStorage.getItem("tokenKey");
    const reqBody = {
      address: {
        region: "Tamil Nadu",
        region_id: "563",
        country_id:
          indAddress && indAddress !== undefined
            ? indAddress[0]?.country_id
            : register.country,
        street: [register.address],
        postcode:
          indAddress && indAddress !== undefined
            ? indAddress[0]?.postcode
            : register.postal,
        city:
          indAddress && indAddress !== undefined
            ? indAddress[0]?.city
            : register.city,
        firstname:
          indAddress && indAddress !== undefined
            ? indAddress[0]?.firstname
            : register.fname,
        lastname:
          indAddress && indAddress !== undefined
            ? indAddress[0]?.lastname
            : register.lname,
        customer_id: null,
        email: registeData?.email ? registeData?.email : register.email,
        telephone:
          indAddress && indAddress !== undefined
            ? indAddress[0]?.telephone
            : register.phone,
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

    await setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Box className={classes.shippingContainer}>
      <StepperShippingForm
        register={register}
        setRegister={setRegister}
        indAddress={indAddress}
      />
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
        <Button className={classes.exitbtn} onClick={handleClose}>
          ← Exit Checkout
        </Button>
      </Box>
    </Box>
  );
}
