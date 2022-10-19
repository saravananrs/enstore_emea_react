import React from "react";
import { styled, useThemeProps } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { makeStyles } from "@material-ui/styles";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { getDiscountInfo } from "../../../redux/actions/EnstoreActions";
import { Divider, Box, Grid, Typography, Button, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
const useStyles = makeStyles(() => ({
  couponTitle: {
    fontSize: "13px !important",
    color: "#F37321 !important",
    fontFamily: "enphase-visuelt-medium !important",
  },
  cartPageDiscounContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: "0px !important",
    borderBottom: "1px solid #F37321 !important",
  },
  discBox: {
    width: "100% !important",
    border:"none",
    background:"#F9F9F9",
    marginBottom: "0px !important",
    "&:focus":{
        outline:"none",
        background:"#F9F9F9 !important",
    },
    padding:"5px"

    // "& .css-y1786z-MuiInputBase-root-MuiInput-root:hover:before": {
    //   border: "none !important",
    // },
    // "& .css-1x51dt5-MuiInputBase-input-MuiInput-input:active": {
    //   backgroundColor: "transparent !important",
    //   background: "transparent !important",
    // },
    // "& .css-y1786z-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before":
    //   {
    //     border: "none !important",
    //   },
    // "& .css-y1786z-MuiInputBase-root-MuiInput-root:before": {
    //   borderColor: "transparent !important",
    //   borderBottom: "0.1px solid transparent !important",
    // },
    // "& .css-y1786z-MuiInputBase-root-MuiInput-root:after": {
    //   borderColor: "transparent !important",
    //   borderBottom: "0.1px solid transparent !important",
    // },
    // width: "100% !important",
    // marginBottom: "0px !important",
  },
  discApplyBtn: {
    color: "#F37321 !important",
    cursor: "pointer",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  couponMsg: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "15px !important",
    color: "#de1124",
    marginTop: "10px",
  },
}));

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
  "&:before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    border: "none",
  })
);
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));
const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));
export default function CheckoutOrderDisc(props) {
  const classes = useStyles();
  const [isLoading , setIsLoading] = useState(false)
  const { checkout, discountInfo } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const { setDiscountCode, discountCode } = props;
  const [expanded, setExpanded] = useState(false);
  const handleExpansionClick = () => {
    setExpanded(!expanded);
  };
  const handleSubmit = (event) => {
    console.log(event);
  };
  const handleDiscount = (e) => {
    e.preventDefault();
    setDiscountCode(e.target.value);
  };
  const handleApplyClick = async(e) => {
    setIsLoading(true)
    e.preventDefault();
    const data = {
      data: checkout.quote_id,
      coupon: discountCode,
    };
  await  dispatch(getDiscountInfo(data));
  setIsLoading(false)
  };
  return (
    <Box className={classes.accordianContainer}>
      <Accordion expanded={expanded}>
        <AccordionSummary onClick={handleExpansionClick}>
          <Typography variant="h3" className={classes.couponTitle}>
            APPLY COUPON CODE
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
            <Box className={classes.cartPageDiscounContainer}>
              {/* <TextField
                type="text"
                name="discount"
                variant="standard"
                className={classes.discBox}
                value={discountCode}
                placeholder="Enter discount code"
                inputStyle={"#000"}
                onChange={handleDiscount}
                //   onFocus={onFocusEvent}
                errorMessages={["this field is required"]}
                onKeyDown={(event) => event.stopPropagation()}
              /> */}
              <input 
              type="text"
              name="discount"
              className={classes.discBox}
                value={discountCode}
                placeholder="Enter discount code"
                onChange={handleDiscount}
              />
              <Typography
                variant="body2"
                className={classes.discApplyBtn}
                onClick={handleApplyClick}
              >
               {isLoading? <CircularProgress sx={{color:"#F37321",padding:"5px"}}/> : "Apply"} 
              </Typography>
            </Box>
          </ValidatorForm>
          {discountInfo !== null && (
            <Box className={classes.couponMsg}>
              {discountInfo === true
                ? "Coupon Applied"
                : "Coupon does not exist"}
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
