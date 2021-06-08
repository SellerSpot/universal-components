import { CSSProperties, ReactElement } from 'react';

export interface IDialogLayoutWrapperProps {
    /**
     * Grid row structure to rearrange the components in the modal page
     * @default ['auto','1fr','auto']
     */
    gridRowStructure?: string[];
    children?: ReactElement[];
    height?: string | number;
}

export interface IDialogHeaderProps {
    title: string;
    dialogCloseCallback?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface IDialogBodyProps {
    children?: ReactElement;
}

export interface IDialogFooterProps {
    children?: ReactElement[];
    justifyContent?: 'flex-start' | 'flex-end' | 'space-between';
}

export interface IDialogProps {
    showDialog: boolean;
    width?: CSSProperties['width'];
    onBackdropClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    children?: ReactElement;
}
