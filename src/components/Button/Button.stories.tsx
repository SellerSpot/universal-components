import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { defaultColors, defaultFontSizes } from '../../theme/storybookTheme';
import { ICONS } from '../../utilities/icons';
import { Button as ButtonComponent, IButtonProps } from './Button';

const Template: Story<IButtonProps> = (args: IButtonProps) => <ButtonComponent {...args} />;

export const Button = Template.bind({});
Button.args = {
    label: 'NOTIFICATIONS',
    variant: 'contained',
    size: 'small',
    theme: 'success',
    disabled: false,
    startIcon: <ICONS.MdNotifications />,
    colors: defaultColors,
    fontSizes: defaultFontSizes,
} as IButtonProps;

export default {
    title: 'Design System/Atoms/Button',
    component: ButtonComponent,
} as Meta;
