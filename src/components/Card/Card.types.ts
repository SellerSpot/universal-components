import { ReactElement } from 'react';

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
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
