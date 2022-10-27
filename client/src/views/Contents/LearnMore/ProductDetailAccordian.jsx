import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Divider, Box, Grid } from "@mui/material";
import { useMuiStyles } from "../Styles/useMuiStyle.hook";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
  "&:before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{
          fontSize: "0.9rem",
          color: "black",
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
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
export default function ProductDetailAccordian(props) {
  const product = props.productData;
  let custome_attribute = {};
  product.custom_attributes.map((attributes) => {
    custome_attribute[attributes.attribute_code] = attributes.value;
  });
  const classes = useMuiStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expandedTech, setExpandedTech] = React.useState(false);
  const [expandedCompat, setExpandedCompat] = React.useState(false);
  const [expandedBox, setExpandedBox] = React.useState(false);
  //   const [condition, setCondition] = React.useState("");
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
  return (
    <React.Fragment>
      <Box className={classes.productDetailAccordianContainer}>
        <Accordion expanded={expanded} >
          <AccordionSummary onClick={handleDetailClick}>
            <Typography variant="h3" className={classes.accTitle}>
              Details
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid className={classes.accordianContent}>
              <Box className={classes.acclists}>
                <table className={classes.accTable}>
                  <tbody>
                    <tr>
                      <th className={classes.accTableHead}>
                        <Typography
                          variant="body2"
                          className={classes.accTableContent}
                        >
                          Product Name
                        </Typography>
                      </th>
                      <td>
                        <Typography
                          variant="body2"
                          className={classes.accTableContent}
                        >
                          IQ Load Controller
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <th className={classes.accTableHead}>
                        <Typography
                          variant="body2"
                          className={classes.accTableContent}
                        >
                          Product Name
                        </Typography>
                      </th>
                      <td>
                        <Typography
                          variant="body2"
                          className={classes.accTableContent}
                        >
                          IQ Load Controller
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <th className={classes.accTableHead}>
                        <Typography
                          variant="body2"
                          className={classes.accTableContent}
                        >
                          Product Name
                        </Typography>
                      </th>
                      <td>
                        <Typography
                          variant="body2"
                          className={classes.accTableContent}
                        >
                          IQ Load Controller
                        </Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <ul className={classes.productDetailacclistitems}>
                  <li className={classes.acclistTexts}>
                    Lighter weight than earlier M-Series Microinverters
                  </li>
                  <li className={classes.acclistTexts}>
                    Lighter weight than earlier M-Series Microinverters
                  </li>
                  <li className={classes.acclistTexts}>
                    Lighter weight than earlier M-Series Microinverters
                  </li>
                  <li className={classes.acclistTexts}>
                    Lighter weight than earlier M-Series Microinverters
                  </li>
                </ul>
              </Box>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ marginBottom: "25px" }} />
        <Accordion expanded={expandedTech} >
          <AccordionSummary onClick={handleTechClick}>
            <Typography variant="h3" className={classes.accTitle}>
              Technical Specifications
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid className={classes.accordianContent}>
              <Box className={classes.acclists}>
                <ul className={classes.productDetailacclistitems}>
                  <li className={classes.acclistTexts}>
                    Lighter weight than earlier M-Series Microinverters
                  </li>
                  <li className={classes.acclistTexts}>
                    Lighter weight than earlier M-Series Microinverters
                  </li>
                  <li className={classes.acclistTexts}>
                    Lighter weight than earlier M-Series Microinverters
                  </li>
                  <li className={classes.acclistTexts}>
                    Lighter weight than earlier M-Series Microinverters
                  </li>
                </ul>
              </Box>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ marginBottom: "25px" }} />
        <Accordion expanded={expandedCompat} onClick={handleCompatClick}>
          <AccordionSummary onClick={handleCompatClick}>
            <Typography variant="h3" className={classes.accTitle}>
              Compatibility
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid className={classes.accordianContent}>
              <Box className={classes.acclists}>
                <ul className={classes.productDetailacclistitems}>
                  <li className={classes.acclistTexts}>
                    Lighter weight than earlier M-Series Microinverters
                  </li>
                  <li className={classes.acclistTexts}>
                    Lighter weight than earlier M-Series Microinverters
                  </li>
                  <li className={classes.acclistTexts}>
                    Lighter weight than earlier M-Series Microinverters
                  </li>
                  <li className={classes.acclistTexts}>
                    Lighter weight than earlier M-Series Microinverters
                  </li>
                </ul>
              </Box>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ marginBottom: "25px" }} />
        <Accordion expanded={expandedBox} >
          <AccordionSummary onClick={handleBoxClick}>
            <Typography variant="h3" className={classes.accTitle}>
              What's in the Box
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid className={classes.accordianContent}>
              <Box className={classes.acclists}>
                <ul className={classes.productDetailacclistitems}>
                  <li className={classes.acclistTexts}>
                    Lighter weight than earlier M-Series Microinverters
                  </li>
                  <li className={classes.acclistTexts}>
                    Lighter weight than earlier M-Series Microinverters
                  </li>
                  <li className={classes.acclistTexts}>
                    Lighter weight than earlier M-Series Microinverters
                  </li>
                  <li className={classes.acclistTexts}>
                    Lighter weight than earlier M-Series Microinverters
                  </li>
                </ul>
              </Box>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ marginBottom: "25px" }} />
      </Box>
    </React.Fragment>
  );
}
