import React, { ReactElement } from 'react';
import { isUndefined } from 'lodash';
import { Alert as MUIAlert, AlertProps, AlertTitle } from '@material-ui/lab';

export interface IAlertProps {
    type: AlertProps['severity'];
    title?: string;
    children?: ReactElement | string;
}

export const Alert = (props: IAlertProps): ReactElement => {
    const { type, title, children } = props;
    return (
        <MUIAlert severity={type}>
            {isUndefined(title) ? null : <AlertTitle>{title}</AlertTitle>}
            {children}
        </MUIAlert>
    );
};
