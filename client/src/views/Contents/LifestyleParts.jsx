import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { useStyledComponent } from "./Styles/useStyles.hook";

export default function LifestyleParts() {
  const classes = useStyledComponent();
  return (<>
    <Grid container className={classes.lifestyleFooterContainer}>
        <Grid container className={classes.lifestyleFooter}>
          <Box className={classes.lifeStylequestions}>
          Fragen? Kontaktiere uns. Wir helfen Ihnen noch heute beim Aufbau Ihres Systems.
          </Box>
          <Box className={classes.lifeStylebtncontainer}>
            <Button className={classes.lifeStylebtn}>Get Enphase</Button>
          </Box>
        </Grid>
      </Grid>
    <Grid container className={classes.helpContaier}>
      <Box>
        <Grid container className={classes.helpGrid}>
          <Box className={classes.helpGridcontent}>Benötigen Sie Hilfe beim Laden?</Box>
          <Box className={classes.helpGridcontent}>enphasestore@enphase.com</Box>
          <Box className={classes.helpGridcontent}>833-963-3820 Option 3</Box>
        </Grid>
        <Grid container className={classes.helpGridPart}>
          <Box className={classes.helpGridSection}>Mein Konto</Box>
          <Box className={classes.helpGridSection}>Tasche</Box>
          <Box className={classes.helpGridSection}>Aufträge</Box>
          <Box className={classes.helpGridSection}>Rückgabe und Umtausch</Box>
          <Box className={classes.helpGridSection}>Verkaufsbedingungen</Box>
          <Box className={classes.helpGridSection}>Versandbedingungen</Box>
          <Box className={classes.helpGridSection}>
            Return process for Guest Users
          </Box>
        </Grid>
      </Box>
      <Grid className={classes.lifeStylePartspayment}>
        <img
          className={classes.payImg} alt='payimage'
          src="https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-10/visa.png?itok=Kbo2TBCn"
        />
        <img
          className={classes.payImg} alt='payimage'
          src="https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-10/master.png?itok=uc2NawCj"
        />
        <img
          className={classes.payImg} alt='payimage'
          src="https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-10/paypal.png?itok=OcLhvwdr"
        />
        <img
          className={classes.payImg} alt='payimage'
          src="https://store-d9.enphase.com/sites/default/files/styles/max_650x650/public/2021-10/affirm.png?itok=V9k-BVVx"
        />
      </Grid>
    </Grid>
    </>
  );
}
