import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
    ExpandPluginMenuButton as ExpandPluginMenuButtonComponent,
    IExpandPluginMenuButtonProps,
} from './ExpandPluginMenuButton';

const Template: Story = () => <ExpandPluginMenuButtonComponent />;

export const ExpandPluginMenuButton = Template.bind({});
ExpandPluginMenuButton.args = {} as IExpandPluginMenuButtonProps;

export default {
    title: 'Design System/Atoms/Expand Plugin Menu Button',
    component: ExpandPluginMenuButtonComponent,
} as Meta;
