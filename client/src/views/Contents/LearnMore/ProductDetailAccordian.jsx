import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import { Divider, Box, Grid } from "@mui/material";
const useStyles = makeStyles(() => ({
    accordianContainer:{
        margin:"20px 0px",
    },
  accTitle: {
    fontSize: "1.6rem !important",
    lineHeight: "1.3rem !important",
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    paddingLeft: "30px !important",
    position: "relative",
    "@media (max-width: 800px)": {
    fontSize: "1.125rem !important",
    },
  },
  accordianContent:{
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "1.25rem !important",
    lineHeight:"1.6rem !important",
    padding:"0 32px",
    marginBottom:"17px"
  },
  acclists:{
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "1.25rem !important",
    lineHeight:"1.6rem !important",
  },
  acclistitems:{
    marginTop:"32px"
  },
  acclistTexts:{
    paddingBottom:"12px",
    listStyleType:"disc",
    marginLeft:"14px",
    textAlign:"left",
    lineHeight:"2.5rem !important",
    marginRight:"22px",
    color:"#000"
  },
  accTable:{
    borderCollapse: 'collapse',
    borderColor: '#6e6e73',
  },
  accTableHead:{
    padding: '6px 16px',
    fontWeight: '400',
  },
  accTableContent:{
    marginRight: '20px !important',
    marginTop: '30px !important',
    fontFamily: "enphase-visuelt-regular,sans-serif !important",
    fontSize: "1.25rem !important",
    lineHeight:"1.6rem !important",
  },
}));

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
  // console.log(product,"product");
  let custome_attribute = {}
  product.custom_attributes.map((attributes) => {
    custome_attribute[attributes.attribute_code] = attributes.value
  });
  
// function getText(html){
//   let divContainer= document.createElement("div");
//   divContainer.innerHTML = html;
//   return divContainer.textContent || divContainer.innerText || "";
// }
// let detailsData = custome_attribute.description

  // console.log(getText(detailsData),"custome_attribute");
  const classes = useStyles();
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
      <Box className={classes.accordianContainer}>
      <Accordion expanded={expanded} onClick={handleDetailClick}>
        <AccordionSummary>
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
                    <th className={classes.accTableHead}><Typography variant="body2" className={classes.accTableContent}>Product Name</Typography></th>
                    <td ><Typography variant="body2"className={classes.accTableContent}>IQ Load Controller</Typography></td>
                  </tr>
                  <tr>
                    <th className={classes.accTableHead}><Typography variant="body2" className={classes.accTableContent}>Product Name</Typography></th>
                    <td ><Typography variant="body2"className={classes.accTableContent}>IQ Load Controller</Typography></td>
                  </tr>
                  <tr>
                    <th className={classes.accTableHead}><Typography variant="body2" className={classes.accTableContent}>Product Name</Typography></th>
                    <td ><Typography variant="body2"className={classes.accTableContent}>IQ Load Controller</Typography></td>
                  </tr>
                </tbody>
              </table>
              <ul className={classes.acclistitems}>
              <li className={classes.acclistTexts}>Lighter weight than earlier M-Series Microinverters</li>
              <li className={classes.acclistTexts}>Lighter weight than earlier M-Series Microinverters</li>
              <li className={classes.acclistTexts}>Lighter weight than earlier M-Series Microinverters</li>
                <li className={classes.acclistTexts}>Lighter weight than earlier M-Series Microinverters</li>
              </ul>
            </Box>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ marginBottom: "25px" }} />
      <Accordion expanded={expandedTech} onClick={handleTechClick}>
        <AccordionSummary>
          <Typography variant="h3" className={classes.accTitle}>
            Technical Specifications
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid className={classes.accordianContent}>
            <Box className={classes.acclists}>
              <ul className={classes.acclistitems}>
              <li className={classes.acclistTexts}>Lighter weight than earlier M-Series Microinverters</li>
              <li className={classes.acclistTexts}>Lighter weight than earlier M-Series Microinverters</li>
              <li className={classes.acclistTexts}>Lighter weight than earlier M-Series Microinverters</li>
                <li className={classes.acclistTexts}>Lighter weight than earlier M-Series Microinverters</li>
              </ul>
            </Box>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ marginBottom: "25px" }} />
      <Accordion expanded={expandedCompat} onClick={handleCompatClick}>
        <AccordionSummary>
          <Typography variant="h3" className={classes.accTitle}>
            Compatibility
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid className={classes.accordianContent}>
            <Box className={classes.acclists}>
              <ul className={classes.acclistitems}>
              <li className={classes.acclistTexts}>Lighter weight than earlier M-Series Microinverters</li>
              <li className={classes.acclistTexts}>Lighter weight than earlier M-Series Microinverters</li>
              <li className={classes.acclistTexts}>Lighter weight than earlier M-Series Microinverters</li>
                <li className={classes.acclistTexts}>Lighter weight than earlier M-Series Microinverters</li>
              </ul>
            </Box>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ marginBottom: "25px" }} />
      <Accordion expanded={expandedBox} onClick={handleBoxClick}>
        <AccordionSummary>
          <Typography variant="h3" className={classes.accTitle}>
            What's in the Box
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid className={classes.accordianContent}>
            <Box className={classes.acclists}>
              <ul className={classes.acclistitems}>
              <li className={classes.acclistTexts}>Lighter weight than earlier M-Series Microinverters</li>
              <li className={classes.acclistTexts}>Lighter weight than earlier M-Series Microinverters</li>
              <li className={classes.acclistTexts}>Lighter weight than earlier M-Series Microinverters</li>
                <li className={classes.acclistTexts}>Lighter weight than earlier M-Series Microinverters</li>
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
