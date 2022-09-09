import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import { Divider, Box } from "@mui/material";
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
export default function ProductDetailAccordian() {
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ marginBottom: "25px" }} />
      </Box>
    </React.Fragment>
  );
}
