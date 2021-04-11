import { Alert as MUIAlert, AlertTitle } from '@material-ui/lab';
import { isUndefined } from 'lodash';
import React, { ReactElement } from 'react';

export interface IAlertProps {
    type: 'warning' | 'error' | 'success' | 'info';
    title?: string;
    children: ReactElement | string;
}

export const Alert = (props: IAlertProps): ReactElement => {
    return (
        <MUIAlert severity={props.type}>
            {!isUndefined(props.title) ? <AlertTitle>{props.title}</AlertTitle> : null}
            <h5>Sample Text</h5>
            {props.children}
        </MUIAlert>
    );
};
