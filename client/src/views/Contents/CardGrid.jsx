import React , { useEffect }from "react";

// Components
import CardModel from "./card/CardModel";

// MUI
import { Grid, Typography, Box } from "@mui/material";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getAllData,
} from "../../redux/actions/EnstoreActions";

// Hooks
import { useStyledComponent } from "./Styles/useStyles.hook";

export default function CardGrid() {
  const classes = useStyledComponent();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box className ={classes.cardgridWidth}>
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
                  <Grid className={classes.cardContainer} >
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
    </Box>
  );
}
