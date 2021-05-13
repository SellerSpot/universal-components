import { FormControlLabelProps } from '@material-ui/core';
import { ReactNode } from 'react';

export interface ICheckBoxProps {
    key?: React.Key;
    checked?: boolean;
    label?: ReactNode;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    labelPlacement?: FormControlLabelProps['labelPlacement'];
}
