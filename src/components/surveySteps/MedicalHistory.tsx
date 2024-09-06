import React, {useEffect} from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box } from '@mui/material';
import StepperNavButtons from '../common/StepperNavButtons';
import ControlledMuiRadioGroup from '../common/customFormFields/ControlledMuiRadioGroup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
   medicalHistoryQuestions,
} from '../../refData/medicalHistoryRef';
import {
   defaultMedicalHistoryInfo,
   MedicalHistoryInfo,
} from '../interfaces/medicalHistoryType';

import{addMedicalHistoryInformation} from '../store/SurveySlice'
import {useDispatch, useSelector} from "react-redux";

import * as Yup from 'yup';
import {RootState} from "../store/StateStore";

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

   let memberHistory = useSelector((state: RootState) => state?.surveySlice?.memberHistory);
   let dispatch = useDispatch();

   useEffect(() => {
   }, []);

   const validationSchema: Yup.ObjectSchema<MedicalHistoryInfo> =
      Yup.object().shape({
         BUN: Yup.string().required(),
         'Blood Pressure': Yup.string().required(),
         'Blood Sugar': Yup.string().required(),
         Colestrol: Yup.string().required(),
         'Currently on Medication': Yup.string().required(),
      });

   /* Uses React Form Hook to control the form */
   const {
      control,
      getValues,
      formState: { errors, isValid },
   } = useForm<MedicalHistoryInfo>({
      mode: 'onChange',
      defaultValues: memberHistory,
      resolver: yupResolver(validationSchema),
   });

   const saveAndContinue = () => {
      let formValues = getValues();
      dispatch(addMedicalHistoryInformation(formValues as MedicalHistoryInfo))
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
               onBackButtonClick={onBackButtonClick}
               onNextButtonClick={saveAndContinue}
            />
         </Box>
      </>
   );
}

export default MedicalHistory;
