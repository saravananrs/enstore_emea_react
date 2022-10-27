import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import enphase from "../../Assets/Header/spritemap.svg";
import { Divider, Box, Grid } from "@mui/material";
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
  const handleBusinessClick = () => {
    setExpandedBusiness(!expandedBusiness);
  };
  const handleDetailClick = () => {
    setExpanded(!expanded);
  };
  const handleTechClick = () => {
    setExpandedTech(!expandedTech);
  };
  const handleCompatClick = () => {
    setExpandedCompat(!expandedCompat);
  };
  const handleBoxClick = () => {
    setExpandedBox(!expandedBox);
  };
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
        <Accordion expanded={expandedBusiness} onClick={handleBusinessClick}>
          <AccordionSummary>
            <Grid className={classes.headings}>
              <span className="headings"> Hausbesitzer</span>
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
        <Divider sx={{ marginBottom: "25px" }} />
        <Accordion expanded={expanded} onClick={handleDetailClick}>
          <AccordionSummary>
            <Grid className={classes.headings}>
              <span className="headings">Unternehmer</span>
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
        <Divider sx={{ marginBottom: "25px" }} />
        <Accordion expanded={expandedTech} onClick={handleTechClick}>
          <AccordionSummary>
            <Grid className={classes.headings}>
              <span className="headings">Installateure</span>
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
        <Divider sx={{ marginBottom: "25px" }} />
        <Accordion expanded={expandedCompat} onClick={handleCompatClick}>
          <AccordionSummary>
            <Grid className={classes.headings}>
              <span className="headings"> Unterstützung</span>
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
        <Divider sx={{ marginBottom: "25px" }} />
        <Accordion expanded={expandedBox} onClick={handleBoxClick}>
          <AccordionSummary>
            <Grid className={classes.headings}>
              <span className="headings">Gesellschaft</span>
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
        <Divider sx={{ marginBottom: "25px" }} />
      </Box>
    </React.Fragment>
  );
}
