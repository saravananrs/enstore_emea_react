import React, { useEffect, useState } from "react";

// Components
import SingleProductContents from "./SingleProductContents";
import ProductDetailAccordian from "./ProductDetailAccordian";

// MUI
import { Grid, Paper } from "@mui/material";

// Hooks
import { useStyledComponent } from "../Styles/useStyles.hook";

const SingleProduct = (props) => {
  const product = props.productData;
  const [mediaGallery, setMediaGallery] = useState();
  const [productImage, setProductImage] = useState();
  useEffect(() => {
    let media = product.media_gallery_entries.filter(
      (data) => data.disabled == false
    );
    setMediaGallery(media);
    setProductImage(media[0]);
  }, []);

  const handleThumbNail = (imgData) => {
    setProductImage(imgData);
    window.scrollTo(0, 100);
  };
  const classes = useStyledComponent();
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      className={classes.singleProductContainer}
    >
      <Grid item xs={6} className={classes.singleProductcolumn}>
        {productImage && (
          <Paper className={classes.singleProductimgSec}>
            <img
              srcSet={`https://media-store-stg.enphase.com/catalog/product${productImage.file}`}
              alt="single product"
            />
          </Paper>
        )}
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}
        >
          {mediaGallery &&
            mediaGallery.map((data) => {
              return (
                <Grid item xs={6}>
                  <Paper className={classes.singleProductimgSec}>
                    <img
                      className={classes.singleProductimgSecChild}
                      srcSet={`https://media-store-stg.enphase.com/catalog/product${data.file}`}
                      alt="single product"
                      onClick={() => handleThumbNail(data)}
                    />
                  </Paper>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
      <Grid item xs={6} className={classes.singleProductrightAllign}>
        <SingleProductContents productData={product} />
        <ProductDetailAccordian productData={product} />
      </Grid>
    </Grid>
  );
};

export default SingleProduct;
