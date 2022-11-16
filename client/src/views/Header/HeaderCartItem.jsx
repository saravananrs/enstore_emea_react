import React, { useEffect } from "react";

// MUI
import { Box, Divider } from "@mui/material";

// Assets - Enphase
import upArrow from "../../Assets/Header/spritemap.svg";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCartItem,
  orderData,
  removeCartItems,
  updateCartItems,
} from "../../redux/actions/EnstoreActions";

// Hooks
import { useStyledComponent } from "../Contents/Styles/useStyles.hook";
import useCartItems from "../Hooks/useCartItems.hook";
import { useState } from "react";

export default function HeaderCartItem(props) {
  const classes = useStyledComponent();
  const { cartData, checkout, updateCart} = useSelector(
    (state) => state.store
  );
  const [updateSKU, setUpdateSKU] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { item, key, setCon, setUpdateCartItems, updtCondition, con } = props;
  const { setSubTotal, count, setCount, setQuantitySetter, subTotal } =
    useCartItems();
  const dispatch = useDispatch();
  let quoteId = localStorage.getItem("tokenKey");

  useEffect(() => {
    if (updateCart !== null && item.key == item.sku ) {
      setUpdateCartItems(true);
    }
  }, [updateCart]);

  useEffect(() => {
    if (updateCart !== null && updateCart?.sku === updateSKU.sku) {
      setIsLoading(false);
      setCon(false);
    }
  }, [updateCart]);

  useEffect(() => {
    setCount(item.cartQty);
  }, [cartData]);

  const handleIncrement = async (number, products) => {
    setCon(true);
    setQuantitySetter(false);
    setUpdateSKU(products);
    setCount(number + 1);
    dispatch(addToCart(products, count));
    setSubTotal(subTotal + products.price);
  };
  const handleDecrement = async (number, products) => {
    setCon(true);
    if (number > 1) {
      let setter = count - 1;
      setQuantitySetter(false);
      setCount(number - 1);
      setUpdateSKU(products);
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
  const handleRemoveItem = async (item) => {
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
  useEffect(() => {
    if (cartData.length === 1) {
      setSubTotal(item.price);
    }
    if (cartData.length === 1 && item.cartQty >= 2) {
      setSubTotal(item.price * item.cartQty);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const smallImages = item?.custom_attributes?.filter(
    (value) => value.attribute_code === "small_image"
  );
  return (
    <div>
      <li className={classes.bagCartItem} key={key}>
        <Box className={classes.cartImgContainer}>
          <img
            src={`https://media-store-stg.enphase.com/catalog/product${smallImages[0].value}`}
            alt="cartimg"
          />
        </Box>
        <Box className={classes.bagCartListDetails}>
          <Box className={classes.bagCartText}>{item.name}</Box>
          <Box className={classes.bagCartText}>₹ {item.price.toFixed(2)}</Box>
          <Box className={classes.bagCartListUpdate}>
            <Box className={classes.bagCartListQuantiity}>
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
                    onClick={() => handleIncrement(count, item)}
                    className={classes.upArrow}
                    sx={{ transform: "rotate(180deg)" }}
                  >
                    <svg
                      class="fill-current svg svg-xxsmall"
                      role="presentation"
                    >
                      <use xlinkHref={`${upArrow}?v=1.20#chevron_down`}></use>
                    </svg>
                  </Box>
                  <Box
                    className={classes.upArrow}
                    onClick={() => handleDecrement(count, item)}
                  >
                    <svg
                      class="fill-current svg svg-xxsmall"
                      role="presentation"
                    >
                      <use xlinkHref={`${upArrow}?v=1.20#chevron_down`}></use>
                    </svg>
                  </Box>
                </Box>
              </Box>
            </Box>
            &nbsp;&nbsp;
            <Box>
              <span
                className={classes.remove}
                onClick={() => handleRemoveItem(item)}
              >
                Remove
              </span>{" "}
              &nbsp;{" "}
              {updtCondition && con && updateSKU.id === item.id && (
                <span onClick={handleProductUpdateClick}>
                  {isLoading ? (
                    <span className={classes.update}>Updating</span>
                  ) : (
                    <span className={classes.update}>Update </span>
                  )}
                </span>
              )}
            </Box>
          </Box>
        </Box>
      </li>
      <Divider className={classes.divider} />
    </div>
  );
}
