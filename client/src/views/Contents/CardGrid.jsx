import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import CardModel from "./card/CardModel";
import Spinner from "../../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllData, getAllLocalData } from "../../redux/actions/EnstoreActions";
import { useStyledComponent } from "./Styles/useStyles.hook";

export default function CardGrid() {
  const classes = useStyledComponent();
  const { allData,allLocalData } = useSelector((state) => state.store);
  console.log(allLocalData,"allLocalData");
  const categories = allLocalData === undefined ?  allData?.selected_categories :  allLocalData?.selected_categories
  const dispatch = useDispatch();
  const productsReturn = allLocalData === undefined ? allData?.productsToReturn?.map((item) => item.items):  allLocalData?.productsToReturn?.map((item) => item.items);
 
  useEffect(() => {
    if(allLocalData === undefined){
      dispatch(getAllData());
    }
    setInterval(()=>{
      dispatch(getAllLocalData())
    },120000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(()=>{
      setInterval(()=>{
        dispatch(getAllData());
      },100000)
  },[allData])
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
