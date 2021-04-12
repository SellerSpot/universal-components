import { ReactElement } from 'react';

export interface INotifyProps {
    /**
     * To indicate if the notification is shown
     */
    show: boolean;
    placement: 'topLeft' | 'topRight' | 'topCenter' | 'bottomLeft' | 'bottomRight' | 'bottomCenter';
    /**
     * Automatic notify hide time in milliseconds
     */
    autoHideDuration?: number;
    onClose: () => void;
    /**
     * The actions for the notify component
     */
    action?: ReactElement;
    /**
     * Notify message
     */
    message: string;
}
