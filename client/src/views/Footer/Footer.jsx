import React from "react";

// Components
import FooterMobile from "./FooterMobile";

// MUI
import { Grid, Box } from "@mui/material";

// Assets - Enphase
import enphase from "../../Assets/Header/spritemap.svg";

// Hooks
import { useMuiStyles } from "../Contents/Styles/useMuiStyle.hook";

const Footer = () => {
  const classes = useMuiStyles();
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
              <span className="headings">Homeowners</span>
              <Box className={classes.listItems}>
                <ul>
                  {houseOwners.map((items) => {
                    return <li className="lists">{items}</li>;
                  })}
                </ul>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.headings}>
              <span className="headings"> Business owners</span>
              <Box className={classes.listItems}>
                <ul>
                  {businessOwner.map((items) => {
                    return <li className="lists">{items}</li>;
                  })}
                </ul>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.headings}>
              <span className="headings"> Installers</span>
              <Box className={classes.listItems}>
                <ul>
                  {installers.map((items) => {
                    return <li className="lists">{items}</li>;
                  })}
                </ul>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.headings}>
              <span className="headings">Support</span>
              <Box className={classes.listItems}>
                <ul>
                  {support.map((items) => {
                    return <li className="lists">{items}</li>;
                  })}
                </ul>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.headings}>
              <span className="headings"> Company</span>
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
