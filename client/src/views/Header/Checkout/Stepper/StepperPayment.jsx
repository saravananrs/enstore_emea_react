import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { Box } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../../Contents/stripe/CheckoutForm";
import {makeStyles} from "@material-ui/styles"
const useStyles = makeStyles(()=>({
  PaymentContainer: {
    padding: "calc(3 * 8px) calc(4 * 8px) calc(1.5 * 8px)",
    position: "relative",
    width: "100%",
  },
}))
export default function StepperPayment(props) {
  const classes = useStyles()
  const { register, handleClose ,handleCloseMenu, indAddress} = props;
  const stripePromise = loadStripe("pk_test_6BLf1Fr5B4QZi5O0qo91H6u9");

  return (
  <Box className={classes.PaymentContainer}>
    <Elements stripe={stripePromise}>
      <CheckoutForm
       indAddress={indAddress}
        register={register}
        handleClose={handleClose}
        handleCloseMenu={handleCloseMenu}
      />
    </Elements>
    </Box>
  );
}
