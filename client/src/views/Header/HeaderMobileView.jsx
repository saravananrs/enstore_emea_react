import React, { useState } from "react";

// Components
import HeaderCart from "./HeaderCart";
import HeaderDropDown from "./HeaderDropDown";
import HeaderSearch from "./HeaderSearch";

// MUI
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
import CloseIcon from "@mui/icons-material/Close";

// Hooks
import { useStyledComponent } from "../Contents/Styles/useStyles.hook";

export default function HeaderMobileView(props) {
  const pages = ["Homeowner", "Entrepreneur", "Installers", "Store", "Support"];
  const classes = useStyledComponent();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [closeVisible, setCloseVisible] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setCloseVisible(!closeVisible);
  };

  const drawer = (
    <>
      <Box>
        <HeaderSearch
          setMobileOpen={setMobileOpen}
          mobileOpen={mobileOpen}
          setCloseVisible={setCloseVisible}
          closeVisible={closeVisible}
        />
      </Box>
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
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Grid className={classes.mobileContainer}>
      <Box
        sx={{ display: { xs: "flex", md: "none" } }}
        className={classes.imgContain}
      >
        <a href="/">
          <img
            src="https://store-d9.enphase.com/themes/custom/smalcode/dist/images/logo-white.svg"
            alt="logo"
            className={classes.headerMobLogo}
          />
        </a>
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
          {closeVisible ? <CloseIcon /> : <MenuIcon />}
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
                width: { xs: 240, sm: 500 },
                background: "#000",
                color: "#dcdcd6 !important",
                fontFamily: "enphase-visuelt-regular,sans-serif !important",
                fontSize: "16px !important",
                top: "53px",
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
