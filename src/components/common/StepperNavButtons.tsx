import React from 'react';
import { Button, Container, Tooltip } from '@mui/material';

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
   disableNextButton?: boolean;
   disableBackButton?: boolean;
   children?: React.ReactNode;
};

function StepperNavButtons({
   stepIndex,
   maxSteps,
   onBackButtonClick,
   onNextButtonClick,
   disableNextButton = false,
   disableBackButton = false,
   children,
}: StepperNavButtonProps) {
   return (
      <>
         <Container sx={styles.navButtonsContainer}>
            {stepIndex !== 0 ? (
               <Button
                  variant="contained"
                  size={'large'}
                  sx={{ marginRight: '10px' }}
                  disabled={disableBackButton}
                  onClick={() => onBackButtonClick()}
               >
                  Back
               </Button>
            ) : null}

            {stepIndex !== maxSteps - 1 ? (
               <Tooltip
                  title={
                     disableNextButton ? 'Please fill all required fields' : ''
                  }
                  placement="bottom-end"
               >
                  <span>
                     <Button
                        variant="contained"
                        size={'large'}
                        disabled={disableNextButton}
                        onClick={() => onNextButtonClick()}
                     >
                        Next
                     </Button>
                  </span>
               </Tooltip>
            ) : null}

            {stepIndex === maxSteps - 1 ? (
               <Button
                  variant="contained"
                  size={'large'}
                  disabled={disableNextButton}
                  onClick={() => onNextButtonClick()}
               >
                  Save
               </Button>
            ) : null}

            {children}
         </Container>
      </>
   );
}

export default StepperNavButtons;
