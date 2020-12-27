import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, IButtonProps } from './Button';

export default {
    title: 'Components',
    component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args: IButtonProps) => <Button {...args} />;

export const Buttons = Template.bind({});
Buttons.args = {
    label: 'Sample Button',
    status: 'default',
    type: 'button',
} as IButtonProps;
