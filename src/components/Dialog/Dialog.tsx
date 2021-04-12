import { DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import React, { ReactElement } from 'react';
import style from './Dialog.module.scss';
import { IDialogProps } from './Dialog.types';
export { IDialogProps } from './Dialog.types';
import { Dialog as MUIDialog } from '@material-ui/core';

export const Dialog = (props: IDialogProps): ReactElement => {
    const {
        fullScreen,
        fullWidth,
        maxWidth,
        show,
        actions,
        className,
        content,
        onClose,
        title,
    } = props;
    console.log(open);

    return (
        <MUIDialog
            fullScreen={fullScreen}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={show}
            className={className?.dialogWrapper}
            onClose={onClose}
        >
            <DialogTitle className={className?.titleWrapper}>{title}</DialogTitle>
            <DialogContent className={className?.contentWrapper}>{content}</DialogContent>
            <DialogActions className={className?.actiosnWrapper}>{actions}</DialogActions>
        </MUIDialog>
    );
};
