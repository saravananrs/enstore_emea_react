import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI
import { Divider, Box } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getAllLocalData } from "../../../redux/actions/EnstoreActions";

// Hooks
import { useMuiStyles } from "../Styles/useMuiStyle.hook";

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
  <MuiAccordionSummary sx={{ padding: "0 !important" }} {...props} />
))(({}) => ({
  border: "none",
  "& .css-1betqn-MuiAccordionSummary-content": {
    margin: "0 !important",
  },
}));
export default function ViewAllCategory() {
  const classes = useMuiStyles();
  const [expanded, setExpanded] = useState(false);
  const { allLocalData } = useSelector((state) => state.store);
  const categories = allLocalData?.selected_categories;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllLocalData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Box className={classes.viewAllCategory}>
      <ul className={classes.catList}>
        <li className={classes.catListLi}>Featured Products</li>
        <Divider sx={{ margin: "10px 0px" }} />
        <Accordion expanded={expanded}>
          <AccordionSummary
            onClick={()=> setExpanded(!expanded)}
            expandIcon={
              expanded ? (
                <RemoveIcon sx={{ fontSize: "0.9rem", color: "#6e6e73" }} />
              ) : (
                <AddIcon sx={{ fontSize: "0.9rem", color: "#6e6e73" }} />
              )
            }
          >
            <li className={classes.catListLi}>Popular Products</li>
          </AccordionSummary>
          <Box>
            <ul>
              <li className={classes.accListItems}>For homeowners</li>
              <li className={classes.accListItems}>For Installers</li>
            </ul>
          </Box>
        </Accordion>

        <Divider sx={{ margin: "10px 0px" }} />
        {categories?.map((cat, index) => {
          return (
            <>
              <li
                className={classes.catListLi}
                onClick={() =>
                  navigate("/viewall", {
                    state: { category: cat, item: index },
                  })
                }
              >
                {cat.name}
              </li>
              <Divider sx={{ margin: "10px 0px" }} />
            </>
          );
        })}
      </ul>
    </Box>
  );
}
