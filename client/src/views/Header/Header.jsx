import React from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../Assets/Header/spritemap.svg";
import search from "../../Assets/Header/spritemap.svg";
import HeaderDropDown from "./HeaderDropDown";
import HeaderCart from "./HeaderCart";

const pages = [
  "Homeowners",
  "Business Owners",
  "Installers",
  "store",
  "support",
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <header className="App-header">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "53px",
          position: "fixed",
          top: "0",
          maxWidth:"100% !important",
          background: "black",
          zIndex: "999",
        }}
      >
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "white",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", color: "white" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
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
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#dcdcd6",
                  display: "block",
                  fontSize: "0.8rem !important",
                  lineHeight: "1.14rem",
                  margin: "0px 24px 0px 1px",
                  textTransform: "capitalize",
                }}
              >
                {page}
              </Button>
            ))}
            <HeaderDropDown />
            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                margin: "0px 40px",
                color: "#F0F0F0",
              }}
            >
              <HeaderCart />
              <a href="#" className="navicon">
                <svg class="fill-current svg svg-small" role="presentation">
                  <use xlinkHref={`${search}?v=1.20#search`}></use>
                </svg>
              </a>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </header>
  );
};

export default Header;
