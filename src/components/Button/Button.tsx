import { Button as MUIButton, Theme, ThemeProvider } from '@material-ui/core';
import { getTheme } from '../../theme/theme';
import React, { ReactElement } from 'react';
import { IButtonProps } from './Button.types';
import { useThemeConfigState } from '../ThemeProvider/ThemeProvider';
export { IButtonProps } from './Button.types';

export const Button = (props: IButtonProps): ReactElement => {
    // getting default global theme data
    const defaultConfigData = useThemeConfigState((state) => state.configData);
    const {
        colors,
        fontSizes,
        disabled,
        endIcon,
        fullWidth,
        label,
        onClick,
        size,
        startIcon,
        theme,
        type,
        variant,
        className,
        style,
    } = props;
    // holds the theme for the the component
    const buttonTheme: Theme = getTheme({
        colors: colors ?? defaultConfigData.colors,
        fontSizes: fontSizes ?? defaultConfigData.fontSizes,
        theme: theme ?? 'auto',
    });

    return (
        <div className={className?.wrapper} style={style?.wrapper}>
            <ThemeProvider theme={buttonTheme}>
                <MUIButton
                    variant={variant}
                    color="primary"
                    size={size}
                    fullWidth={fullWidth}
                    type={type}
                    disabled={disabled}
                    onClick={onClick}
                    startIcon={startIcon}
                    endIcon={endIcon}
                >
                    {label}
                </MUIButton>
            </ThemeProvider>
        </div>
    );
};
