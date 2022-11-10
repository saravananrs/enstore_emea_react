import React,{useState} from "react";

//Components
import StepperShippingForm from "./StepperShippingForm";

//MUI
import { Box,Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

//Utils
import instance from "../../../../utils/axiosconfig";

//Hooks
import { useMuiStyles } from "../../../Contents/Styles/useMuiStyle.hook";

export default function StepperShipping(props) {
  const {
    setActiveStep,
    setShippingMethod,
    register,
    handleClose,
    setRegister,
    indAddress,
    setStreet,
    street,
    filteredIndReg
  } = props;
  const classes = useMuiStyles();
  const [toggle, setToggle] = useState(true);
  const regGuest = filteredIndReg.filter((reg)=>reg.default_name === register.province)
  const handleShipmentClick = async () => {
    setToggle(false);
    const quoteId = localStorage.getItem("tokenKey");
    const reqBody = {
      address: {
        region:  register.province,
        region_id:regGuest[0].region_id,
        country_id: register.country,
        street: [register.address],
        postcode:register.postal,
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
      .post("/checkout/estimateShipping", reqBody)
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
        street={street}
        filteredIndReg={filteredIndReg}
        setStreet={setStreet}
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
