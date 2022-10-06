import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dummy from "../../../Assets/images/dummy.jpg";
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
import Carousel from "react-elastic-carousel";
import { useDispatch } from "react-redux";
import Spinner from "../../../Spinner/Spinner";
import { useStyledComponent } from "../Styles/useStyles.hook";

export default function CardModel(props) {
  const { items, category } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const classes = useStyledComponent();
  if (items === undefined) {
    return <Spinner />;
  }
  return (
    <>
      {items && (
        <Carousel breakPoints={breakPoints} pagination={false}>
          {items?.slice(0, 5).map((item) => {
            let custome_attribute = {};
            item.custom_attributes.map((attributes) => {
              custome_attribute[attributes.attribute_code] = attributes.value;
            });
            return (
              <>
                <Card key={item.id} className={classes.card}>
                  {custome_attribute.thumbnail &&
                  custome_attribute.thumbnail !== undefined ? (
                    <CardMedia
                      component="img"
                      className={classes.cardimg}
                      image={`https://media-store-stg.enphase.com/catalog/product${custome_attribute.thumbnail}`}
                      alt="products"
                    />
                  ) : (
                    <CardMedia
                      component="img"
                      className={classes.cardimg}
                      image={dummy}
                      alt="products"
                    />
                  )}
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
          <Card
            className={classes.cardViewAll}
            onClick={() =>
              navigate("/viewall", {
                state: { item: items, category: category },
              })
            }
          >
            <Typography variant="h5" className={classes.viewallbtn}>
              View All
            </Typography>
            <CardMedia
              component="img"
              className={classes.cardimg}
              image="https://store-d9.enphase.com/sites/default/files/styles/max_3840x3840/public/2022-07/store-categories-microinverters_1.png?itok=fZMQVqQa"
              alt="products"
            />
          </Card>
        </Carousel>
      )}
    </>
  );
}
