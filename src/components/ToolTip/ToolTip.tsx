import { createMuiTheme, ThemeProvider, Tooltip, TooltipProps } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { getTheme, IColors, IFontSizes } from '../../theme';
import { useThemeConfigState } from '../ThemeProvider/ThemeProvider';

export interface IToolTipProps {
    children?: TooltipProps['children'];
    placement?: TooltipProps['placement'];
    colors?: IColors;
    fontSizes?: IFontSizes;
    /**
     * Content of the tooltip
     */
    content: string;
    enterDelay?: number;
}

export const ToolTip = (props: IToolTipProps): ReactElement => {
    const { children, colors, fontSizes, content, placement, enterDelay } = props;
    // getting default global theme data
    const defaultConfigData = useThemeConfigState((state) => state.configData);
    // compiling the theme for the tooltip
    const tooltipMUITheme = createMuiTheme(
        getTheme({
            colors: colors ?? defaultConfigData.colors,
            fontSizes: fontSizes ?? defaultConfigData.fontSizes,
            theme: 'primary',
        }),
        {
            overrides: {
                MuiTooltip: {
                    tooltip: {
                        padding: '10px',
                        fontSize: '12px',
                        color: colors?.foregroundLight ?? defaultConfigData.colors.foregroundLight,
                        backgroundColor:
                            colors?.backgroundDark ?? defaultConfigData.colors.backgroundDark,
                        fontWeight: 500,
                    },
                },
            },
        },
    );

    return (
        <ThemeProvider theme={tooltipMUITheme}>
            <Tooltip title={content} placement={placement} enterDelay={enterDelay}>
                {children}
            </Tooltip>
        </ThemeProvider>
    );
};
