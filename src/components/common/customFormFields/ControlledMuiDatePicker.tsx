import React from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { Controller, FieldValue } from 'react-hook-form';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';

export type HookControllerWrappedDatePickerProp = {
   name: string;
   control: FieldValue<any>;
   label?: string;
   sx?: SxProps<Theme>;
};

/**
 * MUI date picker component wrapped inside React Hook Form Controller.
 */
function ControlledMuiDatePicker({
   name,
   control,
    ...props
}: HookControllerWrappedDatePickerProp) {
   return (
      <Controller
         name={name}
         control={control}
         render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
         }) => (
            <>
               <DatePicker
                   {...props}
                  onChange={onChange}
                  value={value}
                  slotProps={{
                      textField: {
                          required: true,
                          error: !!error,
                          helperText: '',
                      },
                  }}
               />
            </>
         )}
      />
   );
}

export default ControlledMuiDatePicker;
