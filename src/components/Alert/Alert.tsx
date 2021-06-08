import { isUndefined } from 'lodash';
import React, { CSSProperties, ReactElement } from 'react';
import { Alert as MUIAlert, AlertProps, AlertTitle } from '@material-ui/lab';

export interface IAlertProps {
    type: AlertProps['severity'];
    title?: string;
    children?: ReactElement | string;
}

export const Alert = (props: IAlertProps): ReactElement => {
    const { type, title, children } = props;

    // styles
    const alertStyle: CSSProperties = {
        width: '100%',
    };

    return (
        <MUIAlert style={alertStyle} severity={type}>
            {isUndefined(title) ? null : <AlertTitle>{title}</AlertTitle>}
            {children}
        </MUIAlert>
    );
};
