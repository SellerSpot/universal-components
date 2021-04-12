import { ReactElement } from 'react';
import { TMuiThemes } from 'theme';
import { IColors, IFontSizes } from '../../theme/theme.types';

export interface IChipProps {
    label?: string;
    /**
     * Different states such as success or danger or warning
     */
    state?: keyof TMuiThemes;
    /**
     * Leading icon for the chip
     */
    leadingIcon?: ReactElement;
    colors: IColors;
    fontSizes: IFontSizes;
}
