import React from "react";
import { Box, Divider } from "@mui/material";
import upArrow from "../../Assets/Header/spritemap.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart, clearCartItem } from "../../redux/actions/EnstoreActions";
import { useStyledComponent } from "../Contents/Styles/useStyles.hook";
import useCartItems from "../Hooks/useCartItems.hook";
export default function HeaderCartItem(props) {
  const classes = useStyledComponent();
  const { item, key, setCon } = props;
  const { cartData } = useSelector((state) => state.store);
  const { setSubTotal, count, setCount, setQuantitySetter, subTotal } =
    useCartItems();
  const dispatch = useDispatch();
  useEffect(() => {
    setCount(item.cartQty);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIncrement = async (number, products) => {
    setCon(true);
    setQuantitySetter(false);
    setCount(number + 1);
    dispatch(addToCart(products, count ));
    setSubTotal(subTotal + products.price);
  };
  const handleDecrement = async (number, products) => {
    setCon(true);
    if (number > 1) {
      let setter = count - 1;
      setQuantitySetter(false);
      setCount(number - 1);
      await dispatch(addToCart(products, setter -1));
      setSubTotal(subTotal - products.price);
    }
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
            <Box
              className={classes.remove}
              onClick={() => dispatch(clearCartItem(item))}
            >
              Remove
            </Box>
          </Box>
        </Box>
      </li>
      <Divider className={classes.divider} />
    </div>
  );
}
