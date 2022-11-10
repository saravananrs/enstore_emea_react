import React, { useState } from "react";

// MUI
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Divider, Box, Grid } from "@mui/material";

// Assets - Enphase
import enphase from "../../Assets/Header/spritemap.svg";

// Hooks
import { useMuiStyles } from "../Contents/Styles/useMuiStyle.hook";

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
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  border: "none",
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
}));


export default function FooterMobile() {
  const classes = useMuiStyles();
  const [expanded, setExpanded] = useState(false);
  const [expandedBusiness, setExpandedBusiness] = useState(false);
  const [expandedTech, setExpandedTech] = useState(false);
  const [expandedCompat, setExpandedCompat] = useState(false);
  const [expandedBox, setExpandedBox] = useState(false);
  const houseOwners = [
    "Enphase Energy System",
    "Enphase App",
    "IQ Microinverters",
    "IQ Batteries",
    "EV chargers",
    "Find an installer",
    "Design my system",
    "Energy 101",
    "Energy stories",
    "Installer network",
    "Upgrade my system",
    "Enlighten login",
    "Support",
  ];
  const businessOwner = [
    "Solar for business",
    "Get a quote",
    "Case studies",
    "Support",
  ];

  const installers = [
    "Systems",
    "Microinverters",
    "Storage",
    "Communication",
    "AC Modules",
    "Accessories",
    "Documentation",
    "Apps",
    "Grid Services",
    "Platform",
    "Resources",
    "Solutions",
    "O&M services",
    "How to buy",
    "Enphase API",
    "Support",
  ];
  const support = [
    "System owners",
    "Solar installers",
    "Enphase Community",
    "Training and events",
    "Warranty and labor",
    "Contact support",
  ];
  const company = [
    "About us",
    "ESG",
    "Newsroom",
    "Patents",
    "Leadership",
    "Investors",
    "Careers",
    "Blog",
    "Contact us",
  ];
  return (
    <React.Fragment>
      <Box
        className={classes.accContainer}
        sx={{ display: { xs: "block", sm: "none", md: "none" } }}
      >
        <Grid className={classes.logo}>
          <a href="#">
            <svg class="fill-current svg svg-medium" role="presentation">
              <use xlinkHref={`${enphase}?v=1.20#logo-small`}></use>
            </svg>
          </a>
        </Grid>
        <Accordion expanded={expandedBusiness} onClick={()=> setExpandedBusiness(!expandedBusiness)}>
          <AccordionSummary>
            <Grid className={classes.headings}>
              <span className="headings"> Homeowners</span>
            </Grid>
          </AccordionSummary>
          <Box className={classes.listItems}>
            <ul className={classes.itemLists}>
              {houseOwners.map((items) => {
                return <li className="lists">{items}</li>;
              })}
            </ul>
          </Box>
          <AccordionDetails></AccordionDetails>
        </Accordion>
        <Divider sx={{ marginBottom: "25px" ,borderColor:"rgb(110 110 115)  !important"}} />
        <Accordion expanded={expanded} onClick={()=> setExpanded(!expanded)}>
          <AccordionSummary>
            <Grid className={classes.headings}>
              <span className="headings">Business owners</span>
            </Grid>
          </AccordionSummary>
          <Box className={classes.listItems}>
            <ul className={classes.itemLists}>
              {businessOwner.map((items) => {
                return <li className="lists">{items}</li>;
              })}
            </ul>
          </Box>
          <AccordionDetails></AccordionDetails>
        </Accordion>
        <Divider sx={{ marginBottom: "25px",borderColor:"rgb(110 110 115)  !important"}} />
        <Accordion expanded={expandedTech} onClick={()=> setExpandedTech(!expandedTech)}>
          <AccordionSummary>
            <Grid className={classes.headings}>
              <span className="headings">Installers</span>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Box className={classes.listItems}>
              <ul>
                {installers.map((items) => {
                  return <li className="lists">{items}</li>;
                })}
              </ul>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ marginBottom: "25px",borderColor:"rgb(110 110 115)  !important"} } />
        <Accordion expanded={expandedCompat} onClick={()=> setExpandedCompat(!expandedCompat)}>
          <AccordionSummary>
            <Grid className={classes.headings}>
              <span className="headings"> Support</span>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Box className={classes.listItems}>
              <ul>
                {support.map((items) => {
                  return <li className="lists">{items}</li>;
                })}
              </ul>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ marginBottom: "25px",borderColor:"rgb(110 110 115)  !important"}} />
        <Accordion expanded={expandedBox} onClick={()=> setExpandedBox(!expandedBox)}>
          <AccordionSummary>
            <Grid className={classes.headings}>
              <span className="headings">Company</span>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Box className={classes.listItems}>
              <ul>
                {company.map((items) => {
                  return <li className="lists">{items}</li>;
                })}
              </ul>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ marginBottom: "25px",borderColor:"rgb(110 110 115)  !important"}} />
      </Box>
    </React.Fragment>
  );
}
