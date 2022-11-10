import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import SingleProduct from "./SingleProduct";
import LifestyleParts from "../LifestyleParts";
import Spinner from "../../../Spinner/Spinner";

// MUI
import { Divider, Box, Typography } from "@mui/material";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../../redux/actions/EnstoreActions";

// Hooks
import { useStyledComponent } from "../Styles/useStyles.hook";

export default function LearnMore() {
  let { urlKey } = useParams();
  const {singleProduct} = useSelector((state)=> state.store)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getSingleProduct(urlKey))
    window.scrollTo(0,0)
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const classes = useStyledComponent();
  if (singleProduct === null) {
    return <Spinner />;
  }
  return (
    <>
      {singleProduct && (
        <>
          <Box className={classes.learMoreContainer}>
            <Typography variant="body1" className={classes.lHeading}>
              {singleProduct.name}
            </Typography>
            <Typography variant="body2" className={classes.lSideText}>
              Documentation
            </Typography>
          </Box>
          <Divider className={classes.learnMoreDivider} />
          <Box className={classes.learMoreContainer}>
            <Typography className={classes.storeAcc} variant="body2">
              Store {">"} Accessories
            </Typography>
          </Box>
          <SingleProduct productData={singleProduct} />
          <LifestyleParts />
        </>
      )}
    </>
  );
}
