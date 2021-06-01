import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../src/components/ThemeProvider/ThemeProvider';
import '../src/styles/core.scss';
import { colorThemes, fontSizeThemes } from '../src/theme/themes';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
    (Story: () => ReactElement) => (
        <BrowserRouter>
            <ThemeProvider colors={colorThemes.default} fontSizes={fontSizeThemes.default}>
                {Story()}
            </ThemeProvider>
        </BrowserRouter>
    ),
];
