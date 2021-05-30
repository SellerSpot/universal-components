import cn from 'classnames';
import React, { ReactElement } from 'react';
import { Button as MUIButton, Theme, ThemeProvider } from '@material-ui/core';
import { getTheme } from '../../theme/MUITheme';
import { useThemeConfigState } from '../ThemeProvider/ThemeProvider';
import styles from './Button.module.scss';
import { IButtonProps } from './Button.types';

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
        inheritColorsFromParent,
    } = props;
    // holds the theme for the the component
    const buttonTheme: Theme = getTheme({
        colors: colors ?? defaultConfigData.colors,
        fontSizes: fontSizes ?? defaultConfigData.fontSizes,
        theme: theme ?? 'auto',
    });

    // if the button should inherit the parents colors or not
    const buttonColor = inheritColorsFromParent ? 'inherit' : 'primary';

    return (
        <div
            className={cn(className?.wrapper, { [styles.fullWidthButton]: fullWidth })}
            style={style?.wrapper}
        >
            <ThemeProvider theme={buttonTheme}>
                <MUIButton
                    variant={variant}
                    color={buttonColor}
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
