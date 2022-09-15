import React,{useState} from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderCart from "./HeaderCart";
import CloseIcon from '@mui/icons-material/Close';
import HeaderDropDown from "./HeaderDropDown";
const useStyles = makeStyles(() => ({
  rightSide: {
    justifyContent: "end !important",
    alignItems: "center !important",
    "@media screen and (min-width: 300px) and (max-width: 324px)":{
        marginLeft:"0 !important",
      },
      "@media screen and (min-width: 325px) and (max-width: 475px)":{
        marginLeft:"80px !important",
      },
      "@media screen and (min-width: 476px) and (max-width: 800px)":{
        marginLeft:"390px !important",
      },
  },
  mobileContainer: {
    display: "flex !important",
    justifyContent: "space-between !important",
    alignItems: "center",
  },
}));
const drawerWidth = 240;
export default function HeaderMobileView(props) {
  const pages = [
    "Hausbesitzer",
    "Unternehmer",
    "Installateure",
    "Laden",
    "Unterstützung",
  ];
  const classes = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [closeVisible, setCloseVisible] =useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setCloseVisible(!closeVisible)
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
      }}
    >
      <List>
        {pages.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText  primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Grid className={classes.mobileContainer}>
      <Box
        sx={{ display: { xs: "flex", md: "none" } }}
        className={classes.imgContain}
      >
     <a href='/'><img
          src="https://store-d9.enphase.com/themes/custom/smalcode/dist/images/logo-white.svg"
          alt="logo"
          height="20px"
          width="110px"
        /></a>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", md: "none" },
        }}
        className={classes.rightSide}
      >
        <HeaderDropDown />
        <HeaderCart />
        <IconButton
          size="large"
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ color: "white" }}
        >
         {closeVisible ?<CloseIcon/>:<MenuIcon /> } 
        </IconButton>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: {xs:240,sm:500},
                background: "#000",
                color: "#dcdcd6 !important",
                fontFamily: "enphase-visuelt-regular,sans-serif !important",
                fontSize: "16px !important",
                top:'53px'
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </Grid>
  );
}
