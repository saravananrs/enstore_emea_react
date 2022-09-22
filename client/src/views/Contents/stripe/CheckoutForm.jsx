import React, { useMemo } from "react";
import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from "@stripe/react-stripe-js";
import useResponsiveFontSize from "../../../useResponsiveFontSize";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

const CheckoutForm = () => {
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
          "cartId": quoteId,
          "billingAddress": {
            "countryId": "DE",
            "regionId": "82",
            "regionCode": "BER",
            "region": "Berlin",
            "street": [
              "123 street"
            ],
            "company": "",
            "telephone": "3434",
            "postcode": "17461",
            "city": "Greifswald",
            "firstname": "saravanan",
            "lastname": "vaithiyanathan",
            "saveInAddressBook": null
          },
          "paymentMethod": {
            "method": "stripe_payments",
            "additional_data": {
              "cc_stripejs_token": payload.paymentMethod.id + ":"+ payload.paymentMethod.card.brand + ":" + payload.paymentMethod.card.last4,
              "cc_saved": "new_card",
              "cc_save": false
            },
            "extension_attributes": {
              "agreement_ids": [
                "25"
              ]
            }
          },
          "email": "saravanan@riverstonetech.com",
          "data": quoteId,
          }
        await axios.post("http://localhost:8000/api/createOrder",reqBody)
        .then((response) => {
          console.log("response", response.data);
          console.log("order Id", response.data.increment_id);
          navigate('/')

        })
        .catch((error) => {
          console.log(error);
        });

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
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
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm