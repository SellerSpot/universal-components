import React, { ReactElement } from 'react';
import { TMuiThemes } from '../../theme/theme';
import { IColors, IFontSizes } from '../../theme/theme.types';

export interface IButtonProps {
    /**
     * Content to display inside the button
     */
    label?: string | ReactElement;
    type?: 'submit' | 'button' | 'reset';
    fullWidth?: boolean;
    /**
     * Different styles of buttons
     */
    variant?: 'contained' | 'text' | 'outlined';
    size?: 'small' | 'medium' | 'large';
    /**
     * Different states such as success or danger or warning
     */
    theme?: keyof TMuiThemes;
    disabled?: boolean;
    /** Icons before the label */
    startIcon?: ReactElement;
    /** Icons after the label */
    endIcon?: ReactElement;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    fontSizes?: IFontSizes;
    colors?: IColors;
    /**style and classes */
    style?: Partial<{
        wrapper: React.CSSProperties;
    }>;
    className?: Partial<{
        wrapper: string;
    }>;
}
