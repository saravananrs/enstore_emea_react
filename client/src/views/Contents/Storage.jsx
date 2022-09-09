import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import CardModel from "./card/CardModel";
import { useProducts } from "./API/useProduct.hook";
const useStyles = makeStyles(() => ({
  storageContainer: {
    padding: "70px 0px",
  },
  storageHeader: {
    float: "none",
    width: "100%",
    margin: "0 auto",
    maxWidth: "90%",
    paddingBottom: "7%",
    fontFamily: "enphase-visuelt-regular,sans-serif",
  },
  headTitle: {
    marginBottom: "15px !important",
    fontSize: "2.67rem !important",
  },
  headBody: {
    fontSize: "1.25rem !important",
    marginRight: "16% !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
}));

export default function Storage() {
  
  const classes = useStyles();

  const { categoryData, productCategories } = useProducts();
  console.log(productCategories, "productCategories");
  const cardContent = [
    {
      id: 1,
      url: "https://store-d9.enphase.com/sites/default/files/2021-12/WARR-EXT-ENCHARGE-5YR%402x.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: " 5-Year Limited Warranty Extension for IQ Battery",
      price: null,
    },
    {
      id: 2,
      url: "https://store-d9.enphase.com/sites/default/files/2022-02/EP-NA-LK02-040_Hero%402x.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: "IQ Load Container",
      price: 24,
    },
    {
      id: 3,
      url: "https://store-d9.enphase.com/sites/default/files/2021-12/WARR-EXT-ENCHARGE-5YR%402x.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: " 5-Year Limited Warranty Extension for IQ Battery",
      price: null,
    },
    {
      id: 4,
      url: "https://store-d9.enphase.com/sites/default/files/2021-12/ENCHARGE-10-1P-NA-hero%402x_0.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: "IQ Load Container",
      price: 24,
    },
    {
      id: 5,
      url: "https://store-d9.enphase.com/sites/default/files/2021-12/WARR-EXT-ENCHARGE-5YR%402x.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: " 5-Year Limited Warranty Extension for IQ Battery",
      price: null,
    },
    {
      id: 6,
      url: "https://store-d9.enphase.com/sites/default/files/2021-12/ENCHARGE-10-1P-NA-hero%402x_0.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: "IQ Load Container",
      price: 24,
    },
  ];
  return (
    <React.Fragment>
      {categoryData.map((pName) => {
        return (
          <Grid container key={pName.id} className={classes.storageContainer}>
            <Box className={classes.storageHeader}>
              <Typography variant="h3" className={classes.headTitle}>
                {pName.name}
              </Typography>
              <Typography variant="body1" className={classes.headBody}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                porta nunc ut massa pharetra facilisis sit amet eget augue.
              </Typography>
            </Box>
            <Grid container className={classes.cardContainer}>
              
                {/* {cardContent.map((items) => {
                  return (
                    <> */}
                      <CardModel items={pName} />
                    {/* </>
                  );
                })} */}
              {/* </Carousel> */}
            </Grid>
          </Grid>
        );
      })}
    </React.Fragment>
  );
}
