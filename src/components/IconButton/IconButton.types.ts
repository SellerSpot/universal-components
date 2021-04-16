import { ReactElement } from 'react';
import { TMuiThemes } from 'theme';
import { IColors, IFontSizes } from '../../theme/theme.types';

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
    theme?: keyof TMuiThemes;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    colors: IColors;
    fontSizes: IFontSizes;
}
