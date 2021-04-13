import { Snackbar, SnackbarProps } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { isUndefined } from 'lodash';
import React, { ReactElement } from 'react';
import style from './Notify.module.scss';
import { INotifyState, TNotifyStore } from './Notify.types';
export { INotifyState } from './Notify.types';
import create from 'zustand';

/**
 * Used to call the notify component from anywhere in the application
 */
const notifyStore = create<TNotifyStore>((set, get) => ({
    show: false,
    notifyState: null,
    onMUICloseNotify: () => {
        set({ show: false });
    },
    showNotify: (message, options) => {
        const currentNotifyState = get().notifyState;
        set({
            show: true,
            notifyState: {
                message: message,
                ...currentNotifyState,
                ...options,
            },
        });
    },
    configureNotify: (props) => {
        const { autoHideDuration, placement, state } = props;
        const currentNotifyState = get().notifyState;
        set({
            notifyState: {
                ...currentNotifyState,
                autoHideDuration,
                placement,
                state,
            },
        });
    },
    hideNotify: () => {
        set({ show: false });
    },
}));

export const { showNotify, hideNotify, configureNotify } = notifyStore.getState();

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
