import { Divider, Box ,Typography} from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import SingleProduct from "./SingleProduct";
import Header from "../../Header/Header";
import LifestyleParts from "../LifestyleParts";
import Footer from "../../Footer/Footer";
const useStyles = makeStyles(() => ({
  learMoreContainer: {
    display:"flex",
    justifyContent:"space-between",
    float: "none",
    maxWidth: "64%",
    margin: "0 auto", 
    alignItems:"center"   
  },
  lSideText:{
    color: "#6e6e73 !important",
    fontSize: "0.875rem !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",

  },
  lHeading:{
    fontSize: "1.25rem !important",
    fontFamily: "enphase-visuelt-medium !important",
  },
  divider:{
    margin:'0.7em 15em !important',
  },
  storeAcc:{
    fontSize: "12px !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  }

}));
export default function LearnMore() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <Header />
      <Box className={classes.learMoreContainer}>
        <Typography variant='body1' className={classes.lHeading}>IQ Load Controller</Typography>
        <Typography variant='body2'  className={classes.lSideText}>Documentation</Typography>
      </Box>
      <Divider className={classes.divider}/>
      <Box className={classes.learMoreContainer}>
        <Typography className={classes.storeAcc} variant='body2' >Store {'>'} Accessories</Typography>
      </Box> 
      <SingleProduct />
      <LifestyleParts />
      <Footer />
    </React.Fragment>
  );
}
