import { Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import HerosectionImg from "./HerosectionImg";
const useStyles = makeStyles((theme) => ({
  storageContainer: {
    paddingTop: '90px',
    '@media (max-width: 780px)':{
      paddingTop: "55px",
    },
  },
  storageHeader: {
    float: "none",
    width: "100%",
    margin: "0 auto",
    maxWidth: "90%",
    paddingBottom: "6%",
    fontFamily: "enphase-visuelt-regular,sans-serif",
  },
  headTitle: {
    marginBottom: "15px !important",
    fontSize: "56px !important",
    '@media (max-width: 780px)':{
      fontSize: "32px !important",
    },
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  productContainer: {
    paddingBottom: "2%",
    overflowY: "hidden",
    marginBottom: "5%",
  },
  productList: {
    display: "flex",
    justifyContent: "space-between",
  },
  pImages: {
    position: "relative",
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  pName: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "1rem !important",
    '@media (max-width: 780px)':{
      fontSize: "0.875rem !important",
    },
    color: "#6e6e73",
    textAlign: "center",
  },
  positions: {
    objectPosition: "center",
    height: " 130px",
    width: "140px",
    '@media (max-width: 780px)':{
      height: "80px",
      width:"80px"
    },
  },
  listItems: {
    marginLeft: "15px",
  },
}));
export default function HeroSection() {
  const classes = useStyles();
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
