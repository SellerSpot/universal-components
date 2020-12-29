import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ConfirmDialog, IConfirmDialogProps } from './ConfirmDialog';

export default {
    title: 'Components',
    component: ConfirmDialog,
} as Meta;

const Template: Story<IConfirmDialogProps> = (args: IConfirmDialogProps) => (
    <ConfirmDialog {...args} />
);

export const ConfirmDialogs = Template.bind({});
ConfirmDialogs.args = {
    active: true,
    content: <div>Are you Sure?</div>,
} as IConfirmDialogProps;