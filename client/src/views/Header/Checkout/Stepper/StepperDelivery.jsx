import React, { useState, useEffect } from "react";
import {
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";
import axios from "axios";
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
    paddingLeft: "32px",
    flexDirection: "column",
    alignSelf: "flex-start",
    flexShrink: "0",
    lineHeight: "22px",
    textAlign: "right",
  },
}));

export default function StepperDelivery(props) {
  const {
    setActiveStep,
    activeStep,
    shippingMethod,
    register,
  } = props;
  const [toggle, setToggle] = useState(true);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(
    shippingMethod[0]
  );
  const { allStepsCompleted, isLastStep, completed, steps } = useStepper();
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleShipmentClick = async () => {
    setToggle(false);
    const quoteId = localStorage.getItem("tokenKey");
    const reqBody = {
      addressInformation: {
        shipping_address: {
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
        },
        billing_address: {
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
        },
        shipping_carrier_code: selectedShippingMethod.carrier_code,
        shipping_method_code: selectedShippingMethod.method_code,
      },
      data: quoteId,
    };
    await axios
      .post("http://localhost:8000/api/shippingInformation", reqBody)
      .then((response) => {
        console.log("response", response.data);
        dispatch(orderData({
          "delivery":response.data.totals.shipping_amount,
          "tax": response.data.totals.tax_amount,
        }))
        setToggle(true);
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
            <span className={classes.nameDet}>{register.fname},</span>&nbsp;
            <span className={classes.nameDet}> {register.postal}</span>
          </Typography>
        </Box>
        <FormControl className={classes.formSet}>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={selectedShippingMethod}
            onChange={handleChange}
          >
            <Box className={classes.shippingMethod}>
              {shippingMethod.map((method) => (
                <>
                  <Box className={classes.shippingAssigne}>
                    <FormControlLabel
                      value={method}
                      control={<Radio />}
                      label={method.method_title}
                    />
                  </Box>
                  <Box className={classes.shippingCost}>€ {method.amount}</Box>
                </>
              ))}
            </Box>
          </RadioGroup>
        </FormControl>
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
              className={classes.continuebtn}
              disabled
              loadingPosition="start"
              variant="contained"
            >
              Loading...
            </LoadingButton>
          )}
        </Box>
        <Button onClick={handleBack}>←  Back</Button>
      </Box>
    </>
  );
}
