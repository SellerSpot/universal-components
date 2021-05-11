import { FormControlLabel, Checkbox as MUICheckbox } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { ICheckBoxProps } from './CheckBox.types';
export { ICheckBoxProps } from './CheckBox.types';

export const CheckBox = (props: ICheckBoxProps): ReactElement => {
    const { key, checked, label, onChange, labelPlacement } = props;
    return (
        <FormControlLabel
            key={key}
            control={<MUICheckbox checked={checked} onChange={onChange} color="primary" />}
            label={label}
            labelPlacement={labelPlacement}
        />
    );
};
