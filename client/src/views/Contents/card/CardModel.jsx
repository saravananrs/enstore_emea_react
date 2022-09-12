import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { addToCart } from './../../../redux/actions/EnstoreActions'
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import Spinner from "../../../Spinner/Spinner";
const useStyles = makeStyles(() => ({
  cardimg: {
    width: "20%",
  },

  card: {
    maxWidth: 300,
    padding: "10px 20px",
    // height: "540px",
    marginLeft: "20px",
    borderRadius: "16px !important",
    transition: "0.3s",
    cursor: "pointer",
    boxShadow: "none !important",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3) !important",
    },
  },
  content: {
    textAlign: "center",
  },
  procode: {
    fontFamily: " T-Star Pro",
    fontSize: " 0.7rem !important",
    lineHeight: "1em",
    letterSpacing: "0.05em",
  },
  title: {
    textAlign: "center",
    fontSize: " 1.5rem !important",
    lineHeight: "1.3em",
  },
  price: {
    fontFamily: "enphase-visuelt-medium !important",
    fontSize: "1rem ",
    padding: "20px 0px !important",
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
  },
  addbtn: {
    border: "1px solid #3c3c3c  !important",
    color: "#3c3c3c  !important",
    marginLeft: "10px !important",
    backgroundColor: "transparent  !important",
    borderRadius: "25px !important",
    padding: "4px 20px 0 20px !important",
    height: "36px",
    textTransform: "capitalize !important",
    fontFamily: "enphase-visuelt-medium !important",
  },
  buttonContainer: {
    fontSize: "0.875rem  !important",
    justifyContent: "center",
    position: "relative !important",
  },
  learnabs: {
    position: "absolute",
    left: "3%",
  },
  cartabs: {
    position: "absolute",
    left: "48%",
  },
}));
export default function CardModel(props) {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cardHeight, setCardHeight] = useState(540);
  const { cartData } = useSelector(state => state.store)
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const { items } = props;
  console.log(items, "items");
  const classes = useStyles();
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    const fetchCategoryProducts = async () => {
      await axios
        .get(`http://localhost:8000/api/products`, {
          params: { id: items.id },
        })
        .then((res) => {
          let filteredRes = res.data.filter((resData)=> resData.status == 1 && resData.visibility == 4)
          filteredRes.map((item) => {
            if(item.name.length > 40 && cardHeight == 540) {
              setCardHeight(640)
            }
          });
          setProducts(filteredRes);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchCategoryProducts();
  }, []);
  if (isLoading) {
    return <Spinner />;
  }
  return (
      <>
      {products && <Carousel breakPoints={breakPoints}>
      {products.map((item) => {
        let custome_attribute = {}
        item.custom_attributes.map((attributes) => {
          custome_attribute[attributes.attribute_code] = attributes.value
        });
        return (
         <>
         <Card key={item.id} className={classes.card} sx={{height: cardHeight}}>
            <CardMedia
              component="img"
              className={classes.cardimg}
              image={custome_attribute.thumbnail ? `https://store-qa2.enphase.com/media/catalog/product${custome_attribute.thumbnail}` : ''}
              alt="products"
            />
            <CardContent className={classes.content}>
              <Typography
                gutterBottom
                variant="subtitle2"
                component="div"
                className={classes.procode}
              >
                SKU: {item.sku}
              </Typography>
              <Typography variant="h5" className={classes.title}>
              {item.name}
              </Typography>
              {item.price !== null ? (
                <Typography className={classes.price}>
                  $ {item.price.toFixed(2)}
                </Typography>
              ) : (
                ""
              )}
            </CardContent>
            <Grid container className={classes.buttonContainer}>
              {items.price !== null ? (
                <>
                  {" "}
                  <Box className={classes.learnabs}>
                    <Button className={classes.learnbtn} onClick={() => navigate(`/product/${custome_attribute.url_key}`)}>Learn More</Button>
                  </Box>
                  <Box className={classes.cartabs}>
                    <Button className={classes.addbtn} onClick={()=> dispatch(addToCart(item, 1))}>Add to Cart</Button>
                  </Box>
                </>
              ) : (
                <Box>
                  <Button className={classes.learnbtn}>Learn More</Button>
                </Box>
              )}
            </Grid>
          </Card>
          </>
        );
      })}
      </Carousel> }
      </>
  );
}
