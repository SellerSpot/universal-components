import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../src/components/ThemeProvider/ThemeProvider';
import '../src/styles/core.scss';
import { defaultColors, defaultFontSizes } from '../src/theme/storybookTheme';

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
