import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { useSelector } from "react-redux";
const useStyles = makeStyles(() => ({
  summaryContainer: {
    display: "flex",
    backgroundColor: "#f9f9f9",
    flexDirection: "column",
    padding: "calc(3 * 8px) calc(4 * 8px) calc(1.5 * 8px)",
    width: "70% !important",
  },
  headerName: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    lineHeight: "20px !important",
    fontSize: "16px !important",
    alignItems: "center !important",
    textAlign: "left !important",
    marginBottom: "16px !important",
    position: "relative !important",
  },
  alignment: {
    position: "absolute !important",
    top: "17%",
  },
  listItems: {
    width: "100%",
    display: "flex",
    position: "relative",
    marginBottom: "12px",
    alignItems: "flex-start",
    textDecoration: "none",
  },
  listImg: {
    height: "62px",
    width: "62px",
    borderRadius: "4px",
    objectFit: "contain",
    background: "#fff",
    marginRight: "16px",
  },
  listDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "4px",
  },
  itemName: {
    width: "auto",
    maxWidth: "165px",
    position: "relative",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "15px !important",
    paddingRight: "1rem",
    overflow: "hidden",
    textAlign: "left",
  },
  itemPrice: {
    marginLeft: "auto",
    marginRight: "0",
  },
  listQty: {
    overflowY: "hidden",
    lineHeight: "normal",
    color: " #6a7282",
    width: "100%",
  },
  subList: {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
  },
  subTotal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginBottom: "10px",
    color: "#707070",
    fontSize: "14px",
    lineHeight: "22px",
  },
}));
export default function CheckoutOrderSummary(props) {
  const { cartData } = useSelector((state) => state.store);
  const [subTotal, setSubTotal] = useState();
  const { total,setOverall } = props;
  const unique = [];
  cartData.filter((list) => {
    if (unique.find((i) => i.id === list.id && i.name === list.name)) {
      return true;
    }
    unique.push(list);
    return false;
  });

  let len = unique.length - 1;
  let sum = 0;
  while (len >= 0) {
    sum += unique[len--].price;
  }
  useEffect(() => {
    setSubTotal(sum);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartData]);
  const overall = subTotal + (total === undefined ? 0 : total);
  console.log(overall,"overall");
  useEffect(() => {
    setOverall(overall);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const classes = useStyles();
  return (
    <Grid container className={classes.summaryContainer}>
      <Typography variant="h3" className={classes.headerName}>
        Order Summary
      </Typography>
      <Box className={classes.alignment}>
        <Grid className={classes.cartItems}>
          {unique.map((items) => {
            const smallImages = items.custom_attributes.filter((val) => {
              return val.attribute_code === "small_image";
            });
            return (
              <Box className={classes.listItems}>
                <Box className={classes.listImg}>
                  <img
                    src={`https://store-qa2.enphase.com/media/catalog/product${smallImages[0].value}`}
                    alt="cartimg"
                  />
                </Box>
                <Grid sx={{ width: "100%" }}>
                  <Box className={classes.listDetails}>
                    <Typography variant="h4" className={classes.itemName}>
                      {items.name}
                    </Typography>
                    <Box className={classes.itemPrice}>€ {items.price}</Box>
                  </Box>
                  <Box className={classes.listQty}>
                    Quantity: &nbsp;{items.cartQty}
                  </Box>
                </Grid>
              </Box>
            );
          })}
        </Grid>
        <Box sx={{ width: "100%", marginTop: "17%" }}>
          <ul className={classes.subList}>
            <Divider sx={{ marginBottom: "10px" }} />
            <li className={classes.subTotal}>
              <Box className={classes.subTotalName}> SubTotal</Box>
              <Box className={classes.subprice}> € {subTotal}</Box>
            </li>
            <li className={classes.subTotal}>
              <Box className={classes.subTotalName}> Delivery</Box>
              <Box className={classes.subprice}> € </Box>
            </li>
            <li className={classes.subTotal}>
              <Box className={classes.subTotalName}> Taxes</Box>
              <Box className={classes.subprice}> € {total}</Box>
            </li>
            <Divider sx={{ marginBottom: "10px" }} />
            <li className={classes.subTotal}>
              <Box sx={{ color: "#000000", fontWeight: "600" }}> Total</Box>
              <Box sx={{ color: "#000000", fontWeight: "600" }}>
                {" "}
                € {overall}
              </Box>
            </li>
            <Divider sx={{ marginBottom: "10px" }} />
          </ul>
        </Box>
      </Box>
    </Grid>
  );
}
