import React from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Divider, Box, Typography, Grid } from "@mui/material";
import ViewAllCard from "./ViewAllCard";
import cart from "../../../Assets/Header/spritemap.svg";
import { useEffect } from "react";

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
    maxWidth: "80%",
  },
  viewAllItemHeader: {
    fontSize: "2rem !important",
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
  const { item, category } = state;
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
        <Typography variant="h4" className={classes.viewAllItemHeader}>
          {category.name}
        </Typography>
        {/* <Box>
          <Typography variant="h3" className={classes.viewAllItemHeaderSub}>
            Powerful technology at the heart of the Enphase system.
          </Typography>
          <Typography variant="body1" className={classes.viewAllItemHeaderpara}>
            Solar panels may be on top, but it's the inverter that does all the
            real work. Choosing an inverter technology is the most critical
            decision you'll make when going solar. Enphase Microinverters offer
            the most advanced inverter technology on the market, which means
            higher production, greater reliability, and unmatched intelligence.{" "}
          </Typography>
        </Box> */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
          className={classes.viewAllCardContainer}
        >
          {item.map((product) => {
            return <ViewAllCard product={product} />;
          })}
        </Grid>
      </Grid>
    </>
  );
}
