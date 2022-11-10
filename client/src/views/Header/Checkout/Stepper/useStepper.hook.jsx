import React from 'react'
import instance from '../../../../utils/axiosconfig';

const steps = ["Shipping", "Delivery", "Payment",];

export default function useStepper() {
    const [activeSteps, setActiveSteps] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [regiondata,setRegionData] = React.useState([])
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeSteps === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeSteps)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeSteps);
    }

    setActiveSteps((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveSteps((prevActiveStep) => prevActiveStep - 1);
  };

 

  const handleStep = (step) => () => {
    setActiveSteps(step);
  };

  React.useEffect(()=>{
      const fetchAllRegData = async() =>{
          await instance.get('/checkout/allReg')
          .then((res)=>{
              setRegionData(res.data)
          })
          .catch((err)=>{
              console.log(err);
          })
      }
      fetchAllRegData()
  },[])


  return{
    setActiveSteps,
    handleStep,
    handleBack,
    activeSteps,
    handleNext,
    completed,
    steps,
    isStepSkipped,
    isLastStep,
    isStepOptional,
    regiondata,
    allStepsCompleted
  }
}
