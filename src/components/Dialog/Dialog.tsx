import { DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import React, { ReactElement } from 'react';
import style from './Dialog.module.scss';
import { IDialogProps, TDialogStore } from './Dialog.types';
export { IDialogProps } from './Dialog.types';
import { Dialog as MUIDialog } from '@material-ui/core';
import create from 'zustand';

/**
 * Used to call the notify component from anywhere in the application
 */
export const dialogStore = create<TDialogStore>((set) => ({
    show: false,
    dialogState: null,
    showDialog: (props) => {
        set({ show: true, dialogState: props });
    },
    hideDialog: () => {
        set({ show: false });
    },
}));

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

    const showDialog = dialogStore((state) => state.show);

    return (
        <MUIDialog
            fullScreen={fullScreen}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={showDialog}
            disableBackdropClick={disableBackdropClick}
            className={className?.dialogWrapper}
            onClose={onClose}
        >
            <DialogTitle className={className?.titleWrapper}>{title}</DialogTitle>
            <DialogContent className={className?.contentWrapper}>{content}</DialogContent>
            <DialogActions className={className?.actionsWrapper}>{actions}</DialogActions>
        </MUIDialog>
    );
};
