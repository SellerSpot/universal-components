import { Button as MUIButton, Theme, ThemeProvider } from '@material-ui/core';
import { getTheme } from '../../theme/theme';
import React, { ReactElement } from 'react';
import { IButtonProps } from './Button.types';
export { IButtonProps } from './Button.types';

export const Button = (props: IButtonProps): ReactElement => {
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
        state,
        type,
        variant,
    } = props;
    // holds the theme for the the component
    const buttonTheme: Theme = getTheme({
        colors,
        fontSizes,
        theme: state,
    });

    return (
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
    );
};
