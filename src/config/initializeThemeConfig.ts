import { IColors, IFontSizes } from '../theme';
import { defaultColors, defaultFontSizes } from '../theme/storybookTheme';
import create from 'zustand';

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
export const themeConfigState = create<TThemeConfigState>((set) => ({
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

// exposing the specific function to package hosts
export const { initializeThemeConfig } = themeConfigState.getState();
