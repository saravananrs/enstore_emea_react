import { Button } from '@mui/material';
import React from 'react'

export default function StepperDelivery(props) {
    const{setActiveStep,activeStep} = props
    const handleBack = () => {
        setActiveStep(activeStep - 1);
      };
  return (
    <Button onClick={handleBack}>Back</Button>
  )
}
