import React, { ReactElement } from 'react';
import { IconButton as MUIIconButton, Theme, ThemeProvider } from '@material-ui/core';
import { getTheme } from '../../theme/MUITheme';
import { themeConfigStore } from '../ThemeProvider/ThemeProvider';
import { useState } from '@hookstate/core';
import styles from './IconButton.module.scss';
import cn from 'classnames';
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
    const defaultConfigData = useState(themeConfigStore).get();
    // holds the theme for the the component
    const buttonTheme: Theme = getTheme({
        colors: colors ?? defaultConfigData.colors,
        fontSizes: fontSizes ?? defaultConfigData.fontSizes,
        theme: theme ?? 'auto',
    });
    // if the button should inherit the parents colors or not
    const buttonColor = inheritColorsFromParent ? 'inherit' : 'primary';
    const buttonClassName = cn({ [styles.smallSize]: size === 'small' }, className);

    return (
        <ThemeProvider theme={buttonTheme}>
            <MUIIconButton
                className={buttonClassName}
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
