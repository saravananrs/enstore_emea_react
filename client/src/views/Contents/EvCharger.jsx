import { Grid, Typography, Box, Card } from "@mui/material";
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
  card: {
    maxWidth: 300,
    padding: "10px 20px",
    height: "510px",
    marginLeft: "20px",
    //   width:"50%",
    borderRadius: "16px !important",
    transition: "0.3s",
    cursor: "pointer",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 10px 50px -12.125px rgba(0,0,0,0.3)",
    },
  },
  headBody: {
    fontSize: "1.25rem !important",
    marginRight: "16% !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
}));
export default function EvCharger() {
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
      url: "https://store-d9.enphase.com/sites/default/files/2022-04/0918-00-003-HCS-40-Hardwired-1-2.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: "HCS-D40 Dual EV Charger",
      price: 622,
    },
    {
      id: 2,
      url: "https://store-d9.enphase.com/sites/default/files/2022-04/0908-00-000-HCS-D40-Hardwired-1.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: "AmazingE Fast 20 EV Charger ",
      price: 1484,
    },
    {
      id: 3,
      url: "https://store-d9.enphase.com/sites/default/files/2022-04/0400-00-000-0000-02-000-AmazingE-16-amp-NEMA-14-30-Plug-with-cable-wrap-1.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: "HCS-D40 Dual EV Charger",
      price: 350,
    },
    {
      id: 4,
      url: "https://store-d9.enphase.com/sites/default/files/2022-04/0000-01-000-SAE-J1772-Connector-Holster-Wall-Mount-1%201.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: "AmazingE Fast 20 EV Charger",
      price: 21,
    },
    {
      id: 4,
      url: "https://store-d9.enphase.com/sites/default/files/2022-04/0000-01-000-SAE-J1772-Connector-Holster-Wall-Mount-1%201.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: "AmazingE Fast 20 EV Charger",
      price: 21,
    },
    {
      id: 4,
      url: "https://store-d9.enphase.com/sites/default/files/2022-04/0000-01-000-SAE-J1772-Connector-Holster-Wall-Mount-1%201.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: "AmazingE Fast 20 EV Charger",
      price: 21,
    },
    {
      id: 4,
      url: "https://store-d9.enphase.com/sites/default/files/2022-04/0000-01-000-SAE-J1772-Connector-Holster-Wall-Mount-1%201.png",
      proCode: "SKU: WARR-EXT-ENCHARGE-5YR",
      title: "AmazingE Fast 20 EV Charger",
      price: 21,
    },
  ];
  return (
    <Grid container className={classes.storageContainer}>
      <Box className={classes.storageHeader}>
        <Typography variant="h3" className={classes.headTitle}>
          Ev Chargers
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
