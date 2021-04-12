import { Snackbar, SnackbarProps } from '@material-ui/core';
import React, { ReactElement } from 'react';
import style from './Notify.module.scss';
import { INotifyProps } from './Notify.types';
export { INotifyProps } from './Notify.types';

export const Notify = (props: INotifyProps): ReactElement => {
    const { action, message, onClose, placement, show, autoHideDuration } = props;
    let notifyPlacement: SnackbarProps['anchorOrigin'];
    // determining the placement
    switch (placement) {
        case 'bottomLeft':
            notifyPlacement = {
                horizontal: 'left',
                vertical: 'bottom',
            };
            break;
        case 'bottomCenter':
            notifyPlacement = {
                horizontal: 'center',
                vertical: 'bottom',
            };
            break;
        case 'bottomRight':
            notifyPlacement = {
                horizontal: 'right',
                vertical: 'bottom',
            };
            break;
        case 'topLeft':
            notifyPlacement = {
                horizontal: 'left',
                vertical: 'top',
            };
            break;
        case 'topCenter':
            notifyPlacement = {
                horizontal: 'center',
                vertical: 'top',
            };
            break;
        case 'topRight':
            notifyPlacement = {
                horizontal: 'right',
                vertical: 'top',
            };
            break;
    }
    return (
        <Snackbar
            action={action}
            message={message}
            onClose={onClose}
            open={show}
            anchorOrigin={notifyPlacement}
            autoHideDuration={autoHideDuration}
        />
    );
};
