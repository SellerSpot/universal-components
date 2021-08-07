import { Theme } from '@material-ui/core';

/**
 * Typings for the color system used throughout SellerSpot
 */
export interface IColors {
    // auto (default)
    autoLight: string;
    auto: string;
    autoDark: string;

    // success
    success: string;
    successLight: string;
    successDark: string;

    // danger
    danger: string;
    dangerLight: string;
    dangerDark: string;

    // warning
    warning: string;
    warningLight: string;
    warningDark: string;

    // info (links)
    info: string;
    infoLight: string;
    infoDark: string;

    // light
    light: string;
    lightLight: string;
    lightDark: string;

    // primary app color
    primary: string;
    primaryLight: string;
    primaryDark: string;

    // secondary app color
    accent: string;
    accentLight: string;
    accentDark: string;

    //foreground (text)
    foregroundLight: string;
    foregroundPrimary: string;
    foregroundSecondary: string;
    foregroundTertiary: string;

    // background
    backgroundDark: string;
    backgroundPrimary: string;
    backgroundSecondary: string;
    backgroundTertiary: string;
    backgroundSubTertiary: string;
    backgroundQuarternary: string;

    // special colors
    tableCellBorder: string;
    tableHeaderCellBorder: string;
    inputFieldPlaceholder: string;
    inputFieldLabelDefault: string;
    inputFieldBorderDefault: string;
    inputFieldBorderHover: string;
}

/**
 * Typings for the font system used throughout SellerSpot
 */
export interface IFontSizes {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    p: string;
}

/**
 * Typings for the different kinds of themes in the application
 */
export interface IColorThemes {
    default: IColors;
}

export interface IFontSizeThemes {
    default: IFontSizes;
}

// Interface for the different Material UI themes used in the app
export type TMuiThemes = {
    primary: Theme;
    accent: Theme;
    success: Theme;
    danger: Theme;
    warning: Theme;
    auto: Theme;
    light: Theme;
};

// interface for the different properties being applied to each theme
export interface ICustomThemeProperties {
    palette: {
        primary: {
            light: string;
            main: string;
            dark: string;
            contrastText?: string;
        };
    };
    text: {
        primary: string;
        secondary: string;
    };
}

// interface for the getTheme function
export interface IGetThemeProps {
    colors: IColors;
    fontSizes: IFontSizes;
    theme: keyof TMuiThemes;
}
