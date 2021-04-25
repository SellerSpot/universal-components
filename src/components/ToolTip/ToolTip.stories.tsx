import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { defaultColors, defaultFontSizes } from '../../theme/storybookTheme';
import { IToolTipProps, ToolTip as ToolTipComponent } from './ToolTip';

const Template: Story<IToolTipProps> = () => {
    return (
        <ToolTipComponent
            content={'Sample Tooltip'}
            placement={'right'}
            colors={defaultColors}
            fontSizes={defaultFontSizes}
        >
            <div
                style={{
                    width: '100px',
                    height: '50px',
                    padding: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '5px',
                    backgroundColor: 'lightblue',
                    color: 'white',
                }}
            >
                Hover for demo
            </div>
        </ToolTipComponent>
    );
};

export const ToolTip = Template.bind({});
export default {
    title: 'Components/Atoms',
    component: ToolTipComponent,
} as Meta;
