import { SnackbarProps } from '@material-ui/core';
import { INotifyState } from './Notify.types';

export class NotifyService {
    static getNotifyPlacement = (
        placement: INotifyState['placement'],
    ): SnackbarProps['anchorOrigin'] => {
        switch (placement) {
            case 'bottomLeft':
                return {
                    horizontal: 'left',
                    vertical: 'bottom',
                };
            case 'bottomCenter':
                return {
                    horizontal: 'center',
                    vertical: 'bottom',
                };
            case 'bottomRight':
                return {
                    horizontal: 'right',
                    vertical: 'bottom',
                };
            case 'topLeft':
                return {
                    horizontal: 'left',
                    vertical: 'top',
                };
            case 'topCenter':
                return {
                    horizontal: 'center',
                    vertical: 'top',
                };
            case 'topRight':
                return {
                    horizontal: 'right',
                    vertical: 'top',
                };
        }
    };
}
