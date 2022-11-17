import React from "react";
// import { Elements } from "@stripe/react-stripe-js";
import { Box, Button, Checkbox } from "@mui/material";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "../../../Contents/stripe/CheckoutForm";
import $ from "jquery";
import instance from "../../../../utils/axiosconfig";
import { clearCartAndOrderData, orderData } from "../../../../redux/actions/EnstoreActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useMuiStyles } from "../../../Contents/Styles/useMuiStyle.hook";
export default function StepperPayment(props) {
  const classes = useMuiStyles();
  const {  discountInfo } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [terms, setTerms] = useState(false);
  const [condition, setCondition] = useState(false);
  const {
    register,
    handleClose,
    handleCloseMenu,
    razorpayOrderIdResponse,
    indAddress,
    setActiveStep,
    activeStep,
    filteredIndReg,
    setRazorpayOrderIdResponse,
    shippingMethod
  } = props;
  console.log(discountInfo,"discountInfo");
  // const stripePromise = loadStripe("pk_test_6BLf1Fr5B4QZi5O0qo91H6u9");
  console.log("razorpayOrderIdResponse", razorpayOrderIdResponse);
  const regGuest = filteredIndReg.filter(
    (reg) => reg.default_name === register.province
  );
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(
    shippingMethod[0]
  );
  const reInitialize = async () =>{
    const quoteId = localStorage.getItem("tokenKey");
    const cartData = localStorage.getItem("cartData");
    const reqBody = {
      addressInformation: {
        shipping_address: {
          region: register.province,
          region_id: regGuest[0].region_id,
          country_id: register.country,
          street: [register.address],
          postcode: register.postal,
          city:register.city,
          firstname: register.fname,
          lastname: register.lname,
          customer_id: null,
          email:  register.email,
          telephone:register.phone,
        },
        billing_address: {
          region: register.province,
          region_id: regGuest[0].region_id,
          country_id: register.country,
          street: [register.address],
          postcode:register.postal,
          city: register.city,
          firstname: register.fname,
          lastname: register.lname,
          customer_id: null,
          email: register.email,
          telephone:register.phone,
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
      .post("/checkout/shippingInformation", reqBody)
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
        .post("/checkout/createRazorpayOrderID", obj)
        .then((response) => {
          console.log("razor pay esponse", );
          setRazorpayOrderIdResponse(response.data)
        })
      })
      .catch((error) => {
        console.log(error);
      });
}
useEffect(()=>{
  if(discountInfo===true){
    reInitialize()
  }
},[discountInfo])
const handleBack = () => {
  setActiveStep(activeStep - 1);
};
 
  const handleSubmit = () => {
    console.log("enter submit");
    setIsLoading(true);
    var options = {
      key: razorpayOrderIdResponse.key_id, // Enter the Key ID generated from the Dashboard
      amount: razorpayOrderIdResponse.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: razorpayOrderIdResponse.currency,
      name: "Enstore",
      description: "Enstore order",
      //"image": "https://example.com/your_logo",
      order_id: razorpayOrderIdResponse.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        // redirect to status page
        console.log(response);
        const quoteId = localStorage.getItem("tokenKey");

        const reqBody = {
          cartId: quoteId,
          billingAddress: {
            countryId: register.country,
            regionId: regGuest[0].region_id,
            regionCode: regGuest[0].code,
            region: register.province,
            street: [register.address],
            company: "",
            telephone: register.phone,
            postcode: register.postal,
            city: register.city,
            firstname: register.fname,
            lastname: register.lname,
            saveInAddressBook: null,
          },
          paymentMethod: {
            method: "razorpay",
            additional_data: {
              rzp_payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
              rzp_signature: response.razorpay_signature,
            },
            extension_attributes: {
              agreement_ids: ["20"],
            },
          },
          email: register.email,
          data: quoteId,
        };
        await instance
          .post("/checkout/createOrder", reqBody)
          .then((response) => {
            console.log("response", response.data);
            console.log("order Id", response.data.increment_id);
            handleClose();
            localStorage.removeItem("cartData");
            dispatch(clearCartAndOrderData());
            handleCloseMenu();
            navigate("/success", { state: { order: response.data } });
            localStorage.removeItem("cartProducts");
          })
          .catch((error) => {
            console.log(error);
          });
      },
      prefill: {
        name: register.fname + " " + register.lname,
        email: register.email,
        contact: register.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    console.log("enter submit 1");

    $.getScript("https://checkout.razorpay.com/v1/checkout.js", function () {
      console.log("enter submit 2");

      var rzp1 = new Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        console.log("failed response");
        console.log(response);
      });
      rzp1.open();
    });
  };
  return (
    <>
    <Box className={classes.PaymentContainer}>
      <Box className={classes.TermsandCondition} sx={{ marginBottom: "20px" }}>
        All payments made on the Enphase Store are enabled by our Payments
        partner Razorpay. Any payments you make may be subject to Razorpay's
        terms and conditions as well (available here), to the extent applicable.
      </Box>
      <Box className={classes.TermsandCondition}>
        <Checkbox
          color="primary"
          className={classes.checkBox}
          onClick={() => setTerms(!terms)}
        />
        I have read Enphase’s{" "}
        <span style={{ color: "blue" }}>Privacy Policy</span> and agree to
        provide my information, and I agree to Enphase’s
        <span style={{ color: "blue" }}> terms and conditions</span> of sale.
      </Box>
      {condition && !terms && (
        <Box className={classes.reqField}>This field is required*</Box>
      )}
      {terms ? (
        <Button
          className={classes.continuebtn}
          onClick={handleSubmit}
          variant="contained"
        >
          {!isLoading ? (
            <span>Pay With Razorpay</span>
          ) : (
            <span>Please Wait...</span>
          )}
        </Button>
      ) : (
        <Button
          className={classes.continuebtn}
          onClick={() => setCondition(true)}
          variant="contained"
        >
          Pay With Razorpay
        </Button>
      )}
       
      {/* <Elements stripe={stripePromise}>
      <CheckoutForm
       indAddress={indAddress}
        register={register}
        handleClose={handleClose}
        handleCloseMenu={handleCloseMenu}
      />
    </Elements> */}
    {isLoading && <small>The transaction is being proceesed. Please don't refresh or click back button.</small>}
  <br />  <Button onClick={handleBack}>← Back</Button>
    </Box>
    </>
  );
}
