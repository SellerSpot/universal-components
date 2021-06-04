import React, { ReactElement, useEffect } from 'react';
import { useState, createState, State } from '@hookstate/core';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core';
import '../../styles/core.scss';
import { getTheme } from '../../theme/MUITheme';
import { IColors, IFontSizes, IGetThemeProps } from '../../theme/theme.types';
import { colorThemes, fontSizeThemes } from '../../theme/themes';
import {
    IGlobalThemeConfigState,
    IThemeConfigActions,
    IThemeProviderProps,
} from './ThemeProvider.types';

export const themeConfigStore = createState<IGlobalThemeConfigState>({
    colors: colorThemes.default,
    fontSizes: fontSizeThemes.default,
});

// holds the global shared themeConfig used instead of passing colors
// and font sizes when each and every component is used in host app
const themeConfigStateActions = (state: State<IGlobalThemeConfigState>): IThemeConfigActions => ({
    initializeThemeConfig: (data) => {
        state.set(data);
    },
});

const themeConfigActions = () => themeConfigStateActions(themeConfigStore);
export const { initializeThemeConfig } = themeConfigActions();

export function ThemeProvider(props: IThemeProviderProps): ReactElement {
    // props
    const { children, colors = colorThemes.default, fontSizes = fontSizeThemes.default } = props;

    // state
    const { initializeThemeConfig } = themeConfigActions();
    const configState = useState(themeConfigStore);
    const { colors: currentColors, fontSizes: currentFontSizes } = configState.get();

    // effects
    // updating the local store
    useEffect(() => {
        const themeConfigData: IGlobalThemeConfigState = {
            colors: colors,
            fontSizes: fontSizes,
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
    }, [configState]);

    // constructing props early so that the jsx is clean
    const getThemeProps: IGetThemeProps = {
        colors: currentColors,
        fontSizes: currentFontSizes,
        theme: 'primary',
    };

    return <MUIThemeProvider theme={getTheme(getThemeProps)}>{children}</MUIThemeProvider>;
}
