import React, { ReactElement, useEffect } from 'react';
import create from 'zustand';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core';
import '../../styles/core.scss';
import { defaultColors, defaultFontSizes } from '../../theme/storybookTheme';
import { getTheme, IGetThemeProps } from '../../theme/theme';
import { IColors, IFontSizes } from '../../theme/theme.types';

export interface IThemeProviderProps {
    children?: ReactElement | ReactElement[] | string | number;
    colors: IColors;
    fontSizes: IFontSizes;
}

interface IGlobalThemeConfig {
    colors: IColors;
    fontSizes: IFontSizes;
}

type TThemeConfigState = {
    configData: IGlobalThemeConfig;
    initializeThemeConfig: (data: IGlobalThemeConfig) => void;
};
// holds the global shared themeConfig used instead of passing colors
// and font sizes when each and every component is used in host app
export const useThemeConfigState = create<TThemeConfigState>((set) => ({
    configData: {
        colors: defaultColors,
        fontSizes: defaultFontSizes,
    },
    initializeThemeConfig: (data) => {
        set(() => ({
            configData: data,
        }));
    },
}));

export function ThemeProvider(props: IThemeProviderProps): ReactElement {
    const { children, colors, fontSizes } = props;
    const initializeThemeConfig = useThemeConfigState((state) => state.initializeThemeConfig);

    useEffect(() => {
        // pushing the passed theme data into the local store
        initializeThemeConfig({
            colors,
            fontSizes,
        });
    }, []);

    // applying the theme from store to dom
    useEffect(() => {
        Object.keys(colors).forEach((key) => {
            document.documentElement.style.setProperty(
                `--${key}-color`,
                colors[key as keyof IColors],
            );
        });
        Object.keys(fontSizes).forEach((key) => {
            document.documentElement.style.setProperty(
                `--${key}-fontsize`,
                fontSizes[key as keyof IFontSizes],
            );
        });
    }, [colors, fontSizes]);

    // constructing props early so that the jsx is clean
    const getThemeProps: IGetThemeProps = {
        colors: colors,
        fontSizes: fontSizes,
        theme: 'primary',
    };

    return <MUIThemeProvider theme={getTheme(getThemeProps)}>{children}</MUIThemeProvider>;
}
