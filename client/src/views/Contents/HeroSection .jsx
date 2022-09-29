import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import HerosectionImg from "./HerosectionImg";
import { useStyledComponent } from "./Styles/useStyles.hook";

export default function HeroSection() {
  const classes = useStyledComponent()
  const products = [
    {
      id: 1,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-12/Menu-Microinverters%402x.png?itok=kTHajjMP",
      pName: "Mikrowechselrichter",
    },
    {
      id: 2,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-12/Menu-Batteries%402x.png?itok=FcoJaRRV",
      pName: "Lagerung",
    },
    {
      id: 3,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-12/Menu-Communication%402x.png?itok=yVbrNoOz",
      pName: "Kommunikation",
    },
    {
      id: 4,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-12/Menu-Accessories%402x.png?itok=PH31WBsZ",
      pName: "Zubehör",
    },
    {
      id: 5,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-12/Menu-Cable%402x.png?itok=XI5ES6fd",
      pName: "Kabel",
    },
    {
      id: 6,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2022-07/ACM.png?itok=Ae52gNyN",
      pName: "AC-Module",
    },
    {
      id: 7,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2022-02/Category%20icon.png?itok=FIuRERb3",
      pName: "Ev-Ladegeräte",
    },
    {
      id: 8,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-12/Menu-Services%402x.png?itok=PS8hPjqS",
      pName: "Dienstleistungen",
    },
    {
      id: 9,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-12/Menu-Lifestyle%402x.png?itok=UTI6SsbP",
      pName: "Lebensstil",
    },
  ];
  return (
    <React.Fragment>
      <Grid className={classes.storageContainer}>
        <Box className={classes.storageHeader}>
          <Typography variant="h3" className={classes.headTitle}>
            Enphase-Shop
          </Typography>
        </Box>
      </Grid>
      <Grid className={classes.productContainer}>
        <ul className={classes.productList}>
          {products.map((item) => {
            return (
              <li className={classes.listItems}>
                <Box className={classes.positions}>
                  <img
                    className={classes.pImages}
                    src={item.imgUrl}
                    alt="product"
                  />
                </Box>
                <p className={classes.pName}>{item.pName}</p>
              </li>
            );
          })}
        </ul>
      </Grid>
      <HerosectionImg />
    </React.Fragment>
  );
}
