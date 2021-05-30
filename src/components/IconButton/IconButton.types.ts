import { ReactElement } from 'react';
import { TMuiThemes, IColors, IFontSizes } from '../../theme/theme';

export interface IIconButtonProps {
    className?: string;
    /**
     * Content to display inside the button
     */
    icon?: ReactElement;
    type?: 'submit' | 'button' | 'reset';
    size?: 'medium' | 'small';
    /**
     * If the button should inherit colors from its parent
     */
    inheritColorsFromParent?: boolean;
    /**
     * Different states such as success or danger or warning
     */
    theme?: keyof TMuiThemes;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    colors?: IColors;
    fontSizes?: IFontSizes;
}
