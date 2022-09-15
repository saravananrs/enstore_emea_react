import { Grid, Box } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import enphase from "../../Assets/Header/spritemap.svg";
import FooterMobile from "./FooterMobile";

const useStyles = makeStyles(() => ({
  logo: {
    paddingLeft: "57px !important",
    marginTop: "-17px !important",
  },
  listItems: {
    marginTop: "30px",
    cursor: "pointer",
  },
  app_footer: {
    position: " relative",
    borderTop: "0.8px solid #dcdcd6",
    padding: "87px 0px 30px 0px",
    "@media (max-width: 500px)": {
      paddingTop: "20px",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
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
    <footer className={classes.app_footer}>
      <FooterMobile />
      <Grid
        container
        rowSpacing={1}
        sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className={classes.container}
      >
        <Grid item xs={1.3} className={classes.logo}>
          <a href="#">
            <svg class="fill-current svg svg-medium" role="presentation">
              <use xlinkHref={`${enphase}?v=1.20#logo-small`}></use>
            </svg>
          </a>
        </Grid>
        <Grid item xs={10.7}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={2}>
              <span className="headings">Hausbesitzer</span>
              <Box className={classes.listItems}>
                <ul>
                  {houseOwners.map((items) => {
                    return <li className="lists">{items}</li>;
                  })}
                </ul>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.headings}>
              <span className="headings"> Unternehmer</span>
              <Box className={classes.listItems}>
                <ul>
                  {businessOwner.map((items) => {
                    return <li className="lists">{items}</li>;
                  })}
                </ul>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.headings}>
              <span className="headings"> Installateure</span>
              <Box className={classes.listItems}>
                <ul>
                  {installers.map((items) => {
                    return <li className="lists">{items}</li>;
                  })}
                </ul>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.headings}>
              <span className="headings">Unterstützung</span>
              <Box className={classes.listItems}>
                <ul>
                  {support.map((items) => {
                    return <li className="lists">{items}</li>;
                  })}
                </ul>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.headings}>
              <span className="headings"> Gesellschaft</span>
              <Box className={classes.listItems}>
                <ul>
                  {company.map((items) => {
                    return <li className="lists">{items}</li>;
                  })}
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
