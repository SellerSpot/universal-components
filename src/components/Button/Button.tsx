import cn from 'classnames';
import React, { ReactElement } from 'react';
import { Button as MUIButton, CircularProgress, Theme, ThemeProvider } from '@material-ui/core';
import { getTheme } from '../../theme/MUITheme';
import { themeConfigStore } from '../ThemeProvider/ThemeProvider';
import styles from './Button.module.scss';
import { IButtonProps } from './Button.types';
import { useState } from '@hookstate/core';

export { IButtonProps } from './Button.types';

export const Button = (props: IButtonProps): ReactElement => {
    // getting default global theme data
    const defaultConfigData = useState(themeConfigStore);
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
        tabIndex,
        inheritColorsFromParent,
        isLoading = false,
    } = props;
    // holds the theme for the the component
    const buttonTheme: Theme = getTheme({
        colors: colors ?? defaultConfigData.colors.get(),
        fontSizes: fontSizes ?? defaultConfigData.fontSizes.get(),
        theme: theme ?? 'auto',
    });

    // compute
    // if the button should inherit the parents colors or not
    const buttonColor = inheritColorsFromParent ? 'inherit' : 'primary';
    const startIconComponent = isLoading ? (
        <ThemeProvider theme={buttonTheme}>
            <CircularProgress size={'16px'} color="inherit" />
        </ThemeProvider>
    ) : (
        startIcon
    );

    // compute
    const shouldFadeButton = disabled || isLoading;
    const buttonClassName = cn({ [styles.fadeButton]: shouldFadeButton }, className?.button);

    return (
        <div className={cn(className?.wrapper, { [styles.fullWidthButton]: fullWidth })}>
            <ThemeProvider theme={buttonTheme}>
                <MUIButton
                    className={buttonClassName}
                    variant={variant}
                    color={buttonColor}
                    tabIndex={tabIndex}
                    size={size}
                    disableRipple={shouldFadeButton}
                    fullWidth={fullWidth}
                    type={type}
                    onClick={onClick}
                    startIcon={startIconComponent}
                    endIcon={endIcon}
                    style={style?.button}
                >
                    {label}
                </MUIButton>
            </ThemeProvider>
        </div>
    );
};
