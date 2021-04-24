import create from 'zustand';
import React, { ReactElement } from 'react';
import { isUndefined } from 'lodash';
import { Alert } from '@material-ui/lab';
import { Snackbar, SnackbarProps } from '@material-ui/core';
import { TNotifyStore } from './Notify.types';

export { INotifyState } from './Notify.types';

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
        const { autoHideDuration, placement, theme } = props;
        const currentNotifyState = get().notifyState;
        set({
            notifyState: {
                ...currentNotifyState,
                autoHideDuration,
                placement,
                theme,
            },
        });
    },
    hideNotify: () => {
        set({ show: false });
    },
}));

export const { showNotify, hideNotify, configureNotify } = notifyStore.getState();

export const Notify = (): ReactElement => {
    const { message, onClose, placement, theme, actions, autoHideDuration } =
        notifyStore((theme) => theme.notifyState) || {};

    const showNotify = notifyStore((theme) => theme.show);
    const onMUICloseNotify = notifyStore((theme) => theme.onMUICloseNotify);

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

    // decides if theme based content is required
    const themeBasedContent =
        theme !== 'default' && !isUndefined(theme) ? (
            <Alert severity={theme}>{message}</Alert>
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
            {themeBasedContent}
        </Snackbar>
    );
};
