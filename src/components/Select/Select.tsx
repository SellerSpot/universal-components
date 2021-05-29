import React, { ReactElement } from 'react';
import { MenuItem, TextField as MUITextField } from '@material-ui/core';
import { ISelectProps } from './Select.types';

export { ISelectProps } from './Select.types';

export const Select = (props: ISelectProps): ReactElement => {
    const { options, value, label, onChange, size } = props;
    return (
        <MUITextField
            variant="standard"
            select
            size={size}
            value={value}
            label={label}
            onChange={onChange}
            SelectProps={{ style: { translate: '10px' } }}
        >
            {options.map((option, index) => {
                return (
                    <MenuItem key={index} value={option.value}>
                        {option.text}
                    </MenuItem>
                );
            })}
        </MUITextField>
    );
};
