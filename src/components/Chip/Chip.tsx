import React, { ReactElement } from 'react';
import { Chip as MUIChip, Theme, ThemeProvider } from '@material-ui/core';
import { getTheme } from '../../theme/MUITheme';
import styles from './Chip.module.scss';
import { IChipProps } from './Chip.types';

export { IChipProps } from './Chip.types';

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
