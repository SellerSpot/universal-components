import React, { ReactElement } from 'react';
import { IAlertProps } from './Alert.types';

export default function Alert(props: IAlertProps): ReactElement {
    return <div>{props.children}</div>;
}
