import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useStyledComponent } from "../Styles/useStyles.hook";
import upArrow from "../../../Assets/Header/spritemap.svg";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  addToCart,
  clearCartItem,
} from "../../../redux/actions/EnstoreActions";
import useCartItems from "../../Hooks/useCartItems.hook";
const useStyles = makeStyles(() => ({
  cartTableWrapper: {
    marginBottom: "20px",
  },
  cartPageTable: {
    display: "flex !important",
    justifyContent: "space-evenly",
    alignItems: "center !important",
    margin: "30px 0px",
  },
  cartPageDivider: {
    borderBottom: "1px solid #7D7D7D !important",
    margin: "0 56px !important",
    // 58px 56px 0px 56px !important
  },
  cartPageImg: {
    width: "100px !important",
    margin: "auto",
    maxWidth: " 100%",
  },
  cartProductName: {
    marginTop: "20px",
    color: "#3c3c3c !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontWeight: "normal !important",
    fontSize: "24px !important",
    display: "block",
    margin: "-3px 0 5px",
  },
  cartProductPrice: {
    fontSize: "20px !important",
    color: "#0a0802 !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontWeight: "normal !important",
  },
  cartPageinputContainer: {
    position: "relative",
    overflow: "hidden",
  },
  cartPageinputBox: {
    position: "relative",
    outline: " none",
    backgroundColor: " #fff",
    border: "1px solid #3c3c3c",
    padding: "7px 25px 8px 7px",
    textAlign: "center",
    borderRadius: "4px",
    width: "56px",
    height: "40px",
    cursor: "pointer",
  },
  cartPagearrowContainer: {
    opacity: "1",
    position: "absolute",
    backgroundColor: " #fff",
    top: "0",
    right: "0",
    width: "calc(50% - 6px)",
    height: "100%",
    border: "1px solid #3c3c3c",
    display: "flex",
    flexDirection: "column",
    alignItems: " center",
    justifyContent: " center",
    cursor: "pointer",
    borderRadius: "0 4px 4px 0",
    padding: "5px 6px 0",
  },
  cartPageupArrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer !important",
    width: "16px",
    height: "16px",
  },
  cartPageQuantity: {
    display: "flex !important",
    alignItems: "center",
    position: "relative",
    flexDirection: "column !important",
  },
  cartBin: {
    color: "#757575 !important",
    position: "absolute",
    top: "166%",
  },
  cartPageclearItem: {
    textAlign: "right",
  },
  cartPageclear: {
    height: "44px !important",
    border: "1px solid #000 !important",
    color: "#fff !important",
    background: "#000 !important",
    padding: "12px 40px !important",
    borderRadius: "36px !important",
    fontFamily: "enphase-visuelt-medium !important",
    fontSize: "0.875rem !important",
    marginTop: "20px !important",
    textTransform: "capitalize !important",
    marginLeft: "16px !important",
  },
}));
export default function CartPageTable(props) {
  const { products, setSubTotal, setCon, setQuantitySetter, subTotal } = props;
  const classes = useStyles();
  const { cartData } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const { count, setCount,} = useCartItems();
  useEffect(() => {
    setCount(products?.cartQty);
  }, []);
  useEffect(() => {
    if (cartData.length === 1) {
      setSubTotal(products.price);
    }
    if (cartData.length === 1 && products.cartQty >= 2) {
      setSubTotal(products.price * products.cartQty);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const smallImages = products.custom_attributes.filter(
    (value) => value.attribute_code === "small_image"
  );
  const handleIncrement = async (number, products) => {
    setCon(true);
    setQuantitySetter(false);
    setCount(number + 1);
    await dispatch(addToCart(products, count));
    setSubTotal(subTotal + products.price);
  };
  const handleDecrement = async (number, products) => {
    setCon(true);
    if (number > 1) {
      let setter = count - 1;
      setQuantitySetter(false);
      setCount(number - 1);
      await dispatch(addToCart(products, setter - 1));
      setSubTotal(subTotal - products.price);
    }
  };
  const handleClearcartItem = async () => {
    await dispatch(clearCartItem(products));
  };
  return (
    <>
      <Grid className={classes.cartPageTable}>
        <Box className={classes.cartPageImageContainer}>
          <img
            className={classes.cartPageImg}
            src={`https://media-store-stg.enphase.com/catalog/product${smallImages[0].value}`}
            alt="cartimg"
          />
        </Box>
        <Box className={classes.cartProductName}>{products.name}</Box>
        <Box className={classes.cartProductPrice}>₹{products.price}</Box>
        <Box className={classes.cartPageQuantity}>
          <Box className={classes.cartPageinputContainer}>
            <input
              className={classes.cartPageinputBox}
              type="text"
              pattern="[0-9]*"
              readOnly
              value={count}
            />
            <Box className={classes.cartPagearrowContainer}>
              <Box
                onClick={() => handleIncrement(count, products)}
                className={classes.upArrow}
                sx={{ transform: "rotate(180deg)" }}
              >
                <svg class="fill-current svg svg-xxsmall" role="presentation">
                  <use xlinkHref={`${upArrow}?v=1.20#chevron_down`}></use>
                </svg>
              </Box>
              <Box
                className={classes.cartPageupArrow}
                onClick={() => handleDecrement(count, products)}
              >
                <svg class="fill-current svg svg-xxsmall" role="presentation">
                  <use xlinkHref={`${upArrow}?v=1.20#chevron_down`}></use>
                </svg>
              </Box>
            </Box>
          </Box>
          <Box sx={{ cursor: "pointer" }} onClick={() => handleClearcartItem()}>
            <DeleteIcon className={classes.cartBin} />
          </Box>
        </Box>
      </Grid>
      <Divider className={classes.cartPageDivider} />
    </>
  );
}
