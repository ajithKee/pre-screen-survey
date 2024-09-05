import React from 'react';
import { Button, Container } from '@mui/material';

const styles = {
   navButtonsContainer: {
      paddingTop: '5px',
      paddingBottom: '5px',
   },
};

type StepperNavButtonProps = {
   stepIndex: number;
   maxSteps: number;
   onBackButtonClick: () => void;
   onNextButtonClick: () => void;
};

function StepperNavButtons({
   stepIndex,
   maxSteps,
   onBackButtonClick,
   onNextButtonClick,
}: StepperNavButtonProps) {
   return (
      <>
         <Container sx={styles.navButtonsContainer}>
            {stepIndex !== 0 ? (
               <Button
                  variant="contained"
                  size={'small'}
                  sx={{ marginRight: '10px' }}
                  onClick={() => onBackButtonClick()}
               >
                  Back
               </Button>
            ) : null}

            {stepIndex !== maxSteps - 1 ? (
               <Button
                  variant="contained"
                  size={'small'}
                  onClick={() => onNextButtonClick()}
               >
                  Next
               </Button>
            ) : null}
         </Container>
      </>
   );
}

export default StepperNavButtons;
