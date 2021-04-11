import React, { ReactElement } from 'react';
import { ThemeProvider } from '../src/components/ThemeProvider/ThemeProvider';
import { defaultColors, defaultFontSizes } from '../src/theme/storybookTheme';
import '../src/styles/core.scss';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
    (Story: () => ReactElement) => (
        <ThemeProvider colors={defaultColors} fontSizes={defaultFontSizes}>
            <Story />
        </ThemeProvider>
    ),
];
