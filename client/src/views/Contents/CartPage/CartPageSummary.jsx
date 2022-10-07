import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
const useStyles = makeStyles(() => ({
  cartPageSummaryContainer: {
    padding: "24px",
    background: "#f5f5f5 !important",
  },
  cpSummary: {
    fontWeight: "600",
    fontSize: "2.4rem",
    fontFamily: "enphase-visuelt-medium,sans-serif",
    margin: "12px 0px !important",
  },
  cpSub: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "20px !important",
  },
  cpSubTotl: {
    color: "#3C3C30 !important",
    fontWeight: "400",
    fontSize: "16px !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  cpPrice: {
    color: "#707070 !important",
    fontSize: "18px !important",
    fontWeight: "200 !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  cptext: {
    color: "#707070 !important",
    fontSize: "16px !important",
    fontWeight: "200 !important",
    fontFamily: "enphase-visuelt-Lighter,sans-serif",
    lineHeight: "25px !important",
    marginTop: "20px !important",
  },
}));
export default function CartPageSummary(props) {
  const { subTotal } = props;
  const classes = useStyles();
  return (
    <Box className={classes.cartPageSummaryContainer}>
      <Box className={classes.cpSummary}>
        <strong>Summary</strong>
      </Box>
      <Divider />
      <Box className={classes.cpSub}>
        <Typography className={classes.cpSubTotl}>Subtotal</Typography>
        <Typography className={classes.cpPrice}>
          € {subTotal?.toFixed(2)}
        </Typography>
      </Box>
      <Divider sx={{ marginTop: "10px" }} />
      <Box className={classes.cptext}>
        Note: Shipping and taxes will be calculated in next steps.
      </Box>
    </Box>
  );
}
