import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dummy from "../../../Assets/images/dummy.jpg";
import solar from "../../../Assets/images/solar.jpg";
import { addToCart } from "./../../../redux/actions/EnstoreActions";
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
  const { items, category, categoryIndex, selectiveIndex } = props;
  const filteredProducts = items?.filter((i) => i.status === 1  && i.visibility == 4);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const viewAllImg = [
    {
      id: 1,
      imgUrl:
        "https://media-store-stg.enphase.com/catalog/product/d/s/dsc_4049_full_res_3_1.png",
      background: "linear-gradient(180deg, #FF8B49 0%,#F7D9A9 100%) !important",
    },
    {
      id: 2,
      imgUrl:solar,
      background: "linear-gradient(180deg, #7bb9e9 0%,#c4dbff 100%) !important",
    },
    {
      id: 3,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_3840x3840/public/2022-07/store-categories-communication_0.png?itok=iddc6yhm",
      background: "linear-gradient(180deg, #82c6b7 0%,#dfe0a2 100%) !important",
    },
    {
      id: 4,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_3840x3840/public/2022-07/store-categories-cables-connectors_0.png?itok=kC0w_kHb",
      background: "linear-gradient(180deg, #7bb9e9 0%,#c4dbff 100%) !important",
    },
    {
      id: 5,
      imgUrl:
        "https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2022-07/store-categories-accessories_0.png?itok=k4hjapy3",
      background: "linear-gradient(180deg, #f3a8c3 0%,#f8daa9 100%) !important",
    },
  ];
  const classes = useStyledComponent();
  if (items === undefined) {
    return <Spinner />;
  }
  return (
    <>
      {items && (
        <Carousel breakPoints={breakPoints} pagination={false}>
          {filteredProducts?.slice(0, 5).map((item) => {
            let custome_attribute = {};
            item.custom_attributes.map((attributes) => {
              custome_attribute[attributes.attribute_code] = attributes.value;
            });
            return (
              <>
                <Card key={item.id} className={classes.card}>
                  {custome_attribute.thumbnail &&
                  custome_attribute.thumbnail !== undefined &&
                  item.price !== 0 ? (
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
                        ₹ {item.price.toLocaleString()}
                      </Typography>
                    ) : (
                      ""
                    )}
                  </CardContent>
                  <footer className={classes.cardFooter}>
                    <Grid container className={classes.buttonContainer}>
                      {item.price !== 0 ? (
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
                              Learn More
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
                          <Button
                            className={classes.learnbtn}
                            onClick={() =>
                              navigate(`/product/${custome_attribute.url_key}`)
                            }
                            sx={{ marginLeft: "56%" }}
                          >
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
          {viewAllImg.map((view, index) => {
            return (
              index === selectiveIndex && (
                <Card
                  className={classes.cardViewAll}
                  sx={{
                    background: view.background,
                  }}
                  onClick={() =>
                    navigate("/viewall", {
                      state: { item: categoryIndex, category: category },
                    })
                  }
                >
                  <Typography variant="h5" className={classes.viewallbtn}>
                    View All
                  </Typography>
                  <CardMedia
                    component="img"
                    sx={{ marginTop: "100px" }}
                    // className={classes.cardimg}
                    image={view.imgUrl}
                    alt="products"
                  />
                </Card>
              )
            );
          })}
        </Carousel>
      )}
    </>
  );
}
