import { Snackbar, SnackbarCloseReason, SnackbarContent } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { isUndefined } from 'lodash';
import React, { ReactElement } from 'react';
import create from 'zustand';
import { ICONS } from '../../utilities/icons';
import { IconButton } from '../IconButton/IconButton';
import { NotifyService } from './Notify.service';
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
        const { autoHideDuration, placement, theme, closeOnClickAway } = props;
        const currentNotifyState = get().notifyState;
        set({
            notifyState: {
                ...currentNotifyState,
                autoHideDuration,
                closeOnClickAway,
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
    const {
        message,
        onClose,
        placement,
        theme,
        actions,
        autoHideDuration,
        closeOnClickAway,
        customNotifyAction,
        showNotifyAction,
    } = notifyStore((theme) => theme.notifyState) || {};

    const showNotify = notifyStore((theme) => theme.show);
    const onMUICloseNotify = notifyStore((theme) => theme.onMUICloseNotify);

    // determining the placement
    const notifyPlacement = NotifyService.getNotifyPlacement(placement);

    const defaultCloseNotifyAction = (
        <IconButton
            icon={<ICONS.MdClose />}
            theme="danger"
            size="small"
            inheritColorsFromParent
            onClick={() => hideNotify()}
        />
    );

    const notifyAction = () => {
        if (showNotifyAction) {
            if (!isUndefined(customNotifyAction)) {
                return customNotifyAction({ hideNotify });
            }
            return defaultCloseNotifyAction;
        }
        return null;
    };

    // decides if theme based content is required
    const themeBasedContent =
        theme !== 'default' && !isUndefined(theme) ? (
            <Alert severity={theme} action={notifyAction()}>
                {message}
            </Alert>
        ) : null;

    // handles the onClose callback
    const handleOnClose = ({}, reason: SnackbarCloseReason) => {
        if (reason === 'clickaway' && !closeOnClickAway) return;
        onMUICloseNotify();
        onClose();
    };

    return (
        <Snackbar
            action={actions}
            onClose={handleOnClose}
            open={showNotify}
            autoHideDuration={autoHideDuration}
            anchorOrigin={notifyPlacement}
        >
            {themeBasedContent ?? <SnackbarContent message={message} action={notifyAction()} />}
        </Snackbar>
    );
};
