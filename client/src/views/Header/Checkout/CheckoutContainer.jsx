import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/styles";
import { Grid, Box } from "@mui/material";
import CheckoutOrderSummary from "./CheckoutOrderSummary";
import CheckoutStepper from "./Stepper/CheckoutStepper";

const useStyles = makeStyles(() => ({
  dialogBox: {
    "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
      margin: "0 !important",
      maxWidth: "880px !important",
    },
    "& .css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop": {
      backgroundColor: "rgba(2, 6, 2, 0.8) !important",
    },
  },
  summaryContainer: {
    display: "flex !important",
    backgroundColor: "#f9f9f9",
    flexDirection: "column !important",
    padding: "calc(3 * 8px) calc(4 * 8px) calc(1.5 * 8px)",
    width: "90% !important",
    "@media (max-width: 480px)": {
      width: "100% !important",
      //  padding: "0",
    },
    "@media screen and (min-width: 481px) and (max-width: 1024px)":{
      width: "100% !important",
    },
  },
  modalContainer: {
    flexFlow: "row nowrap !important",
    position: "relative",
    background: "#ffffff",
    borderRadius: "8px",
    borderTop: "none",
    overflowX: "hidden",
    overflowY: "auto",
    maxWidth: "880px",
  },
  sippingContainer: {
    flex: "1 1 auto",
    maxWidth: "700px",
    width: " 100%",
    display: "flex",
    padding: "10px",
    "@media (max-width: 480px)": {
      padding: "0 !important",
    },
  },
  modalheader: {
    padding: "calc(3 * 8px) calc(4 * 8px) calc(1.5 * 8px)",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: 0,
    maxHeight: "48px",
    maxWidth: "204px",
  },
  stepperContainer: {
    display: "flex",
    width: "100%",
  },
}));

export default function CheckoutContainer(props) {
  const classes = useStyles();
  const { open, setOpen, subTotal, handleCloseMenu } = props;
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        className={classes.dialogBox}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Grid
          container
          className={classes.modalContainer}
          sx={{ display: { xs: "block", md: "flex" } }}
        >
          <Grid container className={classes.sippingContainer}>
            <Box>
              <Box className={classes.modalheader}>
                <img
                  className={classes.logo}
                  src="https://img-sandbox.bolt.com/x76/merchants/Enphase_Energy_Inc_QA_Sandbox_logo_1611914377135262326.png"
                  alt="sanboxlogo"
                />
              </Box>
            </Box>
            <Box>
              <Grid
                container
                className={classes.summaryContainer}
                sx={{
                  display: { xs: "flex !important", md: "none !important"},
                  marginBottom:"30px"
                }}
              >
                <CheckoutOrderSummary subTotal={subTotal} />
              </Grid>
              <Box className={classes.stepperContainer}>
                <CheckoutStepper
                  handleClose={handleClose}
                  handleCloseMenu={handleCloseMenu}
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            container
            className={classes.summaryContainer}
            sx={{ display: { xs: "none !important", md: "flex !important" } }}
          >
            <CheckoutOrderSummary subTotal={subTotal} />
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
