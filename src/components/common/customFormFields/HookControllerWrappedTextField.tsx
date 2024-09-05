import React from 'react';
import { Controller, FieldValue } from 'react-hook-form';
import { TextField, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export type HookControllerWrappedTextFieldProp = {
   name: string;
   control: FieldValue<any>;
   label: string;
   size: 'small' | 'medium';
   fullWidth: boolean;
   sx: SxProps<Theme>;
};

/**
 * MUI text field component wrapped inside React Hook Form Controller.
 */
function HookControllerWrappedTextField({
   name,
   control,
   label,
   size = 'small',
   fullWidth,
   sx,
}: HookControllerWrappedTextFieldProp) {
   return (
      <Controller
         name={name}
         control={control}
         render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
         }) => (
            <TextField
               helperText={error ? error.message : null}
               size={size}
               error={!!error}
               onChange={onChange}
               value={value}
               fullWidth={fullWidth}
               label={label}
               variant="outlined"
               sx={sx}
            />
         )}
      />
   );
}

export default HookControllerWrappedTextField;
