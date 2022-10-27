import { Box, Divider, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import upArrow from "../../../Assets/Header/spritemap.svg";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  addToCart,
  clearCartItem,
} from "../../../redux/actions/EnstoreActions";
import useCartItems from "../../Hooks/useCartItems.hook";
import { useMuiStyles } from "../Styles/useMuiStyle.hook";
export default function CartPageTable(props) {
  const { products, setSubTotal, setCon, setQuantitySetter, subTotal } = props;
  const classes = useMuiStyles();
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
