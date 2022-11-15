import React, { useEffect, useState } from "react";

// MUI
import { Box, Divider, Grid } from "@mui/material";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCartItem,
  orderData,
  removeCartItems,
  updateCartItems,
} from "../../../redux/actions/EnstoreActions";
import DeleteIcon from "@mui/icons-material/Delete";

// Assets - Enphase
import upArrow from "../../../Assets/Header/spritemap.svg";

// Hooks
import useCartItems from "../../Hooks/useCartItems.hook";
import { useMuiStyles } from "../Styles/useMuiStyle.hook";

export default function CartPageTable(props) {
  const {
    products,
    setSubTotal,
    setCon,
    con,
    setQuantitySetter,
    subTotal,
    updtCondition,
    setUpdateCartItems,
  } = props;
  const classes = useMuiStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [updateSKU, setUpdateSKU] = useState({});
  const { cartData, checkout, updateCart } = useSelector(
    (state) => state.store
  );
  const dispatch = useDispatch();
  let quoteId = localStorage.getItem("tokenKey");
  const { count, setCount } = useCartItems();
  useEffect(() => {
    setCount(products?.cartQty);
  }, [cartData]);
  useEffect(() => {
    if (updateCart !== null && products.key == products.sku) {
      setUpdateCartItems(true);
    }
  }, []);
  useEffect(() => {
    if (updateCart !== null && updateCart?.sku === updateSKU.sku) {
      setIsLoading(false);
      setCon(false);
    }
  }, [updateCart]);
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
    setUpdateSKU(products);
    setCount(number + 1);
    await dispatch(addToCart(products, count));
    setSubTotal(subTotal + products.price);
  };
  const handleDecrement = async (number, products) => {
    setCon(true);
    if (number > 1) {
      let setter = count - 1;
      setUpdateSKU(products);
      setQuantitySetter(false);
      setCount(number - 1);
      await dispatch(addToCart(products, setter - 1));
      setSubTotal(subTotal - products.price);
    }
  };
  const handleProductUpdateClick = async () => {
    setIsLoading(true);
    setUpdateCartItems(false);
    await checkout.map((items) => {
      if (items.sku === updateSKU.sku) {
        const reqBody = {
          cartItem: {
            quote_id: quoteId,
            item_id: items.item_id,
            sku: items.sku,
            qty: count,
          },
        };
        dispatch(updateCartItems(reqBody));
      }
    });
  };
  const handleClearcartItem = async (item) => {
    await checkout.map((items) => {
      if (items.sku === item.sku) {
        const reqBody = {
          quote_id: quoteId,
          item_id: items.item_id,
        };
        dispatch(removeCartItems(reqBody));
      }
    });
    await dispatch(clearCartItem(item));
    dispatch(
      orderData({
        delivery: 0,
        tax: 0,
      })
    );
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
          <Box onClick={handleProductUpdateClick} className={classes.updateAlign}>
          {updtCondition && con && updateSKU.id === products.id && (
            <span className={classes.cartUpdateBtn}>
              {isLoading ? <span>Updating</span> : <span>Update </span>}
            </span>
          )}
        </Box>
          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => handleClearcartItem(products)}
          >
            <DeleteIcon className={classes.cartBin} />
          </Box>
        </Box>
        
      </Grid>
      <Divider className={classes.cartPageDivider} />
    </>
  );
}
