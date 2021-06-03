import { ReactElement } from 'react';
import { IColors, IFontSizes } from '../..';

export interface IThemeProviderProps {
    children?: ReactElement | ReactElement[] | string | number;
    colors?: IColors;
    fontSizes?: IFontSizes;
}

export interface IGlobalThemeConfigState {
    colors: IColors;
    fontSizes: IFontSizes;
}

export interface IThemeConfigActions {
    initializeThemeConfig: (data: IGlobalThemeConfigState) => void;
}
