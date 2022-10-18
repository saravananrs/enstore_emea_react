import React from "react";
// import { Elements } from "@stripe/react-stripe-js";
import { Box, Button, Checkbox } from "@mui/material";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "../../../Contents/stripe/CheckoutForm";
import { makeStyles } from "@material-ui/styles";
import $ from "jquery";
import instance from "../../../../utils/axiosconfig";
import { clearCartAndOrderData } from "../../../../redux/actions/EnstoreActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import CircularProgress from "@mui/material/CircularProgress";
const useStyles = makeStyles(() => ({
  spinnerBox: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9fa",
  },
  spinner: {
    color: "#f37321 !important",
  },
  PaymentContainer: {
    padding: "calc(3 * 8px) calc(4 * 8px) calc(1.5 * 8px)",
    position: "relative",
    width: "100%",
  },
  TermsandCondition: {
    color: "#333",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.42857143",
    fontSize: "14px",
  },
  reqField: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontStyle: "normal",
    fontSize: "12px",
    color: "red",
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
  checkBox: {
    padding: "0 !important",
    // "& .css-i4bv87-MuiSvgIcon-root":{
    //     color:"#0075FF !important"
    // },
  },
}));
export default function StepperPayment(props) {
  const classes = useStyles();
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
    filteredIndReg,
  } = props;
  // const stripePromise = loadStripe("pk_test_6BLf1Fr5B4QZi5O0qo91H6u9");
  console.log("razorpayOrderIdResponse", razorpayOrderIdResponse);
  const regGuest = filteredIndReg.filter(
    (reg) => reg.default_name === register.province
  );
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
            countryId:
              indAddress && indAddress !== undefined
                ? indAddress[0]?.country_id
                : register.country,
            regionId:
              indAddress && indAddress !== undefined
                ? indAddress[0]?.region.region_id
                : regGuest[0].region_id,
            regionCode:
              indAddress && indAddress !== undefined
                ? indAddress[0]?.region.region_code
                : regGuest[0].code,
            region:
              indAddress && indAddress !== undefined
                ? indAddress[0]?.region.region
                : register.province,
            street: [register.address],
            company: "",
            telephone: register.phone,
            postcode:
              indAddress && indAddress !== undefined
                ? indAddress[0]?.postcode
                : register.postal,
            city:
              indAddress && indAddress !== undefined
                ? indAddress[0]?.city
                : register.city,
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
          .post("/createOrder", reqBody)
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
        name: register.fname + "" + register.lname,
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
            <span>Loading...</span>
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
    </Box>
  );
}
