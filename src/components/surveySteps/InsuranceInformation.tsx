import React from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

import { Box, Button } from '@mui/material';

import StepperNavButtons from '../common/StepperNavButtons';
import Overlay from '../common/Overlay';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/StateStore';
import { addInsuranceInformation, setLoading, setSubmitted } from '../store/SurveySlice';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';

import ControlledMuiDatePicker from '../common/customFormFields/ControlledMuiDatePicker';
import ControlledMuiTextField from '../common/customFormFields/ControlledMuiTextField';

import { InsuranceInformationType } from '../interfaces/formTypes';
import { digitsOnly } from '../../refData/regex';

/* CSS Styles */
const styles = {
   surveyStepperBodyButtons: {
      float: 'right',
   },
   formBox: {
      marginTop: '10px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '20px',
   },
   textField: {
      width: '40%',
      marginBottom: '10px',
   },
   datePicker: {
      width: '40%',
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
   /* Application state management */
   let insuranceInformation = useSelector(
      (state: RootState) => state?.surveySlice?.memberInsuranceInfo
   );

   let surveyState = useSelector((state: RootState) => state?.surveySlice);

   let loading = useSelector(
       (state: RootState) => state?.surveySlice?.isLoading
   );

   let dispatch = useDispatch();
   /* End Application state management */

   /* Form management */
   const validationSchema: Yup.ObjectSchema<InsuranceInformationType> =
      Yup.object().shape({
         providerName: Yup.string().required('Provider Name is required'),
         memberName: Yup.string().required('Member Name is required'),
         memberId: Yup.string()
            .required('Member ID is required')
            .test('Digits only', 'Member ID allows only numbers', digitsOnly),
         groupNumber: Yup.string().required('Group Number is required'),
         effectiveDate: Yup.date().required('Effective Date is required'),
      });

   const {
      control,
      getValues,
      formState: { errors, isValid },
   } = useForm({
      mode: 'onChange',
      defaultValues: insuranceInformation,
      resolver: yupResolver(validationSchema),
   });
   /* End Form management */

   /* Save user entered survey info Insurance Information to store */
   function saveSurveyInformation() {
      (function saveInsuranceInformation() {
         let formValue = getValues() as InsuranceInformationType;
         dispatch(addInsuranceInformation(formValue));
      })();
   }

   /* Save user entered survey info on back navigation to preserve data */
   function onBackButton() {
      (function saveInsuranceInformation() {
         let formValue = getValues() as InsuranceInformationType;
         dispatch(addInsuranceInformation(formValue));
         onBackButtonClick();
      })();
   }

   /* Submit the survey data to backend. Mocking a long API call that triggers a loader */
   function onSubmitButtonClick() {
      dispatch(setLoading(true));
      setTimeout(()=> {
             dispatch((setLoading(false)));
             console.log(surveyState);
             dispatch(setSubmitted(true));
          }
          , 10000);
   }

   return (
      <>
         <Box sx={styles.formBox}>
            <ControlledMuiTextField
               sx={styles.textField}
               name={'providerName'}
               control={control}
               label={'Provider Name'}
               size={'medium'}
               required={true}
            />
         </Box>

         <Box sx={styles.formBox}>
            <ControlledMuiTextField
               sx={styles.textField}
               name={'memberName'}
               control={control}
               label={'Member Name'}
               size={'medium'}
               required={true}
            />

            <ControlledMuiTextField
               sx={styles.textField}
               name={'memberId'}
               control={control}
               label={'Member ID'}
               size={'medium'}
               required={true}
            />
         </Box>

         <Box sx={styles.formBox}>
            <ControlledMuiTextField
               sx={styles.textField}
               name={'groupNumber'}
               control={control}
               label={'Group Number'}
               size={'medium'}
               required={true}
            />

            <ControlledMuiDatePicker
               sx={styles.datePicker}
               name={'effectiveDate'}
               control={control}
               label={'Effective Date'}
            />
         </Box>

         <Box sx={styles.surveyStepperBodyButtons}>
            <StepperNavButtons
               stepIndex={activeStep}
               maxSteps={3}
               disableNextButton={!isValid || loading}
               disableBackButton={loading}
               onBackButtonClick={onBackButton}
               onNextButtonClick={saveSurveyInformation}
            >
               <Button
                  sx={{ marginLeft: '10px' }}
                  variant="contained"
                  size={'large'}
                  disabled={!isValid || loading}
                  onClick={() => onSubmitButtonClick()}
               >
                  Submit
               </Button>
            </StepperNavButtons>
         </Box>
      </>
   );
}

export default InsuranceInformation;
