import React, { useCallback, useState } from 'react';
import { Box } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import PersonalInformation from './surveySteps/PersonalInformation';
import MedicalHistory from './surveySteps/MedicalHistory';
import InsuranceInformation from './surveySteps/InsuranceInformation';
import { stepperLabels } from '../refData/stepperSteps';
import StepperTitle from './common/StepperTitle';

/* CSS styling */
const styles = {
   surveyStepperBox: {
      maxWidth: '75%',
      marginLeft: '12.5%',
      marginRight: '12.5%',
      backgroundColor: '#e0e0e0',
      padding: '20px',
   },
   surveyStepperBodyBox: {
      maxWidth: '75%',
      marginLeft: '12.5%',
      marginRight: '12.5%',
      padding: '20px',
   },
   surveyStepperBodyButtons: {
      float: 'right',
   },
};

/**
 * Main stepper component.
 */
function SurveyStepper() {
   let [activeStep, setActiveStep] = useState(1);

   let onBackButtonClick = useCallback(() => {
      setActiveStep(activeStep - 1);
   }, [activeStep]);

   let onNextButtonClick = useCallback(() => {
      setActiveStep(activeStep + 1);
   }, [activeStep]);

   let stepTitle = stepperLabels[activeStep];

   return (
      <>
         {/*Stepper Component*/}
         <Box sx={styles.surveyStepperBox}>
            <Stepper activeStep={activeStep}>
               {stepperLabels.map((stepLabel: string, index: number) => {
                  return (
                     <Step key={stepLabel}>
                        <StepLabel>{stepLabel}</StepLabel>
                     </Step>
                  );
               })}
            </Stepper>
         </Box>

         <Box sx={styles.surveyStepperBodyBox}>
            <StepperTitle title={stepTitle} />

            {renderStepContent(
               activeStep,
               onBackButtonClick,
               onNextButtonClick
            )}
         </Box>
      </>
   );
}

/**
 * Render different form component based on the current step index
 */
function renderStepContent(
   stepIndex: number,
   onBackButtonClick: () => void,
   onNextButtonClick: () => void
): ReactJSXElement | null {
   switch (stepIndex) {
      case 0:
         return (
            <PersonalInformation
               activeStep={stepIndex}
               onBackButtonClick={onBackButtonClick}
               onNextButtonClick={onNextButtonClick}
            />
         );
      case 1:
         return (
            <MedicalHistory
               activeStep={stepIndex}
               onBackButtonClick={onBackButtonClick}
               onNextButtonClick={onNextButtonClick}
            />
         );
      case 2:
         return (
            <InsuranceInformation
               activeStep={stepIndex}
               onBackButtonClick={onBackButtonClick}
               onNextButtonClick={onNextButtonClick}
            />
         );
      default:
         return null;
   }
}

export default SurveyStepper;
