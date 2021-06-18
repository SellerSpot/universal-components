import { useState } from '@hookstate/core';
import { CircularProgress as MUICircularProgress, Theme, ThemeProvider } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { getTheme } from '../..';
import { themeConfigStore } from '../ThemeProvider/ThemeProvider';
import { ICircularProgressProps } from './CircularProgress.types';
export { ICircularProgressProps } from './CircularProgress.types';

export const CircularProgress = (props: ICircularProgressProps): ReactElement => {
    // props
    const {
        colors,
        fontSizes,
        theme = 'primary',
        size = 40,
        value = 0,
        variant = 'indeterminate',
    } = props;
    // getting default global theme data
    const defaultConfigData = useState(themeConfigStore);
    // theme
    const circularProgressTheme: Theme = getTheme({
        colors: colors ?? defaultConfigData.colors.get(),
        fontSizes: fontSizes ?? defaultConfigData.fontSizes.get(),
        theme: theme ?? 'auto',
    });

    // draw
    return (
        <ThemeProvider theme={circularProgressTheme}>
            <MUICircularProgress size={size} value={value} variant={variant} />
        </ThemeProvider>
    );
};
