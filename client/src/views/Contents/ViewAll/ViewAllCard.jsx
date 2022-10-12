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
    transition: "box-shadow .3s ease-out !important",
    position: "relative",
    height: "747px",
    marginBottom:"20px !important",
    boxShadow:"none !important",
    "@media screen and (min-width: 300px) and (max-width: 476px)": {
      height:"560px"
    },
    "@media screen and (min-width: 478px) and (max-width: 800px)": {
      height:"600px"
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
    "@media screen and (min-width: 300px) and (max-width: 476px)": {
      fontSize:' 1.2rem !important',
  },
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
    "@media screen and (min-width: 300px) and (max-width: 476px)": {
        left: '23%',
    },
    "@media screen and (min-width: 478px) and (max-width: 1030px)": {
      left: '17%',
  },
//   "@media screen and (min-width: 801px) and (max-width: 1030px)": {
//     left: '17%',
// },
  },
  buttonContainer: {
    fontSize: "0.875rem  !important",
    justifyContent: "center",
    position: "relative !important",
    "@media screen and (min-width: 300px) and (max-width: 476px)": {
        display:"block !important"
    },
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
    "@media screen and (min-width: 300px) and (max-width: 476px)": {
      fontSize: "12px !important",
      // padding: "4px 15px 0 15px !important",
      // height: "30px",
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
    "@media screen and (min-width: 300px) and (max-width: 467px)": {
       fontSize: "12px !important",
      padding: "4px 15px 0 15px !important",
       marginLeft: "5px !important",
       marginTop:"10px !important",
    },
    "@media screen and (min-width: 767px) and (max-width: 1240px)": {
        marginLeft: "10px !important",
    }
  },
}));

export default function ViewAllCard(props) {
  const { product } = props;
  const filterPro = product.filter((i)=>i.status === 1)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Grid
    container
    rowSpacing={1}
    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    className={classes.viewAllCardContainer}
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
          <CardContent className={classes.viewAllcontent}>
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
          <footer className={classes.cardFooter}>
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
