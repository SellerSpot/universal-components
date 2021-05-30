import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { IToolTipProps, ToolTip as ToolTipComponent } from './ToolTip';

const Template: Story<IToolTipProps> = () => {
    return (
        <ToolTipComponent content={'Sample Tooltip'} placement={'right'}>
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
    title: 'Design System/Atoms/Tool Tip',
    component: ToolTipComponent,
} as Meta;
