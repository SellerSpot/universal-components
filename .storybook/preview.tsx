import React, { ReactElement } from 'react';
import { ThemeProvider } from '../src/components/ThemeProvider/ThemeProvider';
import { defaultColors, defaultFontSizes } from '../src/theme/storybookTheme';
import { BrowserRouter } from 'react-router-dom';
import '../src/styles/core.scss';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
    (Story: () => ReactElement) => (
        <BrowserRouter>
            <ThemeProvider colors={defaultColors} fontSizes={defaultFontSizes}>
                {Story()}
            </ThemeProvider>
        </BrowserRouter>
    ),
];
