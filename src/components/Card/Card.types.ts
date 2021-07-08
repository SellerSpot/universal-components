import { ReactElement } from 'react';
import { TOnNodeClickHandler } from '../../typings/common.types';

export interface ICardProps {
    className?: {
        cardWrapper?: string;
        mediaWrapper?: string;
        contentWrapper?: string;
        actionsWrapper?: string;
    };
    image?: string;
    content?: ReactElement;
    actions?: JSX.Element;
    onClick?: TOnNodeClickHandler<HTMLDivElement>;
    /**
     * should the component apply the overflow unset class natively ?
     * @default true
     */
    applyOverflowUnsetClass?: boolean;
}
