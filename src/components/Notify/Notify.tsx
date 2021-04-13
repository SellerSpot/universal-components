import { Snackbar, SnackbarProps } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { isUndefined } from 'lodash';
import React, { ReactElement } from 'react';
import style from './Notify.module.scss';
import { TNotifyStore } from './Notify.types';
export { INotifyState } from './Notify.types';
import create from 'zustand';

/**
 * Used to call the notify component from anywhere in the application
 */
export const notifyStore = create<TNotifyStore>((set) => ({
    show: false,
    notifyState: null,
    onMUICloseNotify: () => {
        set({ show: false });
    },
    showNotify: (props) => {
        set({ show: true, notifyState: props });
    },
    hideNotify: () => {
        set({ show: false });
    },
}));

export const Notify = (): ReactElement => {
    const { message, onClose, placement, state, actions, autoHideDuration } =
        notifyStore((state) => state.notifyState) || {};

    const showNotify = notifyStore((state) => state.show);
    const onMUICloseNotify = notifyStore((state) => state.onMUICloseNotify);

    // determining the placement
    let notifyPlacement: SnackbarProps['anchorOrigin'];
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

    // decides if state based content is required
    const stateBasedContent =
        state !== 'default' && !isUndefined(state) ? (
            <Alert severity={state}>{message}</Alert>
        ) : null;

    // handles the onClose callback
    const handleOnClose = () => {
        onMUICloseNotify();
        onClose();
    };

    return (
        <Snackbar
            action={actions}
            message={message}
            onClose={handleOnClose}
            open={showNotify}
            autoHideDuration={autoHideDuration}
            anchorOrigin={notifyPlacement}
        >
            {stateBasedContent}
        </Snackbar>
    );
};
