import React from 'react';
import HookControllerWrappedTextField from '../common/customFormFields/HookControllerWrappedTextField';
import { useForm } from 'react-hook-form';
import { Box, Button, MenuItem } from '@mui/material';
import HookControllerWrappedDatePicker from '../common/customFormFields/HookControllerWrappedDatePicker';
import { PrimaryInfo, defaultPrimaryInfo } from '../interfaces/primaryInfoType';
import HookControllerWrappedSelect from '../common/customFormFields/HookControllerWrappedSelect';
import { stateList } from '../interfaces/stateList';

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
};

type PrimaryInformationProps = {};

function PersonalInformation(props: PrimaryInformationProps) {
   const { control, getValues } = useForm<PrimaryInfo>({
      defaultValues: defaultPrimaryInfo,
   });

   function saveInfo() {
      let formValues = getValues();
      console.log(formValues);
   }

   return (
      <>
         <Box sx={styles.formBox}>
            <HookControllerWrappedTextField
               sx={styles.textField}
               name={'firstName'}
               control={control}
               size={'small'}
               label={'First Name'}
               fullWidth={false}
            />
            <HookControllerWrappedTextField
               sx={styles.textField}
               name={'lastName'}
               control={control}
               size={'small'}
               label={'Last Name'}
               fullWidth={false}
            />
         </Box>

         <Box sx={styles.formBox}>
            <HookControllerWrappedDatePicker
               sx={styles.datePicker}
               name={'dob'}
               control={control}
               label={'Date of Birth'}
            />
         </Box>

         <Box sx={styles.formBox}>
            <HookControllerWrappedTextField
               sx={{}}
               name={'streetAddress'}
               control={control}
               size={'small'}
               label={'Street Address'}
               fullWidth={true}
            />
         </Box>

         <Box sx={styles.formBox}>
            <HookControllerWrappedSelect
               name={'state'}
               label={'State'}
               control={control}
               defaultValue={'Maryland'}
               style={styles.stateSelect}
               options={stateList}
            />
         </Box>

         <Button
            variant="contained"
            size={'small'}
            sx={{ marginRight: '10px' }}
            onClick={() => saveInfo()}
         >
            Save
         </Button>
      </>
   );
}

export default PersonalInformation;
