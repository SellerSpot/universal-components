import { ReactElement, ReactNode } from 'react';

interface IMenuItems {
    content: ReactNode;
    /**
     * If true, the left and right padding is removed.
     */
    disableGutters?: boolean;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

export type IMenuChildrenProps = (props: {
    openMenuHandler: (eventElement: HTMLElement) => void;
}) => ReactElement;

export interface IMenuProps {
    children?: IMenuChildrenProps;
    onClose?: () => void;
    dense?: boolean;
    items?: IMenuItems[];
}
