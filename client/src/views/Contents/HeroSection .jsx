import React from "react";
import { Link } from "react-router-dom";

// MUI
import { Grid, Typography, Box } from "@mui/material";

// Hooks
import { useStyledComponent } from "./Styles/useStyles.hook";

export default function HeroSection() {
  const classes = useStyledComponent();
  const products = [
    {
      id: 1,
      imgUrl:
        "https://media-store-stg.enphase.com/catalog/product/d/s/dsc_4049_full_res_3_1.png",
      name: "Solar Solution",
    },
    {
      id: 2,
      imgUrl:
        "https://media-store-stg.enphase.com/catalog/product/a/c/acm-em-72-1_1_1.png",
      name: "Microkits",
    },
    {
      id: 3,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-12/Menu-Communication%402x.png?itok=yVbrNoOz",
      name: "Communication",
    },
    {
      id: 4,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-12/Menu-Cable%402x.png?itok=XI5ES6fd",
      name: "Cables",
    },
    {
      id: 5,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-12/Menu-Accessories%402x.png?itok=PH31WBsZ",
      name: "Accesories",
    },
  ];
  return (
    <React.Fragment>
      <Grid className={classes.storageContainer}>
        <Box className={classes.storageHeader}>
          <Typography variant="h3" className={classes.headTitle}>
            Enphase Store
          </Typography>
        </Box>
      </Grid>
      <Grid className={classes.productContainer}>
        <ul className={classes.productList}>
          {products.map((item, index) => {
            return (
              <Link to="/viewall" state={{ item: index, category: item }}>
                {" "}
                <li className={classes.listItems}>
                  <Box className={classes.positions}>
                    <img
                      className={classes.pImages}
                      src={item.imgUrl}
                      sizes="(min-width: 1290px) 1290px, 100vw"
                      alt="product"
                    />
                  </Box>
                  <p className={classes.pName}>{item.name}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </Grid>
    </React.Fragment>
  );
}
