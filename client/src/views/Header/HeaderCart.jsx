import React from "react";
import cart from "../../Assets/Header/spritemap.svg";
import { Box, Menu, Divider, Grid, Typography, Button } from "@mui/material";
import HeaderCartItem from "./HeaderCartItem";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  addCartFinalCheckOut,
  addCartItemsCheckout,
} from "../../redux/actions/EnstoreActions";
import CheckoutContainer from "./Checkout/CheckoutContainer";
import { useStyledComponent } from "../Contents/Styles/useStyles.hook";
import { Link } from "react-router-dom";

export default function HeaderCart() {
  const classes = useStyledComponent();
  const { cartData } = useSelector((state) => state.store);
  const [openDialog, setOpenDialog] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [cartdDown, setCartdDown] = useState(null);
  const [bagCount, setBagCount] = useState(1);
  const [subTotal, setSubTotal] = useState(0);
  const [val, setVal] = useState();
  const [quantitySetter, setQuantitySetter] = useState(true);
  const [con, setCon] = useState(false);
  const storedData = [];
  let createdCartData = localStorage.getItem("cartData");
  storedData.push(JSON.parse(createdCartData));
  const dispatch = useDispatch();
  const open = Boolean(cartdDown);
  const total = cartData.reduce((total,currPrice)=> total = total + (currPrice.price * currPrice.cartQty), 0)
  useEffect(() => {
    if (cartData.length > 1 && quantitySetter) {
      setSubTotal(total);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartData]);

  const handleClick = (event) => {
    setCartdDown(event.currentTarget);
  };

  const handleClose = () => {
    setCartdDown(null);
  };
  useEffect(() => {
    setBagCount(cartData.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartData]);
  const handleCheckOutClick = async () => {
    setToggle(false);
    if (createdCartData === null || con) {
      await dispatch(addCartItemsCheckout());
      const quoteId = localStorage.getItem("tokenKey");
      cartData.map((items) => {
        const reqBody = {
          cartItem: {
            sku: items.sku,
            qty: items.cartQty,
            quote_id: quoteId,
          },
          data: quoteId,
        };
        dispatch(addCartFinalCheckOut(reqBody));
      });
    }
    await setOpenDialog(true);
    setToggle(true);
  };

  return (
    <Box sx={{ marginLeft: { xs: "5px" }, marginRight: { xs: "5px" } }}>
      <div onClick={handleClick} className={classes.bagIcon}>
        <svg class="fill-current svg svg-small" role="presentation">
          <use xlinkHref={`${cart}?v=1.20#store`}></use>
        </svg>
      </div>
      {cartData.length >= 1 && (
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
        {cartData.length >= 1 ? (
          <div>
            <Grid className={classes.priceContainer}>
              <Box className={classes.priceItems}>
                <Typography variant="h6" className={classes.subtotal}>
                  Zwischensumme
                </Typography>
                <Typography variant="body2" className={classes.subtotal}>
                  € {subTotal?.toFixed(2)}
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
              <ul className={classes.bagCartList}>
                {cartData.map((item) => {
                  return (
                    <div>
                      <HeaderCartItem
                        setBagCount={setBagCount}
                        setSubTotal={setSubTotal}
                        subTotal={subTotal}
                        setQuantitySetter={setQuantitySetter}
                        setCon={setCon}
                        val={val}
                        setVal={setVal}
                        bagCount={bagCount}
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
          Bag
        </Box>
        <Divider />
        <Link to='/signin'>
        <Box className={classes.items}>
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
          Store sign in
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
