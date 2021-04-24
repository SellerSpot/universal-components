import React, { ReactElement } from 'react';
import { Chip as MUIChip, Theme, ThemeProvider } from '@material-ui/core';
import { IChipProps } from './Chip.types';
import styles from './Chip.module.scss';
import { getTheme } from '../../theme/theme';

export const Chip = (props: IChipProps): ReactElement => {
    const { colors, fontSizes, label, leadingIcon, theme } = props;
    // holds the theme for the the component
    const chipTheme: Theme = getTheme({
        colors,
        fontSizes,
        theme: theme,
    });

    return (
        <ThemeProvider theme={chipTheme}>
            <MUIChip
                className={styles.chip}
                icon={leadingIcon}
                variant="default"
                size="small"
                label={label}
                color="primary"
            />
        </ThemeProvider>
    );
};

export { IChipProps } from './Chip.types';
