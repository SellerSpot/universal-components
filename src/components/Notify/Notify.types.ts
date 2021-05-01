import { ReactElement } from 'react';
import { AlertProps } from '@material-ui/lab';

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
        props: Pick<
            INotifyState,
            'placement' | 'theme' | 'autoHideDuration' | 'closeOnClickAway' | 'showNotifyAction'
        >,
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
    /**
     * If the Notify should close when clicked outside the notify
     */
    closeOnClickAway?: boolean;
    /**
     * Shows the icon an functionality to close the Notify on click
     */
    showNotifyAction?: boolean;
    customNotifyAction?: (props: { hideNotify: () => void }) => ReactElement;
    onClose?: () => void;
    /**
     * The actions for the notify component
     */
    actions?: ReactElement;
    /**
     * Visual theme of the notify component
     */
    theme?: 'default' | AlertProps['severity'];
}
