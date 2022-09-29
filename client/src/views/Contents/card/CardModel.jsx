import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import instance from "../../../utils/axiosconfig";
import {
  addToCart,
  getProducts,
} from "./../../../redux/actions/EnstoreActions";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Tooltip,
} from "@mui/material";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../Spinner/Spinner";
import { useEffect } from "react";
import { useStyledComponent } from "../Styles/useStyles.hook";

export default function CardModel(props) {
  const [isLoading, setIsLoading] = useState(true);
  const { items } = props;
  const { productData } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(items.id));
  }, []);
  const navigate = useNavigate();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const classes = useStyledComponent();
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    const fetchCategoryProducts = async () => {
      await instance
        .get(`/products`, {
          params: { id: items.id },
        })
        .then((res) => {
          let filteredRes = res.data.filter(
            (resData) => resData.status == 1 && resData.visibility == 4
          );
          setProducts(filteredRes);
          setIsLoading(false);
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
      {!isLoading && products && (
        <Carousel breakPoints={breakPoints} pagination={false}>
          {products.map((item) => {
            let custome_attribute = {};
            item.custom_attributes.map((attributes) => {
              custome_attribute[attributes.attribute_code] = attributes.value;
            });
            return (
              <>
                <Card key={item.id} className={classes.card}>
                  <CardMedia
                    component="img"
                    className={classes.cardimg}
                    image={
                      custome_attribute.thumbnail
                        ? `https://store-qa2.enphase.com/media/catalog/product${custome_attribute.thumbnail}`
                        : ""
                    }
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
                    <Tooltip title={item.name} className={classes.toolTip}>
                      <Typography variant="h5" className={classes.title}>
                        {item.name.length > 26
                          ? item.name.substring(0, 26) + "..."
                          : item.name}
                      </Typography>
                    </Tooltip>
                    {item.price !== null ? (
                      <Typography className={classes.price}>
                        € {item.price.toFixed(2)}
                      </Typography>
                    ) : (
                      ""
                    )}
                  </CardContent>
                  <footer className={classes.cardFooter}>
                    <Grid container className={classes.buttonContainer}>
                      {items.price !== null ? (
                        <>
                          {" "}
                          <Box className={classes.learnabs}>
                            <Button
                              className={classes.learnbtn}
                              onClick={() =>
                                navigate(
                                  `/product/${custome_attribute.url_key}`
                                )
                              }
                            >
                              Lern Mehr
                            </Button>
                          </Box>
                          <Box className={classes.cartabs}>
                            <Button
                              className={classes.addbtn}
                              onClick={() => dispatch(addToCart(item, 1))}
                            >
                              Add to Cart
                            </Button>
                          </Box>
                        </>
                      ) : (
                        <Box>
                          <Button className={classes.learnbtn}>
                            Learn More
                          </Button>
                        </Box>
                      )}
                    </Grid>
                  </footer>
                </Card>
              </>
            );
          })}
        </Carousel>
      )}
    </>
  );
}
