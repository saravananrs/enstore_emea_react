import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import enphase from "../../Assets/Header/spritemap.svg";
import { makeStyles } from "@material-ui/styles";
import { Divider, Box, Grid } from "@mui/material";
const useStyles = makeStyles(() => ({
  headings: {
    color: "#6e6e73",
  },
  logo: {
    marginLeft: "20px",
    paddingBottom: "10px",
  },
  accContainer: {
    float: "none",
    width: "100%",
    margin: "0 auto",
    maxWidth: "90%",
  },
  itemLists: {
    marginLeft: "10px !important",
  },
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
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  border: "none",
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  //   padding: theme.spacing(2),
  //   borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
export default function FooterMobile() {
  const classes = useStyles();
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
    "Enphase Energiesystem",
    "Enphase-App",
    "IQ-Mikrowechselrichter",
    "IQ-Batterien",
    "Ladegeräte für Elektrofahrzeuge",
    "Finden Sie einen Installateur",
    "Entwerfen Sie mein System",
    "Energie 101",
    "Energiegeschichten",
    "Installateur-Netzwerk",
    "Aktualisieren Sie mein System",
    "Login aufklären",
    "Die Unterstützung",
  ];
  const businessOwner = [
    "Solar für Unternehmen",
    "Ein Angebot bekommen",
    "Fallstudien",
    "Die Unterstützung",
  ];

  const installers = [
    "Systeme",
    "Mikrowechselrichter",
    "Lagerung",
    "Kommunikation",
    "AC-Module",
    "Zubehör",
    "Dokumentation",
    "Anwendungen",
    "Grid-Dienste",
    "Plattform",
    "Ressourcen",
    "Lösungen",
    "O&M-Dienstleistungen",
    "Wie kauft man",
    "Enphase-API",
    "Die Unterstützung",
  ];
  const support = [
    "Systembesitzer",
    "Solarinstallateure",
    "Enphase-Community",
    "Schulungen und Veranstaltungen",
    "Garantie und Arbeit",
    "Kontaktieren Sie Support",
  ];
  const company = [
    "Über uns",
    "ESG",
    "Nachrichtenredaktion",
    "Patente",
    "Führung",
    "Investoren",
    "Karriere",
    "Bloggen",
    "Kontaktiere uns",
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
