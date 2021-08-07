import { createMuiTheme, Theme } from '@material-ui/core';
import { ICustomThemeProperties, IGetThemeProps } from './theme.types';

export const getTheme = (props: IGetThemeProps): Theme => {
    // props
    const { colors, theme } = props;

    // common MUI theme object (containes common properties)
    const commonMUITheme = {
        typography: {
            fontFamily: 'Inter',
        },
    } as Theme;

    // holds the custom properties to apply to the custom theme object
    let customThemeProperties: ICustomThemeProperties;

    // assigning proAperties
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
        case 'light':
            customThemeProperties = {
                palette: {
                    primary: {
                        light: colors.lightLight,
                        main: colors.light,
                        dark: colors.lightDark,
                        contrastText: colors.foregroundPrimary,
                    },
                },
                text: {
                    primary: colors.foregroundPrimary,
                    secondary: colors.foregroundSecondary,
                },
            };
            break;
    }

    const primaryPalette: Partial<Theme['palette']['primary']> = {
        light: customThemeProperties.palette.primary.light,
        main: customThemeProperties.palette.primary.main,
        dark: customThemeProperties.palette.primary.dark,
    };

    if (customThemeProperties.palette.primary.contrastText) {
        primaryPalette.contrastText = customThemeProperties.palette.primary.contrastText;
    }

    return createMuiTheme(commonMUITheme, <Theme>{
        palette: {
            primary: primaryPalette,
        },
        typography: {
            button: {
                textTransform: 'none',
            },
        },
    });
};
