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
export default function Communications() {
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
      url: "https://store-d9.enphase.com/sites/default/files/2021-12/CELLMODEM-M1%402x.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: "LTE-M Cellular Modem",
      price: null,
    },
    {
      id: 2,
      url: "https://store-d9.enphase.com/sites/default/files/2021-12/ENV-S-AM1-120-accessories%402x.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: "Gateway-S Metered",
      price: 517.5,
    },
    {
      id: 3,
      url: "https://store-d9.enphase.com/sites/default/files/2021-12/ENV-S-AB-120-A-hero%402x.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: "Gateway-S Standatd",
      price: 611,
    },
    {
      id: 4,
      url: "https://store-d9.enphase.com/sites/default/files/2021-12/CT-200-SPLIT%402x_0.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: "Consumption Monitoring",
      price: 48,
    },
  ];
  return (
    <Grid container className={classes.storageContainer}>
      <Box className={classes.storageHeader}>
        <Typography variant="h3" className={classes.headTitle}>
          Communications
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
