import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import CardModel from "./card/CardModel";
import Spinner from "../../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllData } from "../../redux/actions/EnstoreActions";
import { useStyledComponent } from "./Styles/useStyles.hook";

export default function CardGrid() {
  const classes = useStyledComponent();
  const { allData } = useSelector((state) => state.store);
  const categories = allData?.selected_categories;
  const dispatch = useDispatch();
  const productsReturn = allData?.productsToReturn?.map((item) => item.items);
 
  useEffect(() => {
    dispatch(getAllData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (categories === undefined) {
  //   return <Spinner />;
  // }

  return (
    <React.Fragment>
      {categories?.map((pName, index) => {
        return (
          <>
            <Grid
              container
              key={pName.id}
              className={classes.cardGridContainer}
            >
              <Box className={classes.cardGridHeader}>
                <Typography variant="h3" className={classes.cardGridTitle}>
                  {pName.name}
                </Typography>
              </Box>
            </Grid>
            {productsReturn?.map((pdcts, proindex) => {
                return (
                  index === proindex && (
                    <Grid container className={classes.cardContainer}>
                      <CardModel items={pdcts} category={pName} categoryIndex={index}/>
                    </Grid>
                  )
                );
            })}
          </>
        );
      })}
    </React.Fragment>
  );
}
