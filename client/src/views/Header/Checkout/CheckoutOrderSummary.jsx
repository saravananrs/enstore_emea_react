import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { useSelector } from "react-redux";
const useStyles = makeStyles(() => ({
  summaryContainer: {
    display: "flex !important",
    backgroundColor: "#f9f9f9",
    flexDirection: "column !important",
    padding: "calc(3 * 8px) calc(4 * 8px) calc(1.5 * 8px)",
    width: "90% !important",
    "@media (max-width: 800px)": {
      width: "100% !important",
    },
  },
  headerName: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    lineHeight: "20px !important",
    fontSize: "16px !important",
    alignItems: "center !important",
    fontWeight: "600 !important",
    textAlign: "left !important",
    marginBottom: "25px !important",
  },
  alignment: {
    // position: "absolute !important",
    // top: "17%",
    marginTop: "10%",
  },
  cartItems: {
    overflowY: "auto",
    height: "95px",
    "&::-webkit-scrollbar": {
      width: "2px !important",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.2)",
      outline: "1px solid slategrey",
      borderRadius: 7,
    },
  },
  listItems: {
    width: "100%",
    display: "flex",
    position: "relative",
    marginBottom: "10px",
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
    maxWidth: "175px",
    position: "relative",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "15px !important",
    paddingRight: "1rem",
    overflow: "hidden",
    textAlign: "left",
  },
  itemPrice: {
    marginLeft: "auto",
    marginRight: "10px",
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
  const { cartData, orderData } = useSelector((state) => state.store);
  // const [grandTotal, setGrandTotal] = useState();
  const { subTotal } = props;
  const unique = [];
  cartData.filter((list) => {
    if (unique.find((i) => i.id === list.id && i.name === list.name)) {
      return true;
    }
    unique.push(list);
    return false;
  });

  // useEffect(() => {
  const overall =
    Number(subTotal) + Number(orderData?.delivery) + Number(orderData?.tax);
  // setGrandTotal(overall);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [orderData]);
  const classes = useStyles();
  return (
    <Grid container className={classes.summaryContainer}>
      <Box className={classes.headerName}>Bestellübersicht</Box>
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
                    Menge: &nbsp;{items.cartQty}
                  </Box>
                </Grid>
              </Box>
            );
          })}
        </Grid>
        <Box sx={{ width: "100%", marginTop: "3%" }}>
          <ul className={classes.subList}>
            <Divider sx={{ marginBottom: "10px" }} />
            <li className={classes.subTotal}>
              <Box className={classes.subTotalName}> Zwischensumme</Box>
              <Box className={classes.subprice}> € {subTotal?.toFixed(2)}</Box>
            </li>
            <li className={classes.subTotal}>
              <Box className={classes.subTotalName}> Lieferung</Box>
              <Box className={classes.subprice}> € {orderData.delivery}</Box>
            </li>
            <li className={classes.subTotal}>
              <Box className={classes.subTotalName}> Steuern</Box>
              <Box className={classes.subprice}> € {orderData.tax}</Box>
            </li>
            <Divider sx={{ marginBottom: "10px" }} />
            <li className={classes.subTotal}>
              <Box sx={{ color: "#000000", fontWeight: "600" }}> Gesamt</Box>
              <Box sx={{ color: "#000000", fontWeight: "600" }}>
                {" "}
                € {overall?.toFixed(2)}
              </Box>
            </li>
            <Divider sx={{ marginBottom: "10px" }} />
          </ul>
        </Box>
      </Box>
    </Grid>
  );
}
