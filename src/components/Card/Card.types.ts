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
}
