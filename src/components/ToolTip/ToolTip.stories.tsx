import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { IToolTipProps, ToolTip as ToolTipComponent } from './ToolTip';

const Template: Story<IToolTipProps> = () => {
    return (
        <ToolTipComponent content="Sample Tooltip" placement="right">
            <h4>Hover for Demo</h4>
        </ToolTipComponent>
    );
};

export const ToolTip = Template.bind({});
export default {
    title: 'Universal Components/Atoms/Tool Tip',
    component: ToolTipComponent,
    parameters: {
        layout: 'centered',
    },
} as Meta;
