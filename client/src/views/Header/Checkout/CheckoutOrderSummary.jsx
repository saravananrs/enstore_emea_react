import React, { useState } from "react";

// Components
import CheckoutOrderDisc from "./CheckoutOrderDisc";

// MUI
import { Grid, Box, Typography, Divider } from "@mui/material";

// Redux
import { useSelector } from "react-redux";

// Hooks
import { useMuiStyles } from "../../Contents/Styles/useMuiStyle.hook";

export default function CheckoutOrderSummary(props) {
  const { cartData, orderData ,discountInfo} = useSelector((state) => state.store);
  const [discountCode, setDiscountCode] = useState("");
  const { subTotal } = props;
  const unique = [];

  cartData.filter((list) => {
    if (unique.find((i) => i.id === list.id && i.name === list.name)) {
      return true;
    }
    unique.push(list);
    return false;
  });

  const overall =
    Number(subTotal) + Number(orderData?.delivery) + Number(orderData?.tax);
  const classes = useMuiStyles();
  return (
    <>
      <Box className={classes.headerName}>Order Summary</Box>
      <Box className={classes.alignment}>
        <Grid className={classes.checkOutSummarycartItems}>
          {unique.map((items) => {
            const smallImages = items.custom_attributes.filter((val) => {
              return val.attribute_code === "small_image";
            });
            return (
              <Box className={classes.checkSummarylistItems}>
                <Box className={classes.listImg}>
                  <img
                    src={`https://media-store-stg.enphase.com/catalog/product${smallImages[0].value}`}
                    alt="cartimg"
                  />
                </Box>
                <Grid sx={{ width: "100%" }}>
                  <Box className={classes.checkSummarylistDetails}>
                    <Typography
                      variant="h4"
                      className={classes.checkSummaryitemName}
                    >
                      {items.name}
                    </Typography>
                    <Box className={classes.checkSummaryitemPrice}>
                      ₹ {items.price}
                    </Box>
                  </Box>
                  <Box className={classes.checkSummarylistQty}>
                    Quantity: &nbsp;{items.cartQty}
                  </Box>
                </Grid>
              </Box>
            );
          })}
        </Grid>
        <Divider />
        <CheckoutOrderDisc
          setDiscountCode={setDiscountCode}
          discountCode={discountCode}
        />
        <Box sx={{ width: "100%", marginTop: "3%" }}>
          <ul className={classes.checkSummarysubList}>
            <Divider sx={{ marginBottom: "10px" }} />
            <li className={classes.checkSummarysubTotal}>
              <Box className={classes.subTotalName}>Cart Subtotal</Box>
              <Box className={classes.subprice}> ₹ {subTotal?.toFixed(2)}</Box>
            </li>
            {orderData.tax !== 0 && (
              <>
                <li className={classes.checkSummarysubTotal}>
                  <Box className={classes.subTotalName}> Delivery</Box>
                  <Box className={classes.subprice}>
                    {discountInfo ? "--" : <span>₹ {orderData.delivery}</span> }
                    
                  </Box>
                </li>
                <li className={classes.checkSummarysubTotal}>
                  <Box className={classes.subTotalName}> Taxes</Box>
                  <Box className={classes.subprice}> ₹ {orderData.tax}</Box>
                </li>
              </>
            )}
            <Divider sx={{ marginBottom: "10px" }} />
            <li className={classes.checkSummarysubTotal}>
              <Box sx={{ color: "#000000", fontWeight: "600" }}> Total</Box>
              <Box
                sx={{ color: "#000000", fontWeight: "600" }}
                className={classes.overAllPrice}
              >
                {" "}
                ₹ {overall?.toFixed(2)}
              </Box>
            </li>
            <Divider sx={{ marginBottom: "10px" }} />
          </ul>
        </Box>
      </Box>
    </>
  );
}
