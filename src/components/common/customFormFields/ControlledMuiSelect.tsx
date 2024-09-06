import React from 'react';
import { Controller, FieldValue } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

type HookControllerWrappedSelectProp = {
   name: string;
   label: string;
   control: FieldValue<any>;
   options: string[] | number[];
   defaultValue?: string;
   style?: any;
};

/**
 * MUI select component wrapped inside React Hook Form Controller.
 */
function ControlledMuiSelect({
   name,
   label,
   control,
   options,
   style,
}: HookControllerWrappedSelectProp) {
   return (
      <Controller
         name={name}
         control={control}
         render={({ field }) => (
            <FormControl style={style}>
               <InputLabel>{label}</InputLabel>
               <Select style={{ width: '100%' }} {...field} label={label}>
                  {options.map((option) => (
                     <MenuItem value={option} key={option}>
                        {option}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
         )}
      />
   );
}

export default ControlledMuiSelect;
