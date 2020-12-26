import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, IButtonProps } from '../..';

export default {
    title: 'Components',
    component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args: IButtonProps) => <Button {...args} />;

export const Buttons = Template.bind({});
Buttons.args = {
    label: 'Sample Label',
    backgroundColor: '--success-color',
    disabled: false,
    labelColor: '--light-font-color',
    shape: 'rectangle',
    size: 'medium',
    type: 'button',
    style: {},
    variant: 'solid',
    onClick: () => void 0,
} as IButtonProps;
