import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
    ExpandWorkspaceMenuButton as ExpandWorkspaceMenuButtonComponent,
    IExpandWorkspaceMenuButtonProps,
} from './ExpandWorkspaceMenuButton';

const Template: Story = () => <ExpandWorkspaceMenuButtonComponent />;

export const ExpandWorkspaceMenuButton = Template.bind({});
ExpandWorkspaceMenuButton.args = {} as IExpandWorkspaceMenuButtonProps;

export default {
    title: 'Design System/Atoms/Expand Workspace Menu Button',
    component: ExpandWorkspaceMenuButtonComponent,
} as Meta;
