import React, { ReactElement, useEffect } from 'react';
import create from 'zustand';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core';
import '../../styles/core.scss';
import { getTheme } from '../../theme/MUITheme';
import { IColors, IFontSizes, IGetThemeProps } from '../../theme/theme.types';
import { colorThemes, fontSizeThemes } from '../../theme/themes';

export interface IThemeProviderProps {
    children?: ReactElement | ReactElement[] | string | number;
    colors?: IColors;
    fontSizes?: IFontSizes;
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
        colors: colorThemes.default,
        fontSizes: fontSizeThemes.default,
    },
    initializeThemeConfig: (data) => {
        set(() => ({
            configData: data,
        }));
    },
}));

export function ThemeProvider(props: IThemeProviderProps): ReactElement {
    // props
    const { children, colors, fontSizes } = props;

    // state
    const { initializeThemeConfig, configData } = useThemeConfigState();
    const { colors: currentColors, fontSizes: currentFontSizes } = configData;

    // effects
    // updating the local store
    useEffect(() => {
        const themeConfigData: TThemeConfigState['configData'] = {
            colors: colors ?? colorThemes.default,
            fontSizes: fontSizes ?? fontSizeThemes.default,
        };
        // pushing the passed theme data into the local store
        initializeThemeConfig(themeConfigData);
    }, [colors, fontSizes]);

    // applying the theme from store to dom
    useEffect(() => {
        Object.keys(currentColors).forEach((key) => {
            document.documentElement.style.setProperty(
                `--${key}-color`,
                colors[key as keyof IColors],
            );
        });
        Object.keys(currentFontSizes).forEach((key) => {
            document.documentElement.style.setProperty(
                `--${key}-fontsize`,
                fontSizes[key as keyof IFontSizes],
            );
        });
    }, [configData]);

    // constructing props early so that the jsx is clean
    const getThemeProps: IGetThemeProps = {
        colors: currentColors,
        fontSizes: currentFontSizes,
        theme: 'primary',
    };

    return <MUIThemeProvider theme={getTheme(getThemeProps)}>{children}</MUIThemeProvider>;
}
