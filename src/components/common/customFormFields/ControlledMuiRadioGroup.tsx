import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Theme} from '@mui/material';
import React from 'react';
import {Controller, FieldValue} from "react-hook-form";
import {SxProps} from "@mui/system";

type ControlledMuiRadioGroupProp = {
    name: string;
    control: FieldValue<any>;
    label: string;
    options: string[];
    sx?: SxProps<Theme>;
    size?: 'small'|'medium';
    required?: boolean;
}

function ControlledMuiRadioGroup({name, label, control, sx, size, required, options}: ControlledMuiRadioGroupProp) {
    return (
            <Controller
                rules={{ required: true }}
                control={control}
                name={name}
                render={({
                             field: { onChange, value },
                             fieldState: { error },
                             formState,
                         }) => (
                    <FormControl>
                        <FormLabel>{label} {required ? '*': ''}</FormLabel>
                        <RadioGroup
                            row
                            value={value}
                            onChange={(e) => {
                                onChange(e);
                            }}
                        >
                            {options.map((option: string, index: number) => (
                                <FormControlLabel
                                    key={index}
                                    value={option}
                                    control={<Radio size={size? size : undefined}/>}
                                    label={option}
                                />))}
                        </RadioGroup>
                    </FormControl>

                )}
            />
    );
}

export default ControlledMuiRadioGroup;