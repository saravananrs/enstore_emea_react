import React, { useState } from "react";
import { Box, Divider } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import upArrow from "../../Assets/Header/spritemap.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart } from "../../redux/actions/EnstoreActions";
const useStyles = makeStyles(() => ({
  bagCartItem: {
    display: "flex !important",
    flexDirection: "row !important",
    alignItems: "center",
    marginBottom: "10px !important",
  },
  cartImgContainer: {
    width: "64px",
    height: "64px",
    marginRight: "20px",
    flex: "0 0 auto",
    overflow: " hidden",
  },
  bagCartListDetails: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "0.875rem !important",
  },
  bagCartText: {
    color: "#3c3c3c !important",
    marginBottom: "4px !important",
  },
  bagCartListUpdate: {
    display: "flex !important",
    alignItems: "center",
    fontSize: "0.875rem !important",
    marginTop: "10px !important",
  },
  bagCartListQuantiity: {
    marginRight: " 10px",
    overflow: "hidden",
  },
  inputContainer: {
    position: "relative",
    overflow: "hidden",
  },
  inputBox: {
    position: "relative",
    outline: " none",
    backgroundColor: " #fff",
    border: "1px solid #3c3c3c",
    padding: " 8px 20px 8px 7px",
    textAlign: "center",
    borderRadius: "4px",
    width: "50px",
    height: "32px",
    cursor: "pointer",
  },
  arrowContainer: {
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
  upArrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer !important",
    width: "16px",
    height: "16px",
  },
  remove: {
    textDecoration: "underline",
    cursor: "pointer",
    position: "relative",
    zIndex: 1,
  },
  update: {
    color: "red",
    cursor: "pointer",
    position: "relative",
    zIndex: 1,
  },
  divider: {
    margin: "18px 0px !important",
  },
}));

export default function HeaderCartItem(props) {
  const classes = useStyles();
  const { setSubTotal, subTotal, item, key } = props;
  const { cartData } = useSelector((state) => state.store);
  const [count, setCount] = useState(item.cartQty);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cartData.length === 1) {
      setSubTotal(item.cartQty * item.price);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartData]);

  const handleIncrement = (number, id) => {
    if (id === item.id) {
      setCount(number + 1);
      // setBagCount(cartData?.length );
      setSubTotal(subTotal + item.price);
    }
  };
  const handleDecrement = (number, id) => {
    if (number > 1 && id === item.id) {
      setCount(number - 1);
      // setBagCount(bagCount - 1);
      setSubTotal(subTotal - item.price);
    }
  };
  const smallImages = item.custom_attributes.filter(
    (value) => value.attribute_code === "small_image"
  );
  return (
    <div>
      <li className={classes.bagCartItem} key={key}>
        <Box className={classes.cartImgContainer}>
          <img
            src={`https://store-qa2.enphase.com/media/catalog/product${smallImages[0].value}`}
            alt="cartimg"
          />
        </Box>
        <Box className={classes.bagCartListDetails}>
          <Box className={classes.bagCartText}>{item.name}</Box>
          <Box className={classes.bagCartText}>€ {item.price.toFixed(2)}</Box>
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
                    onClick={() => handleIncrement(count, item.id)}
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
                    onClick={() => handleDecrement(count, item.id)}
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
            {count > 1 ? (
              <Box
                className={classes.update}
                onClick={() => dispatch(addToCart(item, count))}
              >
                Update
              </Box>
            ) : (
              <Box
                className={classes.remove}
                onClick={() => dispatch(addToCart(item, count))}
              >
                Update
              </Box>
            )}
            &nbsp;&nbsp;<Box className={classes.remove}>Remove</Box>
          </Box>
        </Box>
      </li>
      <Divider className={classes.divider} />
    </div>
  );
}
