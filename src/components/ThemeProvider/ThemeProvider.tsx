import React, { ReactElement, useEffect } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core';
import { IColors, IFontSizes } from '../../theme/theme.types';
import { getTheme, IGetThemeProps } from '../../theme/theme';
import '../../styles/core.scss';

export interface IThemeProviderProps {
    children: ReactElement | ReactElement[] | string | number;
    colors: IColors;
    fontSizes: IFontSizes;
}

export function ThemeProvider(props: IThemeProviderProps): ReactElement {
    const { children, colors, fontSizes } = props;
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
