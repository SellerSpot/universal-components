import React, { ReactElement } from 'react';
import { Switch as MUISwitch, Theme, ThemeProvider } from '@material-ui/core';
import { getTheme } from '../../theme';
import { ISwitchProps } from './Switch.types';
import { useThemeConfigState } from '../ThemeProvider/ThemeProvider';

export { ISwitchProps } from './Switch.types';

export const Switch = (props: ISwitchProps): ReactElement => {
    const { checked, onChange, size, theme, colors, fontSizes } = props;
    // getting default global theme data
    const defaultConfigData = useThemeConfigState((state) => state.configData);
    // holds the theme for the the component
    const switchTheme: Theme = getTheme({
        colors: colors ?? defaultConfigData.colors,
        fontSizes: fontSizes ?? defaultConfigData.fontSizes,
        theme: theme ?? 'primary',
    });
    return (
        <ThemeProvider theme={switchTheme}>
            <MUISwitch checked={checked} onChange={onChange} size={size} color="primary" />
        </ThemeProvider>
    );
};
