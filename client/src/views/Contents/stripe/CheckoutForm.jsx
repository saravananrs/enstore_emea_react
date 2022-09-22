import React, { useMemo } from "react";
import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from "@stripe/react-stripe-js";
import useResponsiveFontSize from "../../../useResponsiveFontSize";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(() => ({
  PaymentContainer: {
    padding: "calc(3 * 8px) calc(4 * 8px) calc(1.5 * 8px)",
    position: "relative",
    width:"100%"
  },
  paymentSection:{
    padding:"12px",
    border:"1px solid #d7d9de"
  },
  continuebtn: {
    margin: "calc(3 * 8px) 0 calc(2 * 8px) !important",
    alignItems: "center !important",
    background: "#F37321 !important",
    borderRadius: "4px !important",
    border:"none",
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
  label:{
    "& .__PrivateStripeElement":{
      background: '#ddd !important',
      padding:"8px !important",
      borderRadius:"4px !important"
    },
    "&  .InputContainer ":{
      background: '#ddd !important',
      padding:"8px !important",
      borderRadius:"4px !important"
    }
  }
}))
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
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    [fontSize]
  );

  return options;
};

const CheckoutForm = (props) => {
  const {register,overAll,handleClose} = props
  const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const handleSubmit = async event => {
    event.preventDefault();

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
            "city": "chennai",
            "country": "DE",
            "line1": "123 street",
            "line2": null,
            "postal_code": "43434",
            "state": "Tamil Nadu"
        },
        name: "Saravanan Vaithiyanathan",
        email: "saravanan@riverstonetech.com",
        phone: "309485034"
      }

    });

    console.log("[PaymentMethod]", payload);
   
    const quoteId = localStorage.getItem("tokenKey");
        const reqBody ={
          cartId: quoteId,
          billingAddress: {
            countryId: 'DE',
            regionId: '82',
            regionCode: 'BER',
            region: register.city,
            street: [
              register.address
            ],
            company: '',
            telephone: register.phone,
            postcode: register.postal,
            city: register.city,
            firstname: register.fname,
            lastname: register.lname,
            saveInAddressBook: null
          },
          paymentMethod: {
            method: "stripe_payments",
            additional_data: {
              cc_stripejs_token: payload.paymentMethod.id + ":"+ payload.paymentMethod.card.brand + ":" + payload.paymentMethod.card.last4,
              cc_saved: "new_card",
              cc_save: false
            },
            extension_attributes: {
              agreement_ids: [
                "25"
              ]
            }
          },
          email: register.email,
          data: quoteId,
          }
        await axios.post("http://localhost:8000/api/createOrder",reqBody)
        .then((response) => {
          console.log("response", response.data);
          console.log("order Id", response.data.increment_id);
          handleClose()
          localStorage.removeItem('cartData')
          navigate('/success')
        })
        .catch((error) => {
          console.log(error);
        });

  };
    const classes = useStyles()
  return (
     <form onSubmit={handleSubmit} className={classes.PaymentContainer}>
      {/* <Box className={classes.paymentSection}> */}
      <label >
        Card number
        <CardNumberElement
        className={classes.label}
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
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
        Expiration date
        <CardExpiryElement
        //  className={classes.label}
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
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
          onChange={event => {
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
      {/* </Box> */}
     
      <Box className={classes.nextstep}>
          <button type="submit" disabled={!stripe}
            className={classes.continuebtn}
          >
            Pay 
            {/* € {overAll} */}
          </button>
          </Box>
     </form> 
  );
};

export default CheckoutForm