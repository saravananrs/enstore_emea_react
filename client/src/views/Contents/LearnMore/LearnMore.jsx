import { Divider, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import SingleProduct from "./SingleProduct";
import Header from "../../Header/Header";
import LifestyleParts from "../LifestyleParts";
import Footer from "../../Footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../../Spinner/Spinner";
const useStyles = makeStyles(() => ({
  learMoreContainer: {
    display: "flex",
    justifyContent: "space-between",
    float: "none",
    maxWidth: "64%",
    "@media (max-width:500px)":{
    maxWidth: "88%",
  },
  "@media screen and (min-width: 501px) and (max-width: 800px)":{
    maxWidth: "88%",
  },
    margin: "0 auto",
    alignItems: "center",
  },
  lSideText: {
    color: "#6e6e73 !important",
    fontSize: "0.875rem !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  lHeading: {
    fontSize: "1.25rem !important",
    fontFamily: "enphase-visuelt-medium !important",
    "@media (max-width:500px)":{
      fontSize: "0.875rem !important",
      fontFamily: "enphase-visuelt-regular,sans-serif !important",
    }
  },
  divider: {
    margin: "0.7em 15em !important",
    "@media (max-width:500px)":{
      margin:"10px 10px !important"
    },
    "@media screen and (min-width: 501px) and (max-width: 800px)":{
      margin:"10px 40px !important"
    },
  },
  storeAcc: {
    fontSize: "12px !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
}));
export default function LearnMore() {
  let { urlKey } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const classes = useStyles();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/productsByURLKey`, {
        params: { id: urlKey },
      })
      .then((res) => {
        setProduct(res.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      {product && (
        <>
          <Box className={classes.learMoreContainer}>
            <Typography variant="body1" className={classes.lHeading}>
              {product.name}
            </Typography>
            <Typography variant="body2" className={classes.lSideText}>
              Documentation
            </Typography>
          </Box>
          <Divider className={classes.divider} />
          <Box className={classes.learMoreContainer}>
            <Typography className={classes.storeAcc} variant="body2">
              Store {">"} Accessories
            </Typography>
          </Box>
          <SingleProduct productData={product} />
          <LifestyleParts />
        </>
      )}
    </>
  );
}
