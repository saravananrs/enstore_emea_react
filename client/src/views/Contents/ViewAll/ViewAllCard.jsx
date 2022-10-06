import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { addToCart } from "../../../redux/actions/EnstoreActions";
import { useDispatch } from "react-redux";
import dummy from "../../../Assets/images/dummy.jpg";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  viewAllCard: {
    padding: "24px",
    borderRadius: "16px !important",
    transition: "box-shadow .3s ease-out",
    position: "relative",
    height: "747px",
    "@media (max-width:1024px)":{
        height: "615px",
    },
    "@media screen and (min-width: 1440px) and (max-width: 1740px)": {
        height:"850px"
    }
  },
  viewAllcardimg: {
    width: "100%",
    height: "auto",
    padding:"38px !important",
    transition: " opacity cubic-bezier(0.4,0,0.2,1) 500ms",
    
  },
  viewAllcontent:{
    textAlign:"center !important"
  },
  viewAllprocode:{
    padding:"4px 8px !important",
    fontFamily: 'T-Star Pro !important',
    fontSize:' 0.75rem !important',
    lineHeight: '1em !important',
    letterSpacing: '0.05em !important',
    marginBottom:"12px !important",
    color:"#000 !important"
  },
  viewAlltitle:{
    color:"#000 !important",
    fontFamily: 'enphase-visuelt-regular,sans-serif !important',
    fontSize:' 1.5rem !important',
    lineHeight: '1.3em !important',
  },
  viewAllPrice:{
    background:"linear-gradient(to right,#FAF6EF 8%,#f0f0f0 18%,#FAF6EF 33%)",
    backgroundSize:"900px 104px",
    width: '100px',
    marginTop:"10px !important",
    textAlign:"center",
    margin: '0 auto !important',
    fontFamily:"enphase-visuelt-medium !important",
    color:"#000 !important",
  },
  cardFooter: {
    position: "absolute",
    bottom: '5%',
    left: '24%',
    "@media (max-width:800px)": {
        left: '13%',
    },
    // "@media screen and (min-width: 767px) and (max-width: 1240px)": {
    //     left: '10%',
    // }
  },
  buttonContainer: {
    fontSize: "0.875rem  !important",
    justifyContent: "center",
    position: "relative !important",
  },
  learnbtn: {
    border: " 1px solid #000 !important",
    backgroundColor: "#000  !important",
    color: " #fff  !important",
    textTransform: "capitalize !important",
    fontFamily: "enphase-visuelt-medium !important",
    borderRadius: "25px !important",
    padding: "4px 20px 0 20px !important",
    height: "36px",
    "@media screen and (min-width: 300px) and (max-width: 376px)": {
      fontSize: "12px !important",
      padding: "4px 15px 0 15px !important",
      height: "30px",
    },
  },
  addbtn: {
    border: "1px solid #3c3c3c  !important",
    color: "#3c3c3c  !important",
    marginLeft: "50px !important",
    backgroundColor: "transparent  !important",
    borderRadius: "25px !important",
    padding: "4px 20px 0 20px !important",
    height: "36px",
    textTransform: "capitalize !important",
    fontFamily: "enphase-visuelt-medium !important",
    "@media screen and (min-width: 300px) and (max-width: 767px)": {
      fontSize: "12px !important",
      padding: "4px 15px 0 15px !important",
      marginLeft: "20px !important",
    },
    "@media screen and (min-width: 767px) and (max-width: 1240px)": {
        marginLeft: "10px !important",
    }
  },
}));

export default function ViewAllCard(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let custome_attribute = {};
  product.custom_attributes.map((attributes) => {
    custome_attribute[attributes.attribute_code] = attributes.value;
  });
  const classes = useStyles();
  return (
    <Grid item xs={6} className={classes.viewAllSection}>
      <Card className={classes.viewAllCard}>
        {custome_attribute.thumbnail &&
        custome_attribute.thumbnail !== undefined ? (
          <CardMedia
            component="img"
            className={classes.viewAllcardimg}
            image={`https://media-store-stg.enphase.com/catalog/product${custome_attribute.thumbnail}`}
            alt="products"
          />
        ) : (
          <CardMedia
            component="img"
            className={classes.viewAllcardimg}
            image={dummy}
            alt="products"
          />
        )}
        <CardContent className={classes.viewAllcontent}>
          <Typography
            gutterBottom
            variant="subtitle2"
            component="div"
            className={classes.viewAllprocode}
          >
            SKU: {product.sku}
          </Typography>
          <Typography variant="h5" className={classes.viewAlltitle}>
            {product.name}
          </Typography>
          {product.price !== null ? (
            <Typography className={classes.viewAllPrice}>
              € {product.price.toFixed(2)}
            </Typography>
          ) : (
            ""
          )}
        </CardContent>
        <footer className={classes.cardFooter}>
          <Grid container className={classes.buttonContainer}>
            {product.price !== null ? (
              <>
                {" "}
                <Box className={classes.learnabs}>
                  <Button
                    className={classes.learnbtn}
                    onClick={() =>
                      navigate(`/product/${custome_attribute.url_key}`)
                    }
                  >
                    Lern Mehr
                  </Button>
                </Box>
                <Box className={classes.cartabs}>
                  <Button
                    className={classes.addbtn}
                    onClick={() => dispatch(addToCart(product, 1))}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </>
            ) : (
              <Box>
                <Button className={classes.learnbtn}>Learn More</Button>
              </Box>
            )}
          </Grid>
        </footer>
      </Card>
    </Grid>
  );
}
