import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import CardModel from "./card/CardModel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllData,
  // getAllLocalData,
} from "../../redux/actions/EnstoreActions";
import { useStyledComponent } from "./Styles/useStyles.hook";
import { useLocData } from "../Hooks/useRQAllItems.hook";

export default function CardGrid() {
  const classes = useStyledComponent();
  // const { data } = useLocData();
  // const localData = data?.data;
  const { allData, allLocalData } = useSelector((state) => state.store);
  const categories =
    allLocalData === undefined
      ? allData?.selected_categories
      : allLocalData?.selected_categories;
  const dispatch = useDispatch();
  const productsReturn =
    allLocalData === undefined
      ? allData?.productsToReturn?.map((item) => item.items)
      : allLocalData?.productsToReturn?.map((item) => item.items);
  const response = localStorage.getItem("localResponse");
  const localRes = JSON.parse(response)
  useEffect(() => {
    if (localRes !== 200) {
      dispatch(getAllData());
    }
    setInterval(() => {
      // dispatch(getAllLocalData());
    }, 360000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setInterval(() => {
      dispatch(getAllData());
    }, 300000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
                    <CardModel
                      items={pdcts}
                      category={pName}
                      selectiveIndex={proindex}
                      categoryIndex={index}
                    />
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
