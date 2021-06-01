import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ICONS } from '../../utilities';
import { Button as ButtonComponent, IButtonProps } from './Button';
import Icon from '@iconify/react';

const Template: Story<IButtonProps> = (args: IButtonProps) => <ButtonComponent {...args} />;

export const Button = Template.bind({});
Button.args = {
    label: 'NOTIFICATIONS',
    variant: 'contained',
    size: 'small',
    theme: 'success',
    disabled: false,
    startIcon: <Icon icon={ICONS.notifications} />,
} as IButtonProps;

export default {
    title: 'Design System/Atoms/Button',
    component: ButtonComponent,
} as Meta;
