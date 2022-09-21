import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles(() => ({
  summaryContainer: {
    display: "flex",
    backgroundColor: "#f9f9f9",
    flexDirection: "column",
    padding: "calc(3 * 8px) calc(4 * 8px) calc(1.5 * 8px)",
    width:"70% !important"
  },
}));
export default function CheckoutOrderSummary() {
  const classes = useStyles();
  return (
    <Grid container className={classes.summaryContainer}>
      Order Summary
    </Grid>
  );
}
