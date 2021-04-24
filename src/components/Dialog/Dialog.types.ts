import { ReactElement } from 'react';
import { DialogProps } from '@material-ui/core';

export type TDialogStore = {
    show: boolean;
    dialogState: IDialogProps;
    showDialog: (props: IDialogProps) => void;
    hideDialog: () => void;
};

export interface IDialogProps {
    onClose?: () => void;
    className?: {
        dialogWrapper?: string;
        titleWrapper?: string;
        contentWrapper?: string;
        actionsWrapper?: string;
    };
    disableBackdropClick?: boolean;
    fullScreen?: boolean;
    fullWidth?: boolean;
    maxWidth?: DialogProps['maxWidth'];
    title?: ReactElement;
    content?: ReactElement;
    /**
     * Bottom actions for the dialog box
     */
    actions?: ReactElement;
}
