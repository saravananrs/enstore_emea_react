import { Grid, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import CardModel from "./card/CardModel";
import Spinner from "../../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../redux/actions/EnstoreActions";
import { useStyledComponent } from "./Styles/useStyles.hook";


export default function CardGrid() {
  const classes = useStyledComponent();
  const { categoryData } = useSelector((state) => state.store);
  const {isLoading}  = useSelector((state)=> state.store)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <React.Fragment>
      {categoryData?.map((pName) => {
        return (
          <Grid container key={pName.id} className={classes.cardGridContainer}>
            <Box className={classes.cardGridHeader}>
              <Typography variant="h3" className={classes.cardGridTitle}>
                {pName.name}
              </Typography>
            </Box>
            <Grid container className={classes.cardContainer}>
              <CardModel items={pName} />
            </Grid>
          </Grid>
        );
      })}
    </React.Fragment>
  );
}
