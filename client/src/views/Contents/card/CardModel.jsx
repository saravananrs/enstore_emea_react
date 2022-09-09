import React from "react";
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

import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(() => ({
  cardimg: {
    width: "20%",
  },

  card: {
    maxWidth: 300,
    padding: "10px 20px",
    height: "510px",
    marginLeft: "20px",
    //   width:"50%",
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
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const { items } = props;
  const classes = useStyles();
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    const fetchCategoryProducts = async () => {
      await axios
        .get(`http://localhost:8000/api/products`, {
          params: { id: items.id },
        })
        .then((res) => {
          setProducts(res.data.filter((resData)=> resData.status == 1));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchCategoryProducts();
  }, []);

  return (
    <React.Fragment>
      <Carousel breakPoints={breakPoints}>
      {products.map((item) => {
        let thumbnails = item.custom_attributes.filter((valu)=>{return(
          valu.attribute_code === "thumbnail"
        )})
        return (
         <>
         <Card key={item.id} className={classes.card}>
            <CardMedia
              component="img"
              className={classes.cardimg}
              image={`https://store-qa2.enphase.com/media/catalog/product${thumbnails[0]?.value}`}
              alt="products"
            />
            <CardContent className={classes.content}>
              <Typography
                gutterBottom
                variant="subtitle2"
                component="div"
                className={classes.procode}
              >
                {item.proCode}
              </Typography>
              <Typography variant="h5" className={classes.title}>
              SKU: {item.sku}
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
                    <Button className={classes.learnbtn}>Learn More</Button>
                  </Box>
                  <Box className={classes.cartabs}>
                    <Button className={classes.addbtn}>Add to Cart</Button>
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
      </Carousel>
    </React.Fragment>
  );
}
