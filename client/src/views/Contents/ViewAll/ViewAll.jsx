import React from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
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

const useStyles = makeStyles(() => ({
  viewAllHeader: {
    display: "flex",
    justifyContent: "space-between",
    float: "none",
    maxWidth: "70%",
    "@media (max-width:500px)": {
      maxWidth: "88%",
    },
    "@media screen and (min-width: 501px) and (max-width: 800px)": {
      maxWidth: "88%",
    },
    margin: "0 auto",
    alignItems: "center",
  },
  viewAllBagIcon: {
    fontSize: "0.875rem !important",
    position: "absolute",
    left: "-18%",
    "& .svg-small": {
      width: "16px !important",
      height: "16px !important",
      color: "#6e6e73 !important",
    },
  },
  viewAllHeading: {
    fontSize: "1.25rem !important",
    fontFamily: "enphase-visuelt-medium !important",
    "@media (max-width:500px)": {
      fontSize: "0.875rem !important",
      fontFamily: "enphase-visuelt-regular,sans-serif !important",
    },
  },
  viewAllSideText: {
    position: "relative",
    color: "#6e6e73 !important",
    fontSize: "0.875rem !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  viewAllDivider: {
    margin: "0.7em 12.5em !important",
    "@media (max-width:500px)": {
      margin: "10px 10px !important",
    },
    "@media screen and (min-width: 501px) and (max-width: 800px)": {
      margin: "10px 40px !important",
    },
  },
  viewallContent: {
    padding: "20px 0px ",
    float: "none",
    width: "100%",
    margin: "0 auto",
    maxWidth: "97%",
  },
  viewAllItemHeader: {
    fontSize: "2rem !important",
    marginBottom: "20px !important",
    fontWeight: "normal !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  viewAllItemHeaderSub: {
    marginTop: "10px !important",
    fontSize: "2.625rem !important",
    fontWeight: "normal !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  viewAllItemHeaderpara: {
    fontSize: "1.25rem !important",
    fontWeight: "normal !important",
    lineHeight: "1.6em !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  viewAllCardContainer: {
    padding: "30px 0px",
  },
}));
export default function ViewAll() {
  const { state } = useLocation();
  const { item, category, searchBox, name } = state;
  console.log(name, "searchBoxsearchBox");
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
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Box className={classes.viewAllHeader}>
        <Typography variant="body1" className={classes.viewAllHeading}>
          Enphase Store
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
            {searchBox !== undefined
              ? searchBox?.map((product, proIndex) => {
                  return (
                    <ViewAllCard product={product} searchBox={searchBox} />
                  );
                })
              : productsReturn?.map((product, proIndex) => {
                  return item === proIndex && <ViewAllCard product={product} />;
                })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
