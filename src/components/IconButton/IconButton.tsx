import React, { ReactElement } from 'react';
import { IconButton as MUIIconButton, Theme, ThemeProvider } from '@material-ui/core';
import { getTheme } from '../../theme/theme';
import { useThemeConfigState } from '../ThemeProvider/ThemeProvider';
import { IIconButtonProps } from './IconButton.types';

export { IIconButtonProps } from './IconButton.types';

export const IconButton = (props: IIconButtonProps): ReactElement => {
    const {
        colors,
        fontSizes,
        className,
        disabled,
        icon,
        onClick,
        size,
        theme,
        type,
        inheritColorsFromParent,
    } = props;
    // getting default global theme data
    const defaultConfigData = useThemeConfigState((state) => state.configData);
    // holds the theme for the the component
    const buttonTheme: Theme = getTheme({
        colors: colors ?? defaultConfigData.colors,
        fontSizes: fontSizes ?? defaultConfigData.fontSizes,
        theme: theme ?? 'auto',
    });
    // if the button should inherit the parents colors or not
    const buttonColor = inheritColorsFromParent ? 'inherit' : 'primary';
    return (
        <ThemeProvider theme={buttonTheme}>
            <MUIIconButton
                className={className}
                color={buttonColor}
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
