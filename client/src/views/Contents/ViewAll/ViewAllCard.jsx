import React from "react";
import { useNavigate } from "react-router-dom";

// MUI
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

// Redux
import { addToCart } from "../../../redux/actions/EnstoreActions";
import { useDispatch } from "react-redux";

// Assets - Local
import dummy from "../../../Assets/images/dummy.jpg";

// Hooks
import { useMuiStyles } from "../Styles/useMuiStyle.hook";

export default function ViewAllCard(props) {
  const { product,searchBox } = props;
  const filterPro = searchBox!== undefined ? searchBox : product.filter((i)=>i.status === 1 && i.visibility == 4)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useMuiStyles();
  return (
    <Grid
    container
    className={classes.viewAllMobile}
    rowSpacing={1}
    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
  >
    {filterPro.map((item)=>{
       let custome_attribute = {};
       item.custom_attributes?.map((attributes) => {
         custome_attribute[attributes.attribute_code] = attributes.value;
       });
      return(
        <Grid item xs={6} className={classes.viewAllSection}>
        <Card className={classes.viewAllCard}>
          {custome_attribute.thumbnail &&
          custome_attribute.thumbnail !== undefined  && item.price !== 0? (
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
          <CardContent className={classes.viewAllCardContent}>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              className={classes.viewAllprocode}
            >
              SKU: {item.sku}
            </Typography>
            <Typography variant="h5" className={classes.viewAlltitle}>
              {item.name}
            </Typography>
            {item.price !== null ? (
              <Typography className={classes.viewAllPrice}>
                ₹ {item.price?.toFixed(2)}
              </Typography>
            ) : (
              ""
            )}
          </CardContent>
          <footer className={classes.viewAllCardFooter}>
            <Grid container className={classes.buttonContainer}>
              {item.price !== 0 ? (
                <>
                  {" "}
                  <Box className={classes.learnabs}>
                    <Button
                      className={classes.learnbtn}
                      onClick={() =>
                        navigate(`/product/${custome_attribute.url_key}`)
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
                  <Button className={classes.learnbtn} sx={{marginLeft:{xs:'10%',md:"60%"}}}>Learn More</Button>
                </Box>
              )}
            </Grid>
          </footer>
        </Card>
      </Grid>
      )
    })}
    </Grid>
  );
}
