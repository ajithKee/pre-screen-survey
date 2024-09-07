import React from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box } from '@mui/material';

import StepperNavButtons from '../common/StepperNavButtons';
import ControlledMuiRadioGroup from '../common/customFormFields/ControlledMuiRadioGroup';

import { medicalHistoryQuestions } from '../../refData/medicalHistoryRef';
import { MedicalHistoryInfo } from '../interfaces/formTypes';

import { useDispatch, useSelector } from 'react-redux';
import { addMedicalHistoryInformation } from '../store/SurveySlice';
import { RootState } from '../store/StateStore';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

/* CSS Styles */
const styles = {
   questionsDiv: {
      marginBottom: '15px',
   },
   surveyStepperBodyButtons: {
      float: 'right',
   },
};

type MedicalHistoryProps = {
   activeStep: number;
   onBackButtonClick: () => void;
   onNextButtonClick: () => void;
};

function MedicalHistory({
   activeStep,
   onBackButtonClick,
   onNextButtonClick,
}: MedicalHistoryProps): ReactJSXElement {
   /* Application state management */
   let memberHistory = useSelector(
      (state: RootState) => state?.surveySlice?.memberHistory
   );
   let dispatch = useDispatch();
   /* End Application state management */

   /* Form management */
   const validationSchema: Yup.ObjectSchema<MedicalHistoryInfo> =
      Yup.object().shape({
         BUN: Yup.string().required(),
         'Blood Pressure': Yup.string().required(),
         'Blood Sugar': Yup.string().required(),
         Colestrol: Yup.string().required(),
         'Currently on Medication': Yup.string().required(),
      });

   const {
      control,
      getValues,
      formState: { errors, isValid },
   } = useForm<MedicalHistoryInfo>({
      mode: 'onChange',
      defaultValues: memberHistory,
      resolver: yupResolver(validationSchema),
   });
   /* End Form management */

   /* Save user entered medical history on back navigation to preserve data */
   function onBackButton() {
      (function saveInsuranceInformation() {
         let formValue = getValues() as MedicalHistoryInfo;
         dispatch(addMedicalHistoryInformation(formValue));
         onBackButtonClick();
      })();
   }

   /* Save user entered medical history to store */
   const saveAndContinue = () => {
      let formValues = getValues();
      dispatch(addMedicalHistoryInformation(formValues as MedicalHistoryInfo));
      onNextButtonClick();
   };

   return (
      <>
         {medicalHistoryQuestions.map((question, index) => {
            let questionName = Object.keys(question)[0];
            let options = Object.values(question)[0];

            return (
               <Box key={index} sx={styles.questionsDiv}>
                  <ControlledMuiRadioGroup
                     name={questionName}
                     label={questionName}
                     control={control}
                     size={'medium'}
                     required={true}
                     options={options}
                  />
               </Box>
            );
         })}

         <Box sx={styles.surveyStepperBodyButtons}>
            <StepperNavButtons
               stepIndex={activeStep}
               maxSteps={3}
               disableNextButton={!isValid}
               onBackButtonClick={onBackButton}
               onNextButtonClick={saveAndContinue}
            ></StepperNavButtons>
         </Box>
      </>
   );
}

export default MedicalHistory;
