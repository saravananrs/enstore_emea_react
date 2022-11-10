import React from "react";

// MUI
import { Grid, Box, Button } from "@mui/material";

// Hooks
import { useStyledComponent } from "./Styles/useStyles.hook";

export default function LifestyleParts() {
  const classes = useStyledComponent();
  return (
    <>
      <Grid container className={classes.lifestyleFooterContainer}>
        <Grid container className={classes.lifestyleFooter}>
          <Box className={classes.lifeStylequestions}>
            Questions? Contact us. We'll help you build your system, today.
          </Box>
          <Box className={classes.lifeStylebtncontainer}>
            <Button className={classes.lifeStylebtn}>Get Enphase</Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container className={classes.helpContaier}>
        <Box>
          <Grid container className={classes.helpGrid}>
            <Box className={classes.helpGridcontent}>
              Need help with the store?
            </Box>
            <Box className={classes.helpGridcontent}>
              enphasestore@enphase.com
            </Box>
            <Box className={classes.helpGridcontent}>833-963-3820 Option 3</Box>
          </Grid>
          <Grid container className={classes.helpGridPart}>
            <Box className={classes.helpGridSection}>My account</Box>
            <Box className={classes.helpGridSection}>Bag</Box>
            <Box className={classes.helpGridSection}>Orders</Box>
            <Box className={classes.helpGridSection}>Returns and exchanges</Box>
            <Box className={classes.helpGridSection}>Terms of sale</Box>
            <Box className={classes.helpGridSection}>Terms of shipping</Box>
            <Box className={classes.helpGridSection}>
              Return process 
            </Box>
          </Grid>
        </Box>
        <Grid className={classes.lifeStylePartspayment}>
          <img
            className={classes.payImg}
            alt="payimage"
            src="https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-10/visa.png?itok=Kbo2TBCn"
          />
          <img
            className={classes.payImg}
            alt="payimage"
            src="https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-10/master.png?itok=uc2NawCj"
          />
          <img
            className={classes.payImg}
            alt="payimage"
            src="https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-10/paypal.png?itok=OcLhvwdr"
          />
          <img
            className={classes.payImg}
            alt="payimage"
            src="https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-10/affirm.png?itok=V9k-BVVx"
          />
        </Grid>
      </Grid>
    </>
  );
}
