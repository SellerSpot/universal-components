import React, { ReactElement, ReactNode } from 'react';

export interface ISliderModalProps {
    show?: boolean;
    children?: ReactNode;
    onBackdropClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    width?: React.CSSProperties['width'];
}

export interface ISliderModalHeaderProps {
    children?: ReactElement;
    showActionButton?: 'closeButton' | 'backButton';
    onActionButtonClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface ISliderModalBodyProps {
    children?: ReactNode;
}
