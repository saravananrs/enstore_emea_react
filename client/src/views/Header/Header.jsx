import React from "react";

// Components
import HeaderDropDown from "./HeaderDropDown";
import HeaderCart from "./HeaderCart";
import HeaderMobileView from "./HeaderMobileView";
import HeaderSearch from "./HeaderSearch";

// MUI
import { Box, Toolbar, Container, Button } from "@mui/material";

// Assets - Enphase
import logo from "../../Assets/Header/spritemap.svg";

// Hooks
import { useStyledComponent } from "../Contents/Styles/useStyles.hook";

const pages = ["Homeowner", "Entrepreneur", "Installers", "Store", "Support"];

const Header = () => {
  const classes = useStyledComponent();
  
  return (
    <header className="App-header">
      <Container maxWidth="xl" className={classes.headerContainer}>
        <Toolbar disableGutters>
          <HeaderMobileView />
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              },
            }}
          >
            <div style={{ color: "white", marginRight: "48px" }}>
              <a href="/">
                <svg class="fill-current svg svg-small" role="presentation">
                  <use xlinkHref={`${logo}?v=1.20#ep-logo-small`}></use>
                </svg>
              </a>
            </div>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "#dcdcd6",
                  display: "block",
                  fontSize: "0.8rem !important",
                  fontFamily: "enphase-visuelt-regular,sans-serif !important",
                  lineHeight: "1.14rem",
                  margin: "0px 24px 0px 1px",
                  textTransform: "capitalize",
                }}
              >
                {page}
              </Button>
            ))}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <HeaderDropDown />
            </Box>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
                margin: "0px 40px",
                color: "#F0F0F0",
                alignItems: "center",
              }}
            >
              <HeaderCart />
              <HeaderSearch />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </header>
  );
};

export default Header;
