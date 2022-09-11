import React, { useEffect, useState } from "react";
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
  imgSecChild: {
    cursor: "pointer"
  },
  rightAllign:{
    paddingLeft:"100px !important"
  },
}));
const SingleProduct = (props)  => {
  const product = props.productData;
  const [mediaGallery, setMediaGallery] = useState()
  const [productImage, setProductImage] = useState()
  useEffect(()=> {
    let media = product.media_gallery_entries.filter((data) => data.disabled == false )
    setMediaGallery(media);
    setProductImage(media[0])
  }, [])
  const classes = useStyles();
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      className={classes.productContainer}
    >
      <Grid item xs={6}>
       {productImage &&  <Paper className={classes.imgSec}>
          <img
            srcSet={`https://store-qa2.enphase.com/media/catalog/product${productImage.file}`}
            alt="single product"
          /> 
        </Paper> }
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       { mediaGallery && mediaGallery.map((data) => {
        console.log(data)
        return (
          <Grid item xs={6}>
            <Paper className={classes.imgSec}>
              <img className={classes.imgSecChild}
            srcSet={`https://store-qa2.enphase.com/media/catalog/product${data.file}`}
                alt="single product"
                onClick={() => setProductImage(data)}
              />
            </Paper>
          </Grid>
       ) })}
        </Grid>
      </Grid>
      <Grid item xs={6} className={classes.rightAllign}>
      <SingleProductContents productData={product} />
      <ProductDetailAccordian productData={product} />
      </Grid>
    </Grid>
  );
}

export default SingleProduct