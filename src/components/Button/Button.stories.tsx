import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button as ButtonComponent, IButtonProps } from './Button';
import { ICONS } from '../../utilities/icons';
import { defaultColors, defaultFontSizes } from '../../theme/storybookTheme';

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
    title: 'Components/Atoms',
    component: ButtonComponent,
} as Meta;
