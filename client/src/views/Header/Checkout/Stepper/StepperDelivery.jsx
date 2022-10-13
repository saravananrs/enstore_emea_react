import React, { useState} from "react";
import {
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";
import instance from "../../../../utils/axiosconfig";
import { makeStyles } from "@material-ui/styles";
import LoadingButton from "@mui/lab/LoadingButton";
import useStepper from "./useStepper.hook";
import { orderData } from "../../../../redux/actions/EnstoreActions";
import { useDispatch } from "react-redux";
const useStyles = makeStyles(() => ({
  DeliveryContainer: {
    padding: "calc(3 * 8px) calc(4 * 8px) calc(1.5 * 8px)",
    position: "relative",
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
  shipDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    overflow: "auto",
    margin: "0 0 16px",
    lineHeight: "24px",
  },
  shipTo: {
    fontFamily: "enphase-visuelt-medium !important",
    fontSize: "15px !important",
  },
  nameDet: {
    fontFamily: "enphase-visuelt-medium !important",
    fontWeight: "bold",
  },
  formSet: {
    backgroundColor: " #fff",
    marginBottom: "16px",
    outline: "none",
    width: "100%",
  },
  shippingMethod: {
    padding: "12px",
    borderRadius: "4px",
    border: "1px solid #e0e0e0",
    display: "flex",
    flexGrow: "1",
    alignItems: "center",
    justifyContent: "space-between",
  },
  shippingAssigne: {
    fontSize: "16px",
    lineHeight: "22px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginRight: "16px",
  },
  shippingCost: {
    display: "flex",
    fontSize: "16px",
    marginTop: "10px",
    paddingLeft: "32px",
    flexDirection: "column",
    alignSelf: "flex-start",
    flexShrink: "0",
    lineHeight: "22px",
    textAlign: "right",
  },
}));

export default function StepperDelivery(props) {
  const { setActiveStep, activeStep, shippingMethod, register, indAddress, setRazorpayOrderIdResponse } = props;
  console.log(shippingMethod,"shippingMethod");
  const [toggle, setToggle] = useState(true);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(
    shippingMethod[0]
  );
  const storeSignIn = localStorage.getItem("storeSignIn");
  const registeData = JSON.parse(storeSignIn);
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleShipmentClick = async () => {
    setToggle(false);
    const quoteId = localStorage.getItem("tokenKey");
    const cartData = localStorage.getItem("cartData");
    const reqBody = {
      addressInformation: {
        shipping_address: {
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
        },
        billing_address: {
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
        },
        shipping_carrier_code: selectedShippingMethod.carrier_code,
        shipping_method_code: selectedShippingMethod.method_code,
      },
      data: quoteId,
    };
    let obj = {
      currency: "INR",
      receipt: cartData.quote_id,
      payment_capture : 1
    }
    await instance
      .post("/shippingInformation", reqBody)
      .then((response) => {
        console.log("response", response.data);
        dispatch(
          orderData({
            delivery: response.data.totals.shipping_amount,
            tax: response.data.totals.tax_amount,
          })
        );
        obj.amount= Math.round(Number(response.data.totals.base_grand_total) * 100);
        instance
        .post("/createRazorpayOrderID", obj)
        .then((response) => {
          console.log("razor pay esponse", );
          setRazorpayOrderIdResponse(response.data)
        setToggle(true);
        })
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
              {" "}
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
