import { IColors, IColorThemes, IFontSizes, IFontSizeThemes } from './theme.types';

/**
 * Contains the different color themes used in the app
 */
const defaultColors: IColors = {
    // auto (default)
    auto: '#878682',
    autoLight: '#AFAEAC',
    autoDark: '#5E5D5A',

    // success
    success: '#43AA8B',
    successLight: '#EDF7ED',
    successDark: '#2F7560',

    // danger
    danger: '#F44336',
    dangerLight: '#FDECEA',
    dangerDark: '#D5190B',

    // warning
    warning: '#FF9800',
    warningLight: '#FFF4E5',
    warningDark: '#B86E00',

    // info
    info: '#2196F3',
    infoLight: '#77BEF8',
    infoDark: '#0A6FC2',

    // light
    light: '#FAFAFA',
    lightLight: '#ECECEC',
    lightDark: '#F2F2F2',

    // app theme color
    primary: '#1A73E8',
    primaryLight: '#D9E8FC',
    primaryDark: '#1152A7',

    // app secondary theme color
    accent: '#EE8572',
    accentLight: '#F8D0C9',
    accentDark: '#E65237',

    // foreground (text)
    foregroundLight: '#FAFAFA',
    foregroundPrimary: '#5A5A5A',
    foregroundSecondary: '#767676',
    foregroundTertiary: '#C6C5C4',

    // background
    backgroundDark: '#212121',
    backgroundPrimary: '#FAFAFA',
    backgroundSecondary: '#F2F2F2',
    backgroundTertiary: '#ECECEC',
    backgroundSubTertiary: 'rgba(0, 0, 0, 0.1)',
    backgroundQuarternary: '#e0e0e0',

    // special colors
    tableHeaderCellBorder: 'rgb(209, 207, 207)',
    tableCellBorder: 'rgba(224, 224, 224, 1)',
    inputFieldPlaceholder: '#b7b7b7',
    inputFieldBorderDefault: '#c0c0c0',
    inputFieldLabelDefault: '#767676',
    inputFieldBorderHover: '#283545',
};

/**
 * Contains the different font size themes used in the app
 */
const defaultFontSizes: IFontSizes = {
    h1: '32px',
    h2: '24px',
    h3: '20px',
    h4: '18px',
    h5: '15px',
    h6: '14px',
    p: '14px',
};

export const colorThemes: IColorThemes = {
    default: defaultColors,
};

export const fontSizeThemes: IFontSizeThemes = {
    default: defaultFontSizes,
};
