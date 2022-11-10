import React, { useState } from "react";

// Components
import CheckoutOrderSummary from "./CheckoutOrderSummary";
import CheckoutStepper from "./Stepper/CheckoutStepper";

// MUI
import Dialog from "@mui/material/Dialog";
import { Grid, Box } from "@mui/material";

// Hooks
import { useMuiStyles } from "../../Contents/Styles/useMuiStyle.hook";

export default function CheckoutContainer(props) {
  const classes = useMuiStyles();
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
                  className={classes.checkOutlogo}
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
                  display: { xs: "flex !important", md: "none !important" },
                  marginBottom: "30px",
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
            sx={{ display: { xs: "none !important", md: "block !important" } }}
          >
            <CheckoutOrderSummary subTotal={subTotal}/>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
