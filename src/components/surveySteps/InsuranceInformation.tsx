import React from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box } from '@mui/material';
import StepperNavButtons from '../common/StepperNavButtons';

/* CSS Styles */
const styles = {
   surveyStepperBodyButtons: {
      float: 'right',
   },
};

type InsuranceInformationProps = {
   activeStep: number;
   onBackButtonClick: () => void;
   onNextButtonClick: () => void;
};

function InsuranceInformation({
   activeStep,
   onBackButtonClick,
   onNextButtonClick,
}: InsuranceInformationProps): ReactJSXElement {
   return (
      <>
         <Box sx={styles.surveyStepperBodyButtons}>
            <StepperNavButtons
               stepIndex={activeStep}
               maxSteps={3}
               disableNextButton={false}
               onBackButtonClick={onBackButtonClick}
               onNextButtonClick={onNextButtonClick}
            />
         </Box>
      </>
   );
}

export default InsuranceInformation;
