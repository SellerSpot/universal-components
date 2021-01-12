import React, { ReactElement } from 'react';
import { cx } from '@emotion/css';
import { ICheckboxProps } from './checkbox.types';
import { getCheckboxClasses } from './checkbox.styles';

export const Checkbox = (props: ICheckboxProps): JSX.Element => {
    const defaultProps: ICheckboxProps = {
        options: ['Option 1', 'Option 2', 'Option 3'],
        selectedValues: [],
        onChange: (value) => void 0,
    };

    const classes = getCheckboxClasses();

    return <div className={cx(classes.checkboxGroupWrapper)}></div>;
};
