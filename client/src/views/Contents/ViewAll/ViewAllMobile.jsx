import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { Box } from "@mui/material";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../../redux/actions/EnstoreActions";

// Hooks
import { useMuiStyles } from "../Styles/useMuiStyle.hook";

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
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  border: "none",
}));

export default function ViewAllMobile(props) {
  const { category, name } = props;
  const classes = useMuiStyles();
  const [expanded, setExpanded] = useState(false);
  const { allData } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = allData?.selected_categories;
  useEffect(() => {
    dispatch(getAllData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        display: { xs: "block", sm: "block", md: "none" },
        marginBottom: "10px",
      }}
    >
      <Accordion expanded={expanded} onClick={()=> setExpanded(!expanded)}>
        <AccordionSummary>
          <li className={classes.viewAllItemHeaderMobile}>
            {name !== undefined ? (
              <span>Search results for: {name}</span>
            ) : (
              category.name
            )}{" "}
          </li>
        </AccordionSummary>
        <Box>
          <ul
            style={{
              width: "100%",
              margin: "0 auto",
              float: "none",
              maxWidth: "90%",
              marginTop: "10px",
            }}
          >
            {categories?.map((cat, index) => {
              return (
                <>
                  <li
                    className={classes.viewAllItemHeaderMobileli}
                    onClick={() =>
                      navigate("/viewall", {
                        state: { category: cat, item: index },
                      })
                    }
                  >
                    {cat.name}
                  </li>
                </>
              );
            })}
          </ul>
        </Box>
      </Accordion>
    </Box>
  );
}
