import { AlertProps } from '@material-ui/lab';
import { ReactElement } from 'react';

export type TNotifyStore = {
    show: boolean;
    notifyState: INotifyState;
    // used to manage the smooth closing of notify as per MUI method
    onMUICloseNotify: () => void;
    showNotify: (props: INotifyState) => void;
};

export interface INotifyState {
    placement: 'topLeft' | 'topRight' | 'topCenter' | 'bottomLeft' | 'bottomRight' | 'bottomCenter';
    /**
     * Automatic notify hide time in milliseconds
     */
    autoHideDuration?: number;
    onClose?: () => void;
    /**
     * The actions for the notify component
     */
    actions?: ReactElement;
    /**
     * Notify message
     */
    message: string;
    /**
     * Visual state of the notify component
     */
    state: 'default' | AlertProps['severity'];
}
