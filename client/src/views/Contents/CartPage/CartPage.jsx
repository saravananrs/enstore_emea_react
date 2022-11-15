import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import CheckoutContainer from "../../Header/Checkout/CheckoutContainer";
import CartPageTable from "./CartPageTable";
import CartPageSummary from "./CartPageSummary";
// MUI
import {
  Box,
  Button,
  styled,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import BoltIcon from "@mui/icons-material/Bolt";

// Assets Local
import emptyCart from "../../../Assets/images/empty.png";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  addCartFinalCheckOut,
  addCartItemsCheckout,
  clearCartAndOrderData,
  getDiscountInfo,
} from "../../../redux/actions/EnstoreActions";

// Hooks
import useCartItems from "../../Hooks/useCartItems.hook";
import { useMuiStyles } from "../Styles/useMuiStyle.hook";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

export default function CartPage() {
  const classes = useMuiStyles();
  const [isLoading, setIsLoading] = useState(false);
  const { cartData, checkout, discountInfo } = useSelector(
    (state) => state.store
  );
  const [updtCondition, setUpdtCondition] = useState(false);
  const results = cartData.filter(({ sku: id1 }) => !checkout.some(({ sku: id2 }) => id2 === id1));
  let quoteId = localStorage.getItem("tokenKey");
  const [discountCode, setDiscountCode] = useState("");
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
    updatecartItems,
    setUpdateCartItems,
    setCartdDown,
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
  const handleApplyClick = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const data = {
      data: checkout.quote_id,
      coupon: discountCode,
    };
    await dispatch(getDiscountInfo(data));
    setIsLoading(false);
  };
  const storedData = [];
  let createdCartData = localStorage.getItem("cartData");
  storedData.push(JSON.parse(createdCartData));
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartData.length > 1 && quantitySetter) {
      setSubTotal(total);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartData]);
  useEffect(() => {
    handleClose();
    setCartdDown(null);
    window.scrollTo(0, 0);
  }, []);

  const handleCheckOutClick = async () => {
    setUpdtCondition(true);
    setToggle(false);
    if (quoteId === null) {
      await dispatch(addCartItemsCheckout());
    }
    if (updatecartItems === true && results.length !== 0) {
      let quote = localStorage.getItem("tokenKey");
      await results.map((items) => {
        const reqBody = {
          cartItem: {
            sku: items.sku,
            qty: items.cartQty,
            quote_id: quote,
          },
          data: quote,
        };
          dispatch(addCartFinalCheckOut(reqBody));
      });
    }
    await setOpenDialog(true);
    setToggle(true);
  };
  const handleClearListClick = async () => {
    await dispatch(clearCartAndOrderData());
  };
  return (
    <Container maxWidth="xl" className={classes.cartPageContainer}>
      <Link to="/" className={classes.cpContinue}>
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
                    updtCondition={updtCondition}
                    setQuantitySetter={setQuantitySetter}
                    setUpdateCartItems={setUpdateCartItems}
                    setCon={setCon}
                    con={con}
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
              <Button className={classes.cartPageclear} >
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
                  inputStyle={"#000"}
                  onChange={handleDiscount}
                  errorMessages={["this field is required"]}
                  onKeyDown={(event) => event.stopPropagation()}
                />
              </ValidatorForm>
              <Button
                className={classes.cartPageApplyBtn}
                onClick={handleApplyClick}
              >
                {isLoading ? "Loading..." : "Apply"}
              </Button>
            </Box>
            {discountInfo !== null && (
              <Box className={classes.couponMsg}>
                {discountInfo === true ? (
                  <span style={{ color: "#4BB543" }}>Coupon Applied</span>
                ) : (
                  <span style={{ color: "#de1124" }}>
                    Coupon does not exist
                  </span>
                )}
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
        <Grid
          sx={{
            float: "none",
            margin: "0 auto",
            width: "100%",
            maxWidth: "80%",
          }}
        >
          <img src={emptyCart} style={{ width: "100%" }} alt="emptycart" />
        </Grid>
      )}
    </Container>
  );
}
