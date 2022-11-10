import React from "react";

// MUI
import { Box, Divider, Typography } from "@mui/material";

// Hooks
import { useMuiStyles } from "../Styles/useMuiStyle.hook";

export default function CartPageSummary(props) {
  const { subTotal } = props;
  const classes = useMuiStyles();
  return (
    <Box className={classes.cartPageSummaryContainer}>
      <Box className={classes.cpSummary}>
        <strong>Summary</strong>
      </Box>
      <Divider />
      <Box className={classes.cpSub}>
        <Typography className={classes.cpSubTotl}>Subtotal</Typography>
        <Typography className={classes.cpPrice}>
          ₹ {subTotal?.toFixed(2)}
        </Typography>
      </Box>
      <Divider sx={{ marginTop: "10px" }} />
      <Box className={classes.cptext}>
        Note: Shipping and taxes will be calculated in next steps.
      </Box>
    </Box>
  );
}
