import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import instance from "../../../utils/axiosconfig";
import useResponsiveFontSize from "../../../useResponsiveFontSize";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import "./stripe.css";
import { clearCartAndOrderData } from "./../../../redux/actions/EnstoreActions";
import { useDispatch } from "react-redux";
const useStyles = makeStyles(() => ({
  continuebtn: {
    margin: "calc(3 * 8px) 0 calc(2 * 8px) !important",
    alignItems: "center !important",
    background: "#F37321 !important",
    borderRadius: "4px !important",
    border: "none",
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
  label: {
    "& .__PrivateStripeElement": {
      background: "#ddd !important",
      padding: "8px !important",
      borderRadius: "4px !important",
    },
    "&  .InputContainer ": {
      background: "#ddd !important",
      padding: "8px !important",
      borderRadius: "4px !important",
    },
  },
}));
const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};

const CheckoutForm = (props) => {
  const { register, handleClose ,handleCloseMenu, indAddress} = props;
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const storeSignIn = localStorage.getItem("storeSignIn");
  const registeData = JSON.parse(storeSignIn);
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setToggle(false);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
      billing_details: {
        address: {
          city: indAddress && indAddress !== undefined ? indAddress[0]?.city : register.city,
          country:indAddress && indAddress !== undefined
          ? indAddress[0]?.country_id
          : register.country,
          line1: register.address,
          line2: null,
          postal_code:indAddress && indAddress !== undefined
          ? indAddress[0]?.postcode
          : register.postal,
          state: indAddress && indAddress !== undefined ? indAddress[0]?.region?.region : "Tamil Nadu"
        },
        name: indAddress && indAddress !== undefined
        ? indAddress[0]?.firstname
        : register.fname + register.lname,
        email: registeData?.email ? registeData?.email : register.email,
        phone: indAddress && indAddress !== undefined
        ? indAddress[0]?.telephone
        : register.phone,
      },
    });

    console.log("[PaymentMethod]", payload);

    const quoteId = localStorage.getItem("tokenKey");
    const reqBody = {
      cartId: quoteId,
      billingAddress: {
        countryId: indAddress && indAddress !== undefined
        ? indAddress[0]?.country_id
        : register.country,
        regionId: indAddress && indAddress !== undefined ? indAddress[0]?.region?.region_id : "82",
        regionCode: indAddress && indAddress !== undefined ? indAddress[0]?.region?.region_code : "BER",
        region: indAddress && indAddress !== undefined ? indAddress[0]?.city : register.city,
        street: [register.address],
        company: "",
        telephone: indAddress && indAddress !== undefined
        ? indAddress[0]?.telephone
        : register.phone,
        postcode: indAddress && indAddress !== undefined
        ? indAddress[0]?.postcode
        : register.postal,
        city: indAddress && indAddress !== undefined ? indAddress[0]?.city : register.city,
        firstname: indAddress && indAddress !== undefined
        ? indAddress[0]?.firstname
        : register.fname,
      lastname: indAddress && indAddress !== undefined
        ? indAddress[0]?.lastname
        : register.lname,
        saveInAddressBook: null,
      },
      paymentMethod: {
        method: "stripe_payments",
        additional_data: {
          cc_stripejs_token:
            payload.paymentMethod.id +
            ":" +
            payload.paymentMethod.card.brand +
            ":" +
            payload.paymentMethod.card.last4,
          cc_saved: "new_card",
          cc_save: false,
        },
        extension_attributes: {
          agreement_ids: ["25"],
        },
      },
      email: registeData?.email ? registeData?.email : register.email,
      data: quoteId,
    };
    await instance
      .post("checkout/createOrder", reqBody)
      .then((response) => {
        console.log("response", response.data);
        console.log("order Id", response.data.increment_id);
        handleClose();
        localStorage.removeItem("cartData");
        dispatch(clearCartAndOrderData());
        setToggle(true);
        handleCloseMenu()
        navigate("/success", { state: { order: response.data } });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit} >
      <label>
      CARD NUMBER
        <CardNumberElement
          className={classes.label}
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label>
      EXPIRY DATE
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <Box className={classes.nextstep}>
        {toggle ? (
          <Button
            type="submit"
            disabled={!stripe}
            className={classes.continuebtn}
          >
            Pay
          </Button>
        ) : (
          <Button
            size="small"
            className={classes.continuebtn}
            disabled
            loadingPosition="start"
            variant="contained"
          >
            Loading...
          </Button>
        )}
      </Box>
    </form>
  );
};

export default CheckoutForm;
