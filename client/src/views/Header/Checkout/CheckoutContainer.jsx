import * as React from "react";
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
  },
  modalContainer: {
    display: "flex",
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
    padding:"10px",
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
  const { open, setOpen } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        className={classes.dialogBox}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Grid container className={classes.modalContainer}>
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
              <Box className={classes.stepperContainer}>
                <CheckoutStepper />
              </Box>
            </Box>
          </Grid>
          <CheckoutOrderSummary />
        </Grid>
      </Dialog>
    </div>
  );
}

{
  /* <Button autoFocus onClick={handleClose}>
            Disagree
          </Button> */
}
