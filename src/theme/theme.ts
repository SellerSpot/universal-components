import { createMuiTheme, Theme } from '@material-ui/core';
import { IColors, IFontSizes } from './theme.types';

// Interface for the different Material UI themes used in the app
type TMuiThemes = {
    primary: Theme;
    accent: Theme;
    success: Theme;
    danger: Theme;
    warning: Theme;
    auto: Theme;
};

// interface for the different properties being applied to each theme
interface ICustomThemeProperties {
    palette: {
        primary: {
            light: string;
            main: string;
            dark: string;
        };
    };
    text: {
        primary: string;
        secondary: string;
    };
}

export interface IGetThemeProps {
    colors: IColors;
    fontSizes: IFontSizes;
    theme: keyof TMuiThemes;
}

export const getTheme = (props: IGetThemeProps): Theme => {
    const { colors, fontSizes, theme } = props;

    // common MUI theme object (containes common properties)
    const commonMUITheme = <Theme>{
        typography: {
            fontFamily: 'Inter',
        },
    };
    // holds the custom properties to apply to the custom theme object
    let customThemeProperties: ICustomThemeProperties;
    // assigning properties
    switch (theme) {
        case 'primary':
            customThemeProperties = {
                palette: {
                    primary: {
                        light: colors.primaryLight,
                        main: colors.primary,
                        dark: colors.primaryDark,
                    },
                },
                text: {
                    primary: colors.foregroundPrimary,
                    secondary: colors.foregroundSecondary,
                },
            };
            break;
        case 'accent':
            customThemeProperties = {
                palette: {
                    primary: {
                        light: colors.accentLight,
                        main: colors.accent,
                        dark: colors.accentDark,
                    },
                },
                text: {
                    primary: colors.foregroundPrimary,
                    secondary: colors.foregroundSecondary,
                },
            };
            break;
        case 'success':
            customThemeProperties = {
                palette: {
                    primary: {
                        light: colors.successLight,
                        main: colors.success,
                        dark: colors.successDark,
                    },
                },
                text: {
                    primary: colors.foregroundPrimary,
                    secondary: colors.foregroundSecondary,
                },
            };
            break;
        case 'danger':
            customThemeProperties = {
                palette: {
                    primary: {
                        light: colors.dangerLight,
                        main: colors.danger,
                        dark: colors.dangerDark,
                    },
                },
                text: {
                    primary: colors.foregroundPrimary,
                    secondary: colors.foregroundSecondary,
                },
            };
            break;
        case 'warning':
            customThemeProperties = {
                palette: {
                    primary: {
                        light: colors.warningLight,
                        main: colors.warning,
                        dark: colors.warningDark,
                    },
                },
                text: {
                    primary: colors.foregroundPrimary,
                    secondary: colors.foregroundSecondary,
                },
            };
            break;
        case 'auto':
            customThemeProperties = {
                palette: {
                    primary: {
                        light: colors.autoLight,
                        main: colors.auto,
                        dark: colors.autoDark,
                    },
                },
                text: {
                    primary: colors.foregroundPrimary,
                    secondary: colors.foregroundSecondary,
                },
            };
            break;
    }

    return createMuiTheme(commonMUITheme, <Theme>{
        palette: {
            primary: {
                light: customThemeProperties.palette.primary.light,
                main: customThemeProperties.palette.primary.main,
                dark: customThemeProperties.palette.primary.dark,
            },
            text: {
                primary: customThemeProperties.text.primary,
                secondary: customThemeProperties.text.secondary,
            },
        },
    });
};