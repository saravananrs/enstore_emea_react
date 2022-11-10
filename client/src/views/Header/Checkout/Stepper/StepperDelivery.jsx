import React, { useState } from "react";

// MUI
import {
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

// Utils
import instance from "../../../../utils/axiosconfig";

// Redux
import { orderData } from "../../../../redux/actions/EnstoreActions";
import { useDispatch } from "react-redux";

// Hooks
import { useMuiStyles } from "../../../Contents/Styles/useMuiStyle.hook";

export default function StepperDelivery(props) {
  const {
    setActiveStep,
    activeStep,
    shippingMethod,
    register,
    indAddress,
    setRazorpayOrderIdResponse,
    filteredIndReg,
  } = props;
  const [toggle, setToggle] = useState(true);
  const classes = useMuiStyles();
  const dispatch = useDispatch();
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(
    shippingMethod[0]
  );
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const regGuest = filteredIndReg.filter(
    (reg) => reg.default_name === register.province
  );
  const handleShipmentClick = async () => {
    setToggle(false);
    const quoteId = localStorage.getItem("tokenKey");
    const cartData = localStorage.getItem("cartData");
    const quoteIdData = JSON.parse(cartData)
    const reqBody = {
      addressInformation: {
        shipping_address: {
          region: register.province,
          region_id: regGuest[0].region_id,
          country_id: register.country,
          street: [register.address],
          postcode: register.postal,
          city: register.city,
          firstname: register.fname,
          lastname: register.lname,
          customer_id: null,
          email: register.email,
          telephone: register.phone,
        },
        billing_address: {
          region: register.province,
          region_id: regGuest[0].region_id,
          country_id: register.country,
          street: [register.address],
          postcode: register.postal,
          city: register.city,
          firstname: register.fname,
          lastname: register.lname,
          customer_id: null,
          email: register.email,
          telephone: register.phone,
        },
        shipping_carrier_code: selectedShippingMethod.carrier_code,
        shipping_method_code: selectedShippingMethod.method_code,
      },
      data: quoteId,
    };
    let obj = {
      currency: "INR",
      receipt: quoteIdData.quote_id,
      payment_capture: 1,
    };
    await instance
      .post("/checkout/shippingInformation", reqBody)
      .then((response) => {
        console.log("response", response.data);
        dispatch(
          orderData({
            delivery: response.data.totals.shipping_amount,
            tax: response.data.totals.tax_amount,
          })
        );
        obj.amount = Math.round(
          Number(response.data.totals.base_grand_total) * 100
        );
        instance.post("/checkout/createRazorpayOrderID", obj).then((response) => {
          console.log("razor pay esponse");
          setRazorpayOrderIdResponse(response.data);
          setToggle(true);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    await setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleChange = (event) => {
    setSelectedShippingMethod(event.target.value);
  };
  return (
    <>
      <Box className={classes.DeliveryContainer}>
        <Box className={classes.shipDetails}>
          <Typography variant="h3" className={classes.shipTo}>
            Ship to &nbsp;
            <span className={classes.nameDet}>
              {indAddress && indAddress !== undefined
                ? indAddress[0]?.firstname
                : register.fname}
              ,
            </span>
            &nbsp;
            <span className={classes.nameDet}>
              {indAddress && indAddress !== undefined
                ? indAddress[0]?.postcode
                : register.postal}
            </span>
          </Typography>
        </Box>
        <FormControl className={classes.formSet}>
          {shippingMethod.length > 0 ? (
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={selectedShippingMethod}
              onChange={handleChange}
            >
              <Box className={classes.shippingMethod}>
                {shippingMethod.map((method) => (
                  <>
                    <Box className={classes.shippingAssigne} key={method}>
                      <FormControlLabel
                        value={method}
                        control={<Radio />}
                        label={method.method_title}
                      />
                    </Box>
                    <Box className={classes.shippingCost}>
                      ₹ {method.amount}
                    </Box>
                  </>
                ))}
              </Box>
            </RadioGroup>
          ) : (
            <Box className={classes.shippingMethod} sx={{ color: "red" }}>
              Shipping Not Available
            </Box>
          )}
        </FormControl>
        <Box className={classes.nextstep}>
          {toggle ? (
            <Button className={classes.continuebtn} sx={{ mr: 1 }}>
              {shippingMethod.length > 0 ? (
                <span
                  style={{ padding: "10px 135px" }}
                  onClick={handleShipmentClick}
                >
                  Continue
                </span>
              ) : (
                <span>Continue</span>
              )}
            </Button>
          ) : (
            <LoadingButton
              size="small"
              className={classes.continuebtn}
              disabled
              loadingPosition="start"
              variant="contained"
            >
              Loading...
            </LoadingButton>
          )}
        </Box>
        <Button onClick={handleBack}>← Back</Button>
      </Box>
    </>
  );
}
