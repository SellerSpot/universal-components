import { CircularProgressProps } from '@material-ui/core';
import { IColors, IFontSizes, TMuiThemes } from '../..';

export interface ICircularProgressProps {
    colors?: IColors;
    fontSizes?: IFontSizes;
    size?: string | number;
    value?: number;
    variant?: CircularProgressProps['variant'];
    /**
     * Different states such as success or danger or warning
     */
    theme?: keyof TMuiThemes;
}
