import React, { ReactElement, ReactNode } from 'react';

export type TSliderModalType = 'absolute' | 'fixed';

export interface ISliderModalProps {
    show?: boolean;
    /**
     * @default ```fixed```
     */
    type?: TSliderModalType;
    /**
     * @default ```10```
     * Twek the zIndex if needed
     */
    zIndex?: number;
    /**
     * requires 2 react nodes
     * 1. header
     * 2. body
     */
    children?: [ReactElement, ReactElement];
    onBackdropClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    width?: React.CSSProperties['width'];
    headerProps?: Omit<ISliderModalHeaderProps, 'children'>;
}

export interface ISliderModalHeaderProps {
    children?: ReactElement;
    showActionButton?: 'closeButton' | 'backButton';
    onActionButtonClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface ISliderModalBodyProps {
    children?: ReactNode;
}
