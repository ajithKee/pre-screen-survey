import React from 'react';
import { Controller, FieldValue } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

type HookControllerWrappedSelectProp = {
   name: string;
   label: string;
   control: FieldValue<any>;
   defaultValue: string;
   style: any;
   options: string[] | number[];
};

/**
 * MUI select component wrapped inside React Hook Form Controller.
 */
function HookControllerWrappedSelect({
   name,
   label,
   defaultValue,
   control,
   style,
   options,
}: HookControllerWrappedSelectProp) {
   return (
      <Controller
         name={name}
         control={control}
         defaultValue={defaultValue !== undefined ? defaultValue : null}
         render={({ field }) => (
            <FormControl style={style}>
               <InputLabel>{label}</InputLabel>
               <Select
                  style={{ width: '100%' }}
                  {...field}
                  label={label}
                  defaultValue={[]}
               >
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

export default HookControllerWrappedSelect;
