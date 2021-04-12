import { IconButton as MUIIconButton, Theme, ThemeProvider } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { getTheme } from '../../theme/theme';
import { IIconButtonProps } from './IconButton.types';
export { IIconButtonProps } from './IconButton.types';

export const IconButton = (props: IIconButtonProps): ReactElement => {
    const { colors, fontSizes, className, disabled, icon, onClick, size, state, type } = props;
    // holds the theme for the the component
    const buttonTheme: Theme = getTheme({
        colors,
        fontSizes,
        theme: state,
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
