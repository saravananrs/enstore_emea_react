import { Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import HerosectionImg from "./HerosectionImg";
const useStyles = makeStyles(() => ({
  storageContainer: {
    padding: "130px 0px 0px 0px",
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
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  productContainer: {
    paddingBottom: "2%",
    overflowY: "scroll",
    marginBottom: "5%",
  },
  productList: {
    display: "flex",
    justifyContent:"space-between"
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
    color: "#6e6e73",
    textAlign: "center",
  },
  positions: {
    objectPosition: "center",
    height: " 130px",
    width: "140px",
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
      pName: "Microinverters",
    },
    {
      id: 2,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-12/Menu-Batteries%402x.png?itok=FcoJaRRV",
      pName: "Storage",
    },
    {
      id: 3,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-12/Menu-Communication%402x.png?itok=yVbrNoOz",
      pName: "Communication",
    },
    {
      id: 4,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-12/Menu-Accessories%402x.png?itok=PH31WBsZ",
      pName: "Accessories",
    },
    {
      id: 5,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-12/Menu-Cable%402x.png?itok=XI5ES6fd",
      pName: "Cables",
    },
    {
      id: 6,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2022-07/ACM.png?itok=Ae52gNyN",
      pName: "Ac Modules",
    },
    {
      id: 7,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2022-02/Category%20icon.png?itok=FIuRERb3",
      pName: "Ev Chargers",
    },
    {
      id: 8,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-12/Menu-Services%402x.png?itok=PS8hPjqS",
      pName: "Services",
    },
    {
      id: 9,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-12/Menu-Lifestyle%402x.png?itok=UTI6SsbP",
      pName: "Life Style",
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
