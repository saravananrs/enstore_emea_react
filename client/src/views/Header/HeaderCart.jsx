import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Comoonents
import CheckoutContainer from "./Checkout/CheckoutContainer";
import HeaderCartItem from "./HeaderCartItem";

// Assets - Enphase
import cart from "../../Assets/Header/spritemap.svg";
import { Bagsvg, SignInSvg, StoreSvg } from "../../Assets/svg/enstoreSvg";

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
  const { cartData, checkout } = useSelector((state) => state.store);
  const [bagLoad, setBagLoad] = useState(true);
  const [updtCondition, setUpdtCondition] = useState(false);
  const results = cartData.filter(
    ({ sku: id1 }) => !checkout.some(({ sku: id2 }) => id2 === id1)
  );
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
    if (quoteId === null && cartData.length !== 0) {
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
          <StoreSvg />
          Store
        </Box>
        <Divider />
        <Box className={classes.items} onClick={handleCartPageClick}>
          <Bagsvg />
          {bagLoad ? "Bag" : "Redirecting"}
        </Box>
        <Divider />
        <Link to="/signin">
          <Box
            className={classes.items}
            onClick={() => localStorage.removeItem("storeSignIn")}
          >
            <SignInSvg />
            {storeUserData?.active ? "Sign Out" : "Store sign in"}
          </Box>
        </Link>
        <Divider />
        <Box className={classes.items}>
          <SignInSvg />
          App Sign in
        </Box>
      </Menu>
    </Box>
  );
}
