import React,{useState, useEffect, useRef} from "react";

// Components
import LifestyleParts from "./LifestyleParts";

// MUI
import { Grid, Typography, Box } from "@mui/material";

// Hooks
import { useStyledComponent } from "./Styles/useStyles.hook";

export default function Lifestyle() {
  const classes = useStyledComponent();
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <React.Fragment>
      <Grid className={classes.lifeStyleContainer}>
        <Box className={classes.lifeStyleHeader}>
          <Typography variant="h3" ref={domRef} 
           className={`${classes.lifeStyleTitle} ${isVisible ? classes.lifeVisible : ""}`}
          >
            Enphase Lifestyle Products
          </Typography>
        </Box>
        <Box className={classes.lifestyleHeadings}>
          <Typography className={classes.lifeText}>
            Jackets, hats, tools and more
          </Typography>
          <img
            className="lifestyleImg"
            srcSet="https://store-d9.enphase.com/sites/default/files/styles/max_1300x1300/public/2021-11/swag%20family.png?itok=asAWuwtl"
            alt="name"
          />
        </Box>
      </Grid>
      <LifestyleParts />
    </React.Fragment>
  );
}
