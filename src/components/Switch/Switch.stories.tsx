import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Switch as SwitchComponent, ISwitchProps } from './Switch';

const Template: Story<ISwitchProps> = (args: ISwitchProps) => <SwitchComponent {...args} />;

export const Switch = Template.bind({});
Switch.args = {
    checked: true,
} as ISwitchProps;

export default {
    title: 'Design System/Atoms/Switch',
    component: SwitchComponent,
} as Meta;
