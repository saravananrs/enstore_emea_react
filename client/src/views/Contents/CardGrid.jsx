import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import CardModel from "./card/CardModel";
import { useProducts } from "./API/useProduct.hook";
const useStyles = makeStyles(() => ({
  storageContainer: {
    padding: "70px 0px",
  },
  storageHeader: {
    float: "none",
    width: "100%",
    margin: "0 auto",
    maxWidth: "90%",
    paddingBottom: "7%",
    fontFamily: "enphase-visuelt-regular,sans-serif",
  },
  headTitle: {
    marginBottom: "15px !important",
    fontSize: "2.67rem !important",
  },
  headBody: {
    fontSize: "1.25rem !important",
    marginRight: "16% !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
}));

export default function CardGrid() {
  
  const classes = useStyles();

  const { categoryData, productCategories } = useProducts();
  return (
    <React.Fragment>
      {categoryData.map((pName) => {
        return (
          <Grid container key={pName.id} className={classes.storageContainer}>
            <Box className={classes.storageHeader}>
              <Typography variant="h3" className={classes.headTitle}>
                {pName.name}
              </Typography>
              {/* <Typography variant="body1" className={classes.headBody}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                porta nunc ut massa pharetra facilisis sit amet eget augue.
              </Typography> */}
            </Box>
            <Grid container className={classes.cardContainer}>
              
                {/* {cardContent.map((items) => {
                  return (
                    <> */}
                      <CardModel items={pName} />
                    {/* </>
                  );
                })} */}
              {/* </Carousel> */}
            </Grid>
          </Grid>
        );
      })}
    </React.Fragment>
  );
}
