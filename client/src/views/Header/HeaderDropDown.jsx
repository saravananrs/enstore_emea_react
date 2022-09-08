import { Box, Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import { makeStyles } from '@material-ui/styles';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const useStyles = makeStyles((theme) => ({
  container:{
    padding:"0px 10px",
    borderRadius:"50px",
    transition: "background .2s ease-out",
    minWidth: "unset",
    backgroundColor:"#F37321",
    height:"31px"
  },
  button:{
    color:"black",
    padding:"0",
    height:"31px",
    textTransform:"capitalize !important",
    fontSize:"0.7rem !important",
    fontWeight:"600 !important"
  },
  Arrow:{
    // position:"absolute"
    fontSize:"19px"
  }

}))

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
      <Button className={classes.button}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Get Enphase <KeyboardArrowDownOutlinedIcon className={classes.Arrow}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={enphaseMenu}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Home Energy System</MenuItem>
        <MenuItem onClick={handleClose}>Commercial Energy System</MenuItem>
        <MenuItem onClick={handleClose}>Ev Chargers</MenuItem>
      </Menu>
    </Box>
  );
}
