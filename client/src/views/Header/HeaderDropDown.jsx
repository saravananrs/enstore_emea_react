import React from "react";

// MUI
import { Box, Button, Divider, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

// Hooks
import { useStyledComponent } from "../Contents/Styles/useStyles.hook";

export default function HeaderDropDown() {
  const classes = useStyledComponent();
  const [enphaseMenu, setEnphaseMenu] = React.useState(null);
  const open = Boolean(enphaseMenu);
  const handleClick = (event) => {
    setEnphaseMenu(event.currentTarget);
  };
  const handleClose = () => {
    setEnphaseMenu(null);
  };
  return (
    <Box className={classes.dropDownContainer}>
      <Button
        className={classes.dropDownButton}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Get Enphase
        <KeyboardArrowDownOutlinedIcon className={classes.dropDownArrow} />
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
              left: { xs: "19px", md: "182" },
              width: { xs: "100%", md: "25%" },
              borderRadius: "8px !important",
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
