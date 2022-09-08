import { Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import CardModel from "./card/CardModel";
import Carousel from "react-elastic-carousel";

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
export default function Accessories() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const classes = useStyles();
  const cardContent = [
    {
      id: 1,
      url: "https://store-d9.enphase.com/sites/default/files/2022-02/brk-100a-2p-240v_2x_6.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: "IQ Combiner Box ",
      price: 24.3,
    },
    {
      id: 2,
      url: "https://store-d9.enphase.com/sites/default/files/2022-01/Accessories-copy.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: "IQ Combiner Box Circuit Breaker",
      price: 14,
    },
    {
      id: 3,
      url: "https://store-d9.enphase.com/sites/default/files/2021-12/Q-LCF-064-1P-hero%402x.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: " Radius Power Line Filter (1-Phase)",
      price: 411,
    },
    {
      id: 4,
      url: "https://store-d9.enphase.com/sites/default/files/2021-12/ET_DISC-05%402x.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: "Engage Disconnect Tool (Pack of 5)",
      price: 29,
    },
  ];
  return (
    <Grid container className={classes.storageContainer}>
      <Box className={classes.storageHeader}>
        <Typography variant="h3" className={classes.headTitle}>
          Accessories
        </Typography>
      </Box>
      <Grid container className={classes.cardContainer}>
        <Carousel breakPoints={breakPoints}>
          {cardContent.map((items) => {
            return (
              <>
                <CardModel items={items} />
              </>
            );
          })}
        </Carousel>
      </Grid>
    </Grid>
  );
}
