import React from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { Controller, FieldValue } from 'react-hook-form';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';

export type HookControllerWrappedDatePickerProp = {
   name: string;
   control: FieldValue<any>;
   label: string;
   sx: SxProps<Theme>;
};

/**
 * MUI date picker component wrapped inside React Hook Form Controller.
 */
function HookControllerWrappedDatePicker({
   name,
   control,
   label,
   sx,
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
                  sx={sx}
                  label={label}
                  onChange={onChange}
                  value={value}
               />
            </>
         )}
      />
   );
}

export default HookControllerWrappedDatePicker;
