import { CSSProperties, ReactElement, ReactNode } from 'react';

export interface ISliderModalLayoutWrapperProps {
    /**
     * Grid row structure to rearrange the components in the modal page
     * @default ['auto','1fr','auto']
     */
    gridRowStructure?: string[];
    children?: ReactElement | ReactElement[];
    subSliderModals?: ReactElement[];
}
export interface ISliderModalHeaderProps {
    title?: string;
    modalCloseCallback?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    modalGoBackCallback?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface ISliderModalBodyProps {
    children?: ReactNode;
}
export interface ISliderModalFooterProps {
    children?: ReactNode;
}

export interface ISliderModalProps {
    showModal: boolean;
    type: 'absolute' | 'fixed';
    /**
     * If the backdrop should be shown
     * @default true
     */
    showBackdrop?: boolean;
    width: CSSProperties['width'];
    onBackdropClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    children?: ReactNode;
}
