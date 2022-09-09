import React from "react";
import { Grid,Paper } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import SingleProductContents from "./SingleProductContents";
import ProductDetailAccordian from "./ProductDetailAccordian";

const useStyles = makeStyles(() => ({
  productContainer: {
    textAlign: "center",
    float: "none",
    maxWidth: "98%",
    margin: "0 auto !important",
    padding: "20px 0px",
  },
  imgSec: {
    boxShadow: "none !important",
    borderRadius: "16px !important",
    marginBottom:"15px !important"
  },
  rightAllign:{
    paddingLeft:"100px !important"
  },
}));
export default function SingleProduct() {
  const classes = useStyles();
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      className={classes.productContainer}
    >
      <Grid item xs={6}>
        <Paper className={classes.imgSec}>
          <img
            srcSet="https://store-d9.enphase.com/sites/default/files/styles/max_size_2800xauto_/public/2022-02/EP-NA-LK02-040_Hero%402x.png?itok=D9a6C4Ju"
            alt="single product"
          />
        </Paper>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Paper className={classes.imgSec}>
              <img
                srcSet="https://store-d9.enphase.com/sites/default/files/styles/max_size_2800xauto_/public/2022-02/EP-NA-LK02-040_Hero%402x.png?itok=D9a6C4Ju"
                alt="single product"
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.imgSec}>
              <img
                srcSet="https://store-d9.enphase.com/sites/default/files/styles/max_size_2800xauto_/public/2022-02/EP-NA-LK02-040_Hero%402x.png?itok=D9a6C4Ju"
                alt="single product"
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.imgSec}>
              <img
                srcSet="https://store-d9.enphase.com/sites/default/files/styles/max_size_2800xauto_/public/2022-02/EP-NA-LK02-040_Hero%402x.png?itok=D9a6C4Ju"
                alt="single product"
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.imgSec}>
              <img
                srcSet="https://store-d9.enphase.com/sites/default/files/styles/max_size_2800xauto_/public/2022-02/EP-NA-LK02-040_Hero%402x.png?itok=D9a6C4Ju"
                alt="single product"
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} className={classes.rightAllign}>
      <SingleProductContents />
      <ProductDetailAccordian />
      </Grid>
    </Grid>
  );
}
