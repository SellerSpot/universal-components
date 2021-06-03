import { createState, State, useState } from '@hookstate/core';
import Icon from '@iconify/react';
import { Snackbar, SnackbarCloseReason, SnackbarContent } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { isUndefined } from 'lodash';
import React, { ReactElement } from 'react';
import { ICONS } from '../../utilities';
import { introduceDelay } from '../../utilities/general';
import { IconButton } from '../IconButton/IconButton';
import { NotifyService } from './Notify.service';
import { INotifyStore, INotifyStoreActions } from './Notify.types';
import { DevTools } from '@hookstate/core';

export { INotifyState } from './Notify.types';

/**
 * Used to call the notify component from anywhere in the application
 */

const notifyStore = createState<INotifyStore>({
    show: false,
    notifyState: null,
});

DevTools(notifyStore).label('Notify Store');

const notifyStoreActions = (state: State<Partial<INotifyStore>>): INotifyStoreActions => ({
    onMUICloseNotify: () => {
        state.show.set(false);
    },
    showNotify: async (message, options) => {
        const currentShowState = state.show.get();

        if (currentShowState) {
            state.show.set(false);
            // waiting for the previous notify to close
            await introduceDelay(100);
        }
        state.set((state) => {
            return {
                show: true,
                notifyState: {
                    ...state.notifyState,
                    ...options,
                    message,
                },
            };
        });
    },
    configureNotify: (props) => {
        state.notifyState.set(props);
    },
    hideNotify: () => {
        state.show.set(false);
    },
});

const notifyActions = () => notifyStoreActions(notifyStore);
const { configureNotify, hideNotify, showNotify } = notifyActions();
export { showNotify, hideNotify, configureNotify };

export const Notify = (): ReactElement => {
    const { hideNotify, onMUICloseNotify } = notifyActions();
    const { notifyState, show } = useState(notifyStore);
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
    } = notifyState.get();

    // determining the placement
    const notifyPlacement = NotifyService.getNotifyPlacement(placement);

    const defaultCloseNotifyAction = (
        <IconButton
            icon={<Icon icon={ICONS.close} />}
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
        onClose?.();
    };

    const autoHideDurationCalculated = autoHideDuration < 0 ? undefined : autoHideDuration ?? 5000;

    return (
        <Snackbar
            action={actions}
            onClose={handleOnClose}
            open={show.get()}
            autoHideDuration={autoHideDurationCalculated}
            anchorOrigin={notifyPlacement}
        >
            {themeBasedContent ?? <SnackbarContent message={message} action={notifyAction()} />}
        </Snackbar>
    );
};
