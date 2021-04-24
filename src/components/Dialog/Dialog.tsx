import create from 'zustand';
import React, { ReactElement } from 'react';
import { Dialog as MUIDialog } from '@material-ui/core';
import { DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { TDialogStore } from './Dialog.types';

export { TDialogStore, IDialogProps } from './Dialog.types';

/**
 * Used to call the notify component from anywhere in the application
 */
const dialogStore = create<TDialogStore>((set) => ({
    show: false,
    dialogState: null,
    showDialog: (props) => {
        set({ show: true, dialogState: props });
    },
    hideDialog: () => {
        set({ show: false });
    },
}));

export const { hideDialog, showDialog } = dialogStore.getState();

export const Dialog = (): ReactElement => {
    const {
        fullScreen,
        fullWidth,
        maxWidth,
        actions,
        className,
        content,
        onClose,
        title,
        disableBackdropClick,
    } = dialogStore((state) => state.dialogState) || {};
    const { actionsWrapper, contentWrapper, dialogWrapper, titleWrapper } = className ?? {};

    const showDialog = dialogStore((state) => state.show);

    return (
        <MUIDialog
            fullScreen={fullScreen}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={showDialog}
            disableBackdropClick={disableBackdropClick}
            className={dialogWrapper}
            onClose={onClose}
        >
            <DialogTitle className={titleWrapper}>{title}</DialogTitle>
            <DialogContent className={contentWrapper}>{content}</DialogContent>
            <DialogActions className={actionsWrapper}>{actions}</DialogActions>
        </MUIDialog>
    );
};
