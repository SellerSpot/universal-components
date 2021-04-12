import { DialogProps } from '@material-ui/core';
import { ReactElement } from 'react';

export interface IDialogProps {
    /**
     * Toggle visibility of the dialog box
     */
    show: boolean;
    onClose?: () => void;
    className?: {
        dialogWrapper?: string;
        titleWrapper?: string;
        contentWrapper?: string;
        actiosnWrapper?: string;
    };
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
