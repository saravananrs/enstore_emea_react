import React, { useState } from 'react'
import { Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Box } from '@mui/material';
import axios from 'axios';
import { makeStyles } from "@material-ui/styles";
import useStepper from "./useStepper.hook";
const useStyles = makeStyles(() => ({
  nextstep:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  continuebtn:{
    margin: 'calc(3 * 8px) 0 calc(2 * 8px) !important',
    alignItems: 'center !important',
    background: '#F37321 !important',
    borderRadius: '4px !important',
    padding: '1px 16px !important',
    cursor: 'pointer !important',
    color: '#fff !important',
    display:"flex !important",
    fontSize: '16px !important',
    height: '48px !important',
    justifyContent: 'center !important',
    position: 'relative !important',
    width: '100% !important',
  }
}));

export default function StepperDelivery(props) {
    const{setActiveStep,activeStep, shippingMethod} = props
    const classes = useStyles();
    const [selectedShippingMethod, setSelectedShippingMethod] = useState(shippingMethod[0]);
    const {allStepsCompleted,isLastStep,completed,steps} = useStepper()
    const handleBack = () => {
        setActiveStep(activeStep - 1);
      };
      const handleShipmentClick = async() =>{
        const quoteId = localStorage.getItem("tokenKey");
        const reqBody ={
            "addressInformation": {
                "shipping_address": {
                    "region": "Greifswald",
                    "country_id": "DE",
                    "street": [
                        "Kurfürstendamm 29"
                    ],
                    "postcode": "17461",
                    "city": "Greifswald",
                    "firstname": "Saravanan",
                    "lastname": "Vaithiyanathan",
                    "customer_id": null,
                    "email": "saravanan@riverstonetech.com",
                    "telephone": "4445531111"
                },
                "billing_address": {
                    "region": "Greifswald",
                    "country_id": "DE",
                    "street": [
                        "Kurfürstendamm 29"
                    ],
                    "postcode": "17461",
                    "city": "Greifswald",
                    "firstname": "Saravanan",
                    "lastname": "Vaithiyanathan",
                    "customer_id": null,
                    "email": "saravanan@riverstonetech.com",
                    "telephone": "4445531111"
                },
                "shipping_carrier_code": selectedShippingMethod.carrier_code,
                "shipping_method_code": selectedShippingMethod.method_code
            },
             data: quoteId,
          }
        await axios.post("http://localhost:8000/api/shippingInformation",reqBody)
        .then((response) => {
          console.log("response", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    
        const newActiveStep =  
        isLastStep() && !allStepsCompleted()
          ? steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1;
      await  setActiveStep(newActiveStep);
      }
      const handleChange = (event) => {
        setSelectedShippingMethod(event.target.value)
      }
  return (
    <>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={selectedShippingMethod}
          onChange={handleChange}
        >
        {shippingMethod.map((method) => 
          <FormControlLabel value={method} control={<Radio />} label={method.method_title + "   " + method.amount} />
        )}
        </RadioGroup>
    </FormControl>
    <Box className={classes.nextstep}>
        <Button className={classes.continuebtn}  onClick={handleShipmentClick} sx={{ mr: 1 }}>
        Continue
        </Button>
      </Box>
    <Button onClick={handleBack}>Back</Button>
    </>
  )
}
