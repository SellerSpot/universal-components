import React, { ReactElement } from 'react';
import { Chip as MUIChip, Theme, ThemeProvider } from '@material-ui/core';
import { getTheme } from '../../theme/MUITheme';
import styles from './Chip.module.scss';
import { IChipProps } from './Chip.types';
import { themeConfigStore } from '../ThemeProvider/ThemeProvider';
import { useState } from '@hookstate/core';

export { IChipProps } from './Chip.types';

export const Chip = (props: IChipProps): ReactElement => {
    const { colors, fontSizes, label, leadingIcon, theme = 'primary' } = props;
    // getting default global theme data
    const defaultConfigData = useState(themeConfigStore);
    // holds the theme for the the component
    const chipTheme: Theme = getTheme({
        colors: colors ?? defaultConfigData.colors.get(),
        fontSizes: fontSizes ?? defaultConfigData.fontSizes.get(),
        theme: theme ?? 'auto',
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
