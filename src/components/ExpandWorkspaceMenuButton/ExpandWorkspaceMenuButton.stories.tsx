import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import {
    ExpandWorkspaceMenuButton as ExpandWorkspaceMenuButtonComponent,
    IExpandWorkspaceMenuButtonProps,
} from './ExpandWorkspaceMenuButton';

const Template: Story = () => <ExpandWorkspaceMenuButtonComponent />;

export const ExpandWorkspaceMenuButton = Template.bind({});
ExpandWorkspaceMenuButton.args = {} as IExpandWorkspaceMenuButtonProps;

export default {
    title: 'Components/Atoms',
    component: ExpandWorkspaceMenuButtonComponent,
} as Meta;
