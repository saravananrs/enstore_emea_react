import {
  Box,
  Button,
  styled,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import emptyCart from "../../../Assets/images/empty.png";
import { makeStyles } from "@material-ui/styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CartPageTable from "./CartPageTable";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import CartPageSummary from "./CartPageSummary";
import BoltIcon from "@mui/icons-material/Bolt";

import { useDispatch, useSelector } from "react-redux";
import {
  addCartFinalCheckOut,
  addCartItemsCheckout,
  clearCartAndOrderData,
  getDiscountInfo,
} from "../../../redux/actions/EnstoreActions";
import CheckoutContainer from "../../Header/Checkout/CheckoutContainer";
import useCartItems from "../../Hooks/useCartItems.hook";
const useStyles = makeStyles(() => ({
  cartPageContainer: {
    padding: "40px 35px !important",
  },
  cpContinue: {
    marginLeft: "30px !important",
  },
  cartPageTitle: {
    marginTop: "40px",
  },
  cartPageTitleText: {
    fontFamily: "enphase-visuelt-medium,sans-serif !important",
    fontWeight: "normal !important",
    color: "#707070 !important",
    marginBottom: "30px !important",
    marginLeft: "30px !important",
    fontSize: "24px !important",
    letterSpacing: "0.5px !important",
  },
  cartPageGrid: {
    marginTop: "10px !important",
  },
  cartPageDiscounContainer: {
    marginTop: "40px !important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    width: "30%",
  },
  cartPagesignInBox: {
    "& ::-webkit-input-placeholder": {
        color: "#black !important" 
      },
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      padding: "8px 9px !important",
    },
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      borderColor: "#0a0802",
    },
    background: "#faf6ef !important",
    "& .css-pixsb5-MuiInputBase-root-MuiOutlinedInput-root": {
      borderRadius: "8px !important",
    },
    width: "100% !important",
  },
  cartPageApplyBtn: {
    border: "1px solid #3c3c3c !important",
    color: "#3c3c3c !important",
    padding: "0 33px !important",
    borderRadius: " 25px !important",
    width: "40% !important",
    marginTop: "5px !important",
  },
  couponMsg: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "15px !important",
    // color: "#de1124",
    marginTop: "10px",
  },
  cartTableWrapper: {
    marginBottom: "20px",
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
  cpCheckoutBtn: {
    margin: " 6px 0px !important",
    cursor: "pointer !important",
    height: " 48px !important",
    backgroundColor: "#F37321 !important",
    borderRadius: " 4px !important",
    color: "#fff !important",
    width: " 100% !important",
    textTransform: "capitalize !important",
    marginTop: "30px !important",
    fontSize: "18px !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
}));
const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));
export default function CartPage() {
  const classes = useStyles();
  const [isLoading,setIsLoading] = useState(false)
  const { cartData ,checkout, discountInfo} = useSelector((state) => state.store);
  const [discountCode,setDiscountCode] =  useState('')
  const {
    openDialog,
    setOpenDialog,
    toggle,
    setToggle,
    subTotal,
    setSubTotal,
    quantitySetter,
    setQuantitySetter,
    con,
    setCon,
    handleClose,
    setCartdDown,
    // handleCheckOutClick
  } = useCartItems();
  const total = cartData.reduce(
    (total, currPrice) => (total = total + currPrice.price * currPrice.cartQty),
    0
  );
  const handleSubmit = (event) => {
    console.log(event);
  };
 
  const handleDiscount = (e) => {
    e.preventDefault();
    setDiscountCode(e.target.value);
  };
  const handleApplyClick = async(e) => {
    setIsLoading(true)
    e.preventDefault();
    const data = {
      data: checkout.quote_id,
      coupon: discountCode,
    };
  await  dispatch(getDiscountInfo(data));
  setIsLoading(false)
  };
  const storedData = [];
  let createdCartData = localStorage.getItem("cartData");
  storedData.push(JSON.parse(createdCartData))
  const dispatch = useDispatch();
 

  useEffect(() => {
    if (cartData.length > 1 && quantitySetter) {
      setSubTotal(total);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartData]);
  useEffect(() => {
    handleClose()
    setCartdDown(null)
    window.scrollTo(0, 0);
  }, []);

  const handleCheckOutClick = async () => {
    setToggle(false);
    if (createdCartData === null || con === true) {
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
  const handleClearListClick = async () => {
    await dispatch(clearCartAndOrderData());
    // navigate("/");
  };
  console.log(checkout,"checkoutcheckout");
  return (
    <Container maxWidth="xl" className={classes.cartPageContainer}>
      <Link to="/" className={classes.cpContinue}>
        {" "}
        {"<"} Continue shopping{" "}
      </Link>
      <Box className={classes.cartPageTitle}>
        <Typography variant="h1" className={classes.cartPageTitleText}>
          Shopping Bag
        </Typography>
      </Box>
      {cartData?.length >= 1 ? (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className={classes.cartPageGrid}
        >
          <Grid item xs={9}>
            <Box className={classes.cartTableWrapper}>
              {cartData.map((products) => {
                return (
                  <CartPageTable
                    products={products}
                    setQuantitySetter={setQuantitySetter}
                    setCon={setCon}
                    setSubTotal={setSubTotal}
                    subTotal={subTotal}
                  />
                );
              })}
            </Box>
            <Box className={classes.cartPageclearItem}>
              <Button
                className={classes.cartPageclear}
                onClick={() => handleClearListClick()}
              >
                Clear Shopping Bag
              </Button>
              <Button className={classes.cartPageclear}>
                Update Shopping Bag
              </Button>
            </Box>
            <Box className={classes.cartPageDiscounContainer}>
              <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <TextField
                  type="text"
                  name="discount"
                  className={classes.cartPagesignInBox}
                  value={discountCode}
                  placeholder="Enter discount code"
                  inputStyle={'#000'}
                  onChange={handleDiscount}
                  errorMessages={["this field is required"]}
                  onKeyDown={(event) => event.stopPropagation()}
                />
              </ValidatorForm>
              <Button className={classes.cartPageApplyBtn} onClick={handleApplyClick}>
                {isLoading ? "Loading..." : "Apply"}</Button>
            </Box>
            {discountInfo !== null && (
            <Box className={classes.couponMsg}>
              {discountInfo === true
                ? <span style={{color:"#4BB543"}}>Coupon Applied</span>
                : <span style={{color:"#de1124"}}>Coupon does not exist</span>}
            </Box>
          )}
          </Grid>
          <Grid item xs={3}>
            <CartPageSummary subTotal={subTotal} />
            {toggle ? (
              <Button
                className={classes.cpCheckoutBtn}
                onClick={() => handleCheckOutClick()}
              >
                <BoltIcon /> Checkout
              </Button>
            ) : (
              <Button className={classes.cpCheckoutBtn}> Loading...</Button>
            )}
            <CheckoutContainer
              setOpen={setOpenDialog}
              open={openDialog}
              subTotal={subTotal}
              handleCloseMenu={handleClose}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid sx={{ marginLeft: "17%" }}>
          <img src={emptyCart} alt="emptycart" />
        </Grid>
      )}
    </Container>
  );
}
