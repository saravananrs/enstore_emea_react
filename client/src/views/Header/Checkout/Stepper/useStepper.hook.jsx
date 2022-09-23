import React from 'react'
const steps = ["Versand", "Lieferung", "Zahlung",];
export default function useStepper() {
    const [activeSteps, setActiveSteps] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
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

  // const handleNext = () => {
  //   const newActiveStep =
  //     isLastStep() && !allStepsCompleted()
  //       ? // It's the last step, but not all steps have been completed,
  //         // find the first step that has been completed
  //         steps.findIndex((step, i) => !(i in completed))
  //       : activeSteps + 1;
  //   setActiveSteps(newActiveStep);
  // };
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
    allStepsCompleted
  }
}
