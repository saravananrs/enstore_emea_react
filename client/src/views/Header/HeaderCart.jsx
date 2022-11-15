import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Comoonents
import CheckoutContainer from "./Checkout/CheckoutContainer";
import HeaderCartItem from "./HeaderCartItem";

// Assets - Enphase
import cart from "../../Assets/Header/spritemap.svg";

// MUI
import { Box, Menu, Divider, Grid, Typography, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  addCartFinalCheckOut,
  addCartItemsCheckout,
} from "../../redux/actions/EnstoreActions";

// Hooks
import { useStyledComponent } from "../Contents/Styles/useStyles.hook";
import useCartItems from "../Hooks/useCartItems.hook";

export default function HeaderCart() {
  const classes = useStyledComponent();
  const { cartData ,checkout,} = useSelector((state) => state.store);
  const [bagLoad, setBagLoad] = useState(true);
  const [lengthCheck, setLengthCheck] = useState(false);
  const [updtCondition, setUpdtCondition] = useState(false);
  const results = cartData.filter(({ sku: id1 }) => !checkout.some(({ sku: id2 }) => id2 === id1));
  const {
    openDialog,
    setOpenDialog,
    toggle,
    setToggle,
    cartdDown,
    setCartdDown,
    bagCount,
    setBagCount,
    subTotal,
    setSubTotal,
    quantitySetter,
    con,
    setCon,
    handleClose,
    open,
    updatecartItems,
    setUpdateCartItems,
  } = useCartItems();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (cartData?.length >= 1 && quantitySetter) {
      setSubTotal(total);
    }
  }, [cartData]);

  const handleClick = (event) => {
    setCartdDown(event.currentTarget);
  };
  useEffect(() => {
    setBagCount(cartData?.length);
  }, [cartData]);
  const total = cartData?.reduce(
    (total, currPrice) => (total = total + currPrice.price * currPrice.cartQty),
    0
  );
  const storedData = [];
  let createdCartData = localStorage.getItem("cartData");
  storedData.push(JSON.parse(createdCartData));

  let quoteId = localStorage.getItem("tokenKey");

  const handleCartPageClick = async () => {
    setBagLoad(false);
    if (quoteId === null) {
      await dispatch(addCartItemsCheckout());
    }
    await navigate("/cart");
    setBagLoad(true);
  };
 
  const handleCheckOutClick = async () => {
    setUpdtCondition(true);
    setToggle(false);
    if (quoteId === null) {
      await dispatch(addCartItemsCheckout());
    }
    if (updatecartItems === true && results.length !== 0) {
      let quote = localStorage.getItem("tokenKey");
      await results.map(async (items) => {
        const reqBody = {
          cartItem: {
            sku: items.sku,
            qty: items.cartQty,
            quote_id: quote,
          },
          data: quote,
        };
         await dispatch(addCartFinalCheckOut(reqBody));
      });
    }
    await setOpenDialog(true);
    setToggle(true);
  };

  const storeSignIn = localStorage.getItem("storeSignIn");
  const storeUserData = JSON.parse(storeSignIn);
  return (
    <Box sx={{ marginLeft: { xs: "5px" }, marginRight: { xs: "5px" } }}>
      <div onClick={handleClick} className={classes.bagIcon}>
        <svg class="fill-current svg svg-small" role="presentation">
          <use xlinkHref={`${cart}?v=1.20#store`}></use>
        </svg>
      </div>
      {cartData?.length >= 1 && (
        <Box className={classes.cartqty}>{bagCount}</Box>
      )}
      <Menu
        anchorEl={cartdDown}
        open={open}
        onClose={handleClose}
        sx={{
          marginTop: "20px",
          marginLeft: { xs: "10px", md: "-80px" },
          "& .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
            {
              borderRadius: "28px !important",
              width: { xs: "70%", sm: "50%", md: "25%" },
            },
        }}
      >
        {cartData?.length >= 1 ? (
          <div>
            <Grid className={classes.priceContainer}>
              <Box className={classes.priceItems}>
                <Typography variant="h6" className={classes.subtotal}>
                  Subtotal
                </Typography>
                <Typography variant="body2" className={classes.subtotal}>
                  ₹ {subTotal?.toLocaleString()}
                </Typography>
              </Box>
              {toggle ? (
                <Button
                  className={classes.checkoutBtn}
                  onClick={() => handleCheckOutClick()}
                >
                  Check out
                </Button>
              ) : (
                <LoadingButton
                  size="small"
                  disabled={true}
                  className={classes.checkoutBtn}
                  loadingPosition="start"
                  variant="contained"
                >
                  Loading...
                </LoadingButton>
              )}
              <CheckoutContainer
                setOpen={setOpenDialog}
                open={openDialog}
                subTotal={subTotal}
                handleCloseMenu={handleClose}
              />
            </Grid>
            <Divider />
            <Box className={classes.bagCartContainer}>
              <ul
                className={`${
                  cartData.length > 1
                    ? classes.bagCartListHeight
                    : classes.bagCartList
                }`}
              >
                {cartData?.map((item) => {
                  return (
                    <div>
                      <HeaderCartItem
                        con={con}
                        setLengthCheck={setLengthCheck}
                        updtCondition={updtCondition}
                        setUpdateCartItems={setUpdateCartItems}
                        setCon={setCon}
                        item={item}
                      />
                    </div>
                  );
                })}
              </ul>
            </Box>
          </div>
        ) : (
          <>
            <Box className={classes.bagPage}>Your Bag is empty</Box> <Divider />
          </>
        )}
        <Divider />
        <Box className={classes.items}>
          <a href="#" className="navicon">
            <svg
              role="presentation"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3L2 12H5V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V12H22L12 3Z"
                stroke="#3C3C3C"
                stroke-linejoin="round"
              ></path>
              <path
                d="M10 22V16H14V22"
                stroke="#3C3C3C"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>{" "}
          Store
        </Box>
        <Divider />
        <Box className={classes.items} onClick={handleCartPageClick}>
          <a href="#" className="navicon">
            <svg
              role="presentation"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.93777 7.93348C4.97279 7.40818 5.40909 7 5.93555 7H18.0644C18.5909 7 19.0272 7.40818 19.0622 7.93348L19.9289 20.9335C19.9674 21.5107 19.5096 22 18.9311 22H5.06889C4.49042 22 4.03262 21.5107 4.0711 20.9335L4.93777 7.93348Z"
                stroke="#3C3C3C"
                stroke-linecap="round"
              ></path>
              <path
                d="M15 9V6C15 4.34315 13.6569 3 12 3V3C10.3431 3 9 4.34315 9 6V9"
                stroke="#3C3C3C"
                stroke-linecap="round"
              ></path>
            </svg>
          </a>
          {bagLoad ? "Bag" : "Redirecting"}
        </Box>
        <Divider />
        <Link to="/signin">
          <Box
            className={classes.items}
            onClick={() => localStorage.removeItem("storeSignIn")}
          >
            <a href="/signIn" className="navicon">
              <svg
                role="presentation"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0498 12C14.2589 12 16.0498 9.98528 16.0498 7.5C16.0498 5.01472 14.2589 3 12.0498 3C9.84067 3 8.0498 5.01472 8.0498 7.5C8.0498 9.98528 9.84067 12 12.0498 12Z"
                  stroke="#3C3C3C"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.5498 12.6912C5.03246 13.6443 4.2947 16.2416 3.8999 19.3999C3.8999 19.9999 4.2999 20.4999 4.8999 20.4999H19.0999C19.6999 20.4999 20.1999 19.9999 20.0999 19.3999C19.7051 16.2416 18.9673 13.6443 15.45 12.6912"
                  stroke="#3C3C3C"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
            {storeUserData?.active ? "Sign Out" : "Store sign in"}
          </Box>
        </Link>
        <Divider />
        <Box className={classes.items}>
          <a href="#" className="navicon">
            <svg
              role="presentation"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0498 12C14.2589 12 16.0498 9.98528 16.0498 7.5C16.0498 5.01472 14.2589 3 12.0498 3C9.84067 3 8.0498 5.01472 8.0498 7.5C8.0498 9.98528 9.84067 12 12.0498 12Z"
                stroke="#3C3C3C"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M8.5498 12.6912C5.03246 13.6443 4.2947 16.2416 3.8999 19.3999C3.8999 19.9999 4.2999 20.4999 4.8999 20.4999H19.0999C19.6999 20.4999 20.1999 19.9999 20.0999 19.3999C19.7051 16.2416 18.9673 13.6443 15.45 12.6912"
                stroke="#3C3C3C"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
          App Sign in
        </Box>
      </Menu>
    </Box>
  );
}
