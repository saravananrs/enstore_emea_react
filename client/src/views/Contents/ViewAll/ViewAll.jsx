import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Divider, Box, Typography, Grid } from "@mui/material";
import ViewAllCard from "./ViewAllCard";
import cart from "../../../Assets/Header/spritemap.svg";
import { useEffect } from "react";
import ViewAllCategory from "./ViewAllCategory";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllData,
  getAllLocalData,
} from "../../../redux/actions/EnstoreActions";
import ViewAllMobile from "./ViewAllMobile";
import { useMuiStyles } from "../Styles/useMuiStyle.hook";
export default function ViewAll() {
  const { state } = useLocation();
  const { item, category, searchBox, name } = state;
  const { allData, allLocalData } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const productsReturn =
    allLocalData === undefined
      ? allData?.productsToReturn?.map((item) => item.items)
      : allLocalData?.productsToReturn?.map((item) => item.items);
  useEffect(() => {
    if (allLocalData === undefined) {
      dispatch(getAllData());
    }
    dispatch(getAllLocalData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const classes = useMuiStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Box className={classes.viewAllHeader}>
        <Typography variant="body1" className={classes.viewAllHeading}>
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            Enphase Store
          </Link>
        </Typography>
        <Typography variant="body2" className={classes.viewAllSideText}>
          <span className={classes.viewAllBagIcon}>
            <svg class="fill-current svg svg-small" role="presentation">
              <use xlinkHref={`${cart}?v=1.22#store`}></use>
            </svg>
          </span>{" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            Explore Products{" "}
          </Link>
        </Typography>
      </Box>
      <Divider className={classes.viewAllDivider} />
      <Grid className={classes.viewallContent}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className={classes.viewAllCardContainer}
        >
          <Grid
            item
            sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
            md={2.5}
          >
            <ViewAllCategory />
          </Grid>
          <Grid item xs={12} md={9.5}>
            {name !== undefined ? (
              <ViewAllMobile name={name} />
            ) : (
              <ViewAllMobile category={category} />
            )}
            <Typography
              sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
              variant="h4"
              className={classes.viewAllItemHeader}
            >
              {name !== undefined ? (
                <span>Search results for: {name}</span>
              ) : (
                category.name
              )}
            </Typography>
            {searchBox !== undefined ? (
              <ViewAllCard searchBox={searchBox} />
            ) : (
              productsReturn?.map((product, proIndex) => {
                return item === proIndex && <ViewAllCard product={product} />;
              })
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
