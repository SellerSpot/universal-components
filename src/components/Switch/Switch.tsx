import React, { ReactElement } from 'react';
import { Switch as MUISwitch, Theme, ThemeProvider } from '@material-ui/core';
import { ISwitchProps } from './Switch.types';
export { ISwitchProps } from './Switch.types';
import { getTheme } from '../../theme';

export const Switch = (props: ISwitchProps): ReactElement => {
    const { checked, onChange, size, theme, colors, fontSizes } = props;
    // holds the theme for the the component
    const switchTheme: Theme = getTheme({
        colors,
        fontSizes,
        theme: theme ?? 'primary',
    });
    return (
        <ThemeProvider theme={switchTheme}>
            <MUISwitch checked={checked} onChange={onChange} size={size} color="primary" />
        </ThemeProvider>
    );
};
