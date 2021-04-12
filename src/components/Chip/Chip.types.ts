import { ReactElement } from 'react';
import { IColors, IFontSizes } from 'theme';

export interface IChipProps {
    label?: string;
    /**
     * Different states such as success or danger or warning
     */
    state?: 'success' | 'danger' | 'warning' | 'primary' | 'accent' | 'auto';
    /**
     * Leading icon for the chip
     */
    leadingIcon?: ReactElement;
    colors: IColors;
    fontSizes: IFontSizes;
}
