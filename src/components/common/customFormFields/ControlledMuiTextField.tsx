import React from 'react';
import { Controller, FieldValue } from 'react-hook-form';
import { TextField, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export type HookControllerWrappedTextFieldProp = {
   name: string;
   control: FieldValue<any>;
   label: string;
   size?: 'small' | 'medium';
   fullWidth?: boolean;
   sx?: SxProps<Theme>;
   required?: boolean;
};

/**
 * MUI text field component wrapped inside React Hook Form Controller.
 */
function ControlledMuiTextField({
   name,
   control,
   label,
   size,
   fullWidth,
   sx,
   required,
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
            <>
               <TextField
                  size={size ? size : 'small'}
                  onChange={onChange}
                  value={value}
                  fullWidth={fullWidth ? fullWidth : false}
                  label={label}
                  variant="outlined"
                  required={required ? required : false}
                  sx={sx}
                  helperText={error ? error.message : null}
                  error={!!error}
               />
            </>
         )}
      />
   );
}

export default ControlledMuiTextField;
