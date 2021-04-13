import { AlertProps } from '@material-ui/lab';
import { ReactElement } from 'react';

export type TNotifyStore = {
    show: boolean;
    notifyState: INotifyState;
    // used to manage the smooth closing of notify as per MUI method
    onMUICloseNotify: () => void;
    showNotify: (message: INotifyState['message'], options?: Omit<INotifyState, 'message'>) => void;
    /**
     * Configure notify beforehand
     */
    configureNotify: (
        props: Pick<INotifyState, 'placement' | 'state' | 'autoHideDuration'>,
    ) => void;
    /**
     * Used to hide the notify on demand (from custom action or buttons)
     */
    hideNotify: () => void;
};

export interface INotifyState {
    /**
     * Notify message
     */
    message?: string;
    placement?:
        | 'topLeft'
        | 'topRight'
        | 'topCenter'
        | 'bottomLeft'
        | 'bottomRight'
        | 'bottomCenter';
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
     * Visual state of the notify component
     */
    state?: 'default' | AlertProps['severity'];
}
