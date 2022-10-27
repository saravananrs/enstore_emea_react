import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import {ValidatorForm } from "react-material-ui-form-validator";
import { getDiscountInfo } from "../../../redux/actions/EnstoreActions";
import {  Box, Typography, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useMuiStyles } from "../../Contents/Styles/useMuiStyle.hook";
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
export default function CheckoutOrderDisc(props) {
  const classes = useMuiStyles();
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
            <Box className={classes.cartOrderDiscounContainer}>
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
                ? <span style={{color:"#4BB543"}}>Coupon Applied</span>
                : <span style={{color:"#de1124"}}>Coupon does not exist</span>}
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
