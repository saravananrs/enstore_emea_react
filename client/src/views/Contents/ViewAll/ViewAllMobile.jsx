import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { makeStyles } from "@material-ui/styles";
import { Divider, Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllData } from "../../../redux/actions/EnstoreActions";
const useStyles = makeStyles(() => ({
  viewAllItemHeader: {
    fontSize: "1.375rem !important",
    fontWeight: "normal !important",
    listStyle:"none",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  },
  viewAllItemHeaderli:{
    marginBottom:"20px",
    fontSize: "16px !important",
    fontWeight: "normal !important",
    listStyle:"none",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
  }
}));
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
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
      expandIcon={
        <ArrowForwardIosSharpIcon
          sx={{
            fontSize: "0.9rem",
            color: "#6e6e73",
          }}
        />
      }
      {...props}
    />
  ))(({ theme }) => ({
    // flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    border: "none",
  }));

export default function ViewAllMobile(props) {
    const{category,name} = props;
    console.log(name,"categorycategory");
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const { allData } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = allData?.selected_categories;
  useEffect(() => {
    dispatch(getAllData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleDetailClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box sx={{ display: { xs: "block", sm: "block", md: "none" },marginBottom:"10px" }}>
          <Accordion expanded={expanded} onClick={handleDetailClick}>
          <AccordionSummary 
          >
            <li className={classes.viewAllItemHeader}>
            {name !== undefined ? (
                <span>Search results for: {name}</span>
              ) : (
                category.name
              )} </li>
          </AccordionSummary>
          <Box >
            <ul  style={{width:"100%",margin:"0 auto",float:"none",maxWidth:"90%",marginTop:"10px"}}>
        {categories?.map((cat, index) => {
          return (
            <>
              <li
                className={classes.viewAllItemHeaderli}
                onClick={() =>
                  navigate("/viewall", {
                    state: { category: cat, item: index },
                  })
                }
              >
                {cat.name}
              </li>
              {/* <Divider sx={{ margin: "10px 0px" }} /> */}
            </>
          );
        })}
            </ul>
          </Box>
        </Accordion>
    </Box>
  );
}
