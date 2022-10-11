import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Divider, Box, Typography, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../../redux/actions/EnstoreActions";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const useStyles = makeStyles(() => ({
  viewAllCategory: {
    padding: "0px 20px ",
  },
  catList: {
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "16px !important",
  },
  catListLi: {
    padding: "8px 0px",
    display: "flex",
    cursor:"pointer",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accListItems:{
    padding:"12px 6px 12px 6px"
  }
}));

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({}) => ({
  backgroundColor: "transparent",
  "&:before": {
    display: "none",
  },
  "& .css-1mitsnd-MuiButtonBase-root-MuiAccordionSummary-root": {
    flexDirection: "row",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
  sx={{ padding:"0 !important"}}
    {...props}
  />
))(({}) => ({
  border: "none",
  "& .css-1betqn-MuiAccordionSummary-content":{
    margin:"0 !important"
  }
}));
export default function ViewAllCategory() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const { allData } = useSelector((state) => state.store);
  const categories = allData?.selected_categories;
  const dispatch = useDispatch();
  const navigate =  useNavigate()
  const productsReturn = allData?.productsToReturn?.map((item) => item.items);
  useEffect(() => {
    dispatch(getAllData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleDetailClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box className={classes.viewAllCategory}>
      <ul className={classes.catList}>
        <li className={classes.catListLi}>Featured Products</li>
        <Divider sx={{ margin: "10px 0px" }} />
        <Accordion expanded={expanded} onClick={handleDetailClick}>
          <AccordionSummary 
           expandIcon={expanded ? <RemoveIcon sx={{ fontSize: "0.9rem", color: "#6e6e73",}}/> : <AddIcon sx={{ fontSize: "0.9rem", color: "#6e6e73",}} />}
          >
            <li className={classes.catListLi}>Popular Products</li>
          </AccordionSummary>
          <Box >
            <ul>
              <li className={classes.accListItems}>For homeowners</li>
              <li  className={classes.accListItems}>For Installers</li>
            </ul>
          </Box>
        </Accordion>

        <Divider sx={{ margin: "10px 0px" }} />
        {categories?.map((cat ,index) => {
          return (
            <>
              <li className={classes.catListLi}
                 onClick={() =>
                    navigate("/viewall", {
                      state: { category: cat , item:index },
                    })
                  }
              >{cat.name}</li>
              <Divider sx={{ margin: "10px 0px" }} />
            </>
          );
        })}
      </ul>
    </Box>
  );
}
