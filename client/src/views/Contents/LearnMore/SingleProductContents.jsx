import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import upArrow from "../../../Assets/Header/spritemap.svg";
import downArrow from "../../../Assets/Header/spritemap.svg";
import { useState } from "react";
const useStyles = makeStyles(() => ({
  contentContainer: {
    textAlign: "left",
  },
  header: {
    fontSize: "2.625rem !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    paddingBottom: "15px",
  },
  price: {
    fontSize: "1.5rem !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    paddingBottom: "15px",
  },
  pCode: {
    fontSize: "1.25rem !important",
    fontFamily: "T-Star Pro !important",
    marginLeft: "16px",
    color: "#6e6e73",
  },
  pText: {
    fontSize: "1.25rem !important",
    lineHeight: "1.9rem !important",
    marginBottom: "25px !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  pTextRead: {
    fontSize: "1.25rem !important",
    lineHeight: "1.9rem !important",
    marginBottom: "25px !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    textDecoration: "underline",
    cursor: "pointer",
  },
  qnty: {
    fontSize: "1rem !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    marginBottom: "18px !important",
  },
  inputContainer: {
    position: "relative",
  },
  inputBox: {
    position: "relative",
    outline: " none",
    width: "95px",
    backgroundColor: " #fff",
    border: " 1px solid #3c3c3c",
    borderRadius: " 8px",
    padding: "8px 48px 8px 7px",
    height: "56px",
    textAlign: " center",
    cursor: "pointer",
  },
  arrowContainer: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "#fff",
    top: 0,
    right: "83%",
    width: "calc(10% - 6px)",
    height: "100%",
    border: " 1px solid #3c3c3c",
    borderRadius: "0 8px 8px 0",
    display: "flex",
    flexDirection: "column",
    padding: "0 6px 0",
    alignItems: "center",
    justifyContent: "center",
    cursor: " pointer",
  },
  upArrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer !important",
    width: "16px",
    height: "16px",
  },
  cartBtn: {
    width: "95% !important",
    border: "1px solid #000 !important",
    backgroundColor: "#000 !important",
    color: "#fff !important",
    fontSize: "1rem !important !important",
    fontFamily: "enphase-visuelt-medium !important",
    borderRadius: "56px !important",
    padding: "26px 32px !important",
    margin: "30px 0px !important",
  },
}));
export default function SingleProductContents() {
  const classes = useStyles();
  const [count, setCount] = useState(1);
  const [readMore, setReadMore] = useState(true);
  const handleReadClick = () => {
    setReadMore(!readMore);
  };
  const handleIncrement = (number) => {
    setCount(number + 1);
  };
  const handleDecrement = (number) => {
    if (number > 1) {
      setCount(number - 1);
    }
  };
  const handleCartbtnclk =() =>{
    console.log(count)
  }
  return (
    <React.Fragment>
      <Box className={classes.contentContainer}>
        <Typography variant="h4" className={classes.header}>
          IQ Load Controller
        </Typography>
        <Typography variant="body2" className={classes.price}>
          $472.00 <span className={classes.pCode}>SKU: EP-NA-LK02-040</span>
        </Typography>
        <Box>
          <Typography variant="body2" className={classes.pText}>
            The IQ Load Controller is a complete solution to use the load
            control feature of the IQ System Controller.
          </Typography>
          {readMore ? (
            <Typography
              variant="body2"
              className={classes.pTextRead}
              onClick={handleReadClick}
            >
              Read More
            </Typography>
          ) : (
            <>
              <Typography variant="body2" className={classes.pText}>
                Using the IQ Load Controller helps power your critical loads for
                a longer time when off-grid by shedding non-essential loads, or
                can help ensure the right solar-to-storage ratio for an off-grid
                system.
              </Typography>
              <Typography variant="body2" className={classes.pText}>
                This product can be used to control 2x36A dedicated loads or
                2x32A branch or solar circuits.
              </Typography>
              <Typography variant="body2" className={classes.pText}>
                The DIN rail design enables easy installation and servicing.
              </Typography>
              <Typography variant="body2" className={classes.pText}>
                The product comes with a 5-year warranty.
              </Typography>
            </>
          )}
        </Box>
        <Box>
          <Typography variant="body1" className={classes.qnty}>
            Quantity
          </Typography>
          <Box className={classes.inputContainer}>
            <input
              className={classes.inputBox}
              type="text"
              pattern="[0-9]*"
              readOnly
              value={count}
            />
            <Box className={classes.arrowContainer}>
              <Box
                onClick={() => handleIncrement(count)}
                className={classes.upArrow}
                sx={{ transform: "rotate(180deg)" }}
              >
                <svg class="fill-current svg svg-xxsmall" role="presentation">
                  <use xlinkHref={`${upArrow}?v=1.20#chevron_down`}></use>
                </svg>
              </Box>
              <Box
                className={classes.upArrow}
                onClick={() => handleDecrement(count)}
              >
                <svg class="fill-current svg svg-xxsmall" role="presentation">
                  <use xlinkHref={`${downArrow}?v=1.20#chevron_down`}></use>
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Button className={classes.cartBtn} onClick={handleCartbtnclk}>Add to Cart</Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
