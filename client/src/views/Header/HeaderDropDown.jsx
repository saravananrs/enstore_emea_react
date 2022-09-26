import { Box, Button, Divider, Menu, MenuItem } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0px 10px",
    borderRadius: "50px",
    transition: "background .2s ease-out",
    minWidth: "unset",
    backgroundColor: "#F37321",
    height: "31px",
  },
  button: {
    color: "black",
    padding: "0",
    height: "31px",
    textTransform: "capitalize !important",
    fontSize: "0.8rem !important",
    // fontWeight:"600 !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  Arrow: {
    // position:"absolute"
    fontSize: "1.2rem !important",
    marginTop: "-3px",
  },
}));

export default function HeaderDropDown() {
  const classes = useStyles();
  const [enphaseMenu, setEnphaseMenu] = React.useState(null);
  const open = Boolean(enphaseMenu);
  const handleClick = (event) => {
    setEnphaseMenu(event.currentTarget);
  };
  const handleClose = () => {
    setEnphaseMenu(null);
  };
  return (
    <Box className={classes.container}>
      <Button
        className={classes.button}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Get Enphase <KeyboardArrowDownOutlinedIcon className={classes.Arrow} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={enphaseMenu}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
            {
              top: { xs: "53px !important" },
              left: { xs: "19px", md: "182px" },
              width: { xs: "100%", md: "20%" },
            },
        }}
      >
        <MenuItem onClick={handleClose}>Home Energy System</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Commercial Energy System</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Ev Chargers</MenuItem>
      </Menu>
    </Box>
  );
}
