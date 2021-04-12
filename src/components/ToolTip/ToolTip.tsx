import { createMuiTheme, ThemeProvider, Tooltip, TooltipProps } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { getTheme, IColors, IFontSizes } from '../../theme';

export interface IToolTipProps {
    children: TooltipProps['children'];
    placement?: TooltipProps['placement'];
    colors: IColors;
    fontSizes: IFontSizes;
    /**
     * Content of the tooltip
     */
    content: string;
}

export const ToolTip = (props: IToolTipProps): ReactElement => {
    const { children, colors, fontSizes, content, placement } = props;
    // compiling the theme for the tooltip
    const tooltipMUITheme = createMuiTheme(
        getTheme({
            colors,
            fontSizes,
            theme: 'primary',
        }),
        {
            overrides: {
                MuiTooltip: {
                    tooltip: {
                        padding: '10px',
                        fontSize: '12px',
                        color: colors.foregroundLight,
                        backgroundColor: colors.backgroundDark,
                        fontWeight: 500,
                    },
                },
            },
        },
    );

    return (
        <ThemeProvider theme={tooltipMUITheme}>
            <Tooltip title={content} placement={placement}>
                {children}
            </Tooltip>
        </ThemeProvider>
    );
};
