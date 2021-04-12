import { ReactElement } from 'react';
import { IColors, IFontSizes } from 'theme';

export interface IIconButtonProps {
    className?: string;
    /**
     * Content to display inside the button
     */
    icon?: ReactElement;
    type?: 'submit' | 'button' | 'reset';
    size?: 'medium' | 'small';
    /**
     * Different states such as success or danger or warning
     */
    state?: 'success' | 'danger' | 'warning' | 'primary' | 'accent' | 'auto';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    colors: IColors;
    fontSizes: IFontSizes;
}
