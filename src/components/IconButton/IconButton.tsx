import React, { ReactElement } from 'react';
import { IconButton as MUIIconButton, Theme, ThemeProvider } from '@material-ui/core';
import { getTheme } from '../../theme/theme';
import { useThemeConfigState } from '../ThemeProvider/ThemeProvider';
import { IIconButtonProps } from './IconButton.types';

export { IIconButtonProps } from './IconButton.types';

export const IconButton = (props: IIconButtonProps): ReactElement => {
    const { colors, fontSizes, className, disabled, icon, onClick, size, theme, type } = props;
    // getting default global theme data
    const defaultConfigData = useThemeConfigState((state) => state.configData);
    // holds the theme for the the component
    const buttonTheme: Theme = getTheme({
        colors: colors ?? defaultConfigData.colors,
        fontSizes: fontSizes ?? defaultConfigData.fontSizes,
        theme: theme ?? 'auto',
    });
    return (
        <ThemeProvider theme={buttonTheme}>
            <MUIIconButton
                className={className}
                color="primary"
                size={size}
                type={type}
                disabled={disabled}
                onClick={onClick}
            >
                {icon}
            </MUIIconButton>
        </ThemeProvider>
    );
};
