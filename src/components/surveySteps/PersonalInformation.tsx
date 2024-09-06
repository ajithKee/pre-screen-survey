import React from 'react';
import ControlledMuiTextField from '../common/customFormFields/ControlledMuiTextField';
import { useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material';

/* Validation resolver library */
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import ControlledMuiDatePicker from '../common/customFormFields/ControlledMuiDatePicker';
import { PrimaryInfo, defaultPrimaryInfo } from '../interfaces/primaryInfoType';
import ControlledMuiSelect from '../common/customFormFields/ControlledMuiSelect';
import { stateList } from '../../refData/stateList';
import { digitsOnly } from '../../refData/regex';
import StepperNavButtons from '../common/StepperNavButtons';

/* CSS Styles */
const styles = {
   textField: {
      width: '40%',
      marginBottom: '10px',
   },
   formBox: {
      marginTop: '10px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '20px',
   },
   datePicker: {
      width: '40%',
   },
   stateSelect: {
      width: '40%',
   },
   surveyStepperBodyButtons: {
      float: 'right',
   },
};

type PrimaryInformationProps = {
   activeStep: number;
   onBackButtonClick: () => void;
   onNextButtonClick: () => void;
};

function PersonalInformation({
   activeStep,
   onBackButtonClick,
   onNextButtonClick,
}: PrimaryInformationProps) {
   const validationSchema: Yup.ObjectSchema<PrimaryInfo> = Yup.object().shape({
      firstName: Yup.string().required('Firstname is required'),
      lastName: Yup.string().required('Lastname is required'),
      streetAddress: Yup.string().required('Street address is required'),
      dob: Yup.date().required(),
      state: Yup.string().required('State is required'),
      zipCode: Yup.string()
         .required('ZipCode is required')
         .test('Digits only', 'ZipCode allows only numbers', digitsOnly)
         .min(5, 'ZipCode must be atleast 5 characters')
         .max(5, 'ZipCode cannot exceed 5 characters'),
   });

   /* Uses React Form Hook to control the form */
   const {
      control,
      getValues,
      formState: { errors, isValid },
   } = useForm<PrimaryInfo>({
      mode: 'onChange',
      defaultValues: defaultPrimaryInfo,
      resolver: yupResolver(validationSchema),
   });

   const saveAndContinue = () => {
      let formValues = getValues();
      console.log(formValues);

      onNextButtonClick();
   };

   return (
      <>
         <Box sx={styles.formBox}>
            <ControlledMuiTextField
               sx={styles.textField}
               name={'firstName'}
               control={control}
               label={'First Name'}
               size={'medium'}
               required={true}
            />
            <ControlledMuiTextField
               sx={styles.textField}
               name={'lastName'}
               control={control}
               size={'medium'}
               label={'Last Name'}
               required={true}
            />
         </Box>

         <Box sx={styles.formBox}>
            <ControlledMuiDatePicker
               sx={styles.datePicker}
               name={'dob'}
               control={control}
               label={'Date of Birth'}
            />
         </Box>

         <Box sx={styles.formBox}>
            <ControlledMuiTextField
               sx={{}}
               name={'streetAddress'}
               control={control}
               size={'medium'}
               label={'Street Address'}
               fullWidth={true}
               required={true}
            />
         </Box>

         <Box sx={styles.formBox}>
            <ControlledMuiSelect
               name={'state'}
               label={'State'}
               control={control}
               style={styles.stateSelect}
               options={stateList}
            />

            <ControlledMuiTextField
               sx={styles.textField}
               name={'zipCode'}
               control={control}
               size={'medium'}
               label={'Zip Code'}
               required={true}
            />
         </Box>

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

export default PersonalInformation;
