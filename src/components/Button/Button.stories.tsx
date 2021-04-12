import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { defaultColors, defaultFontSizes } from '../../theme/storybookTheme';
import { ICONS } from '../../utilities/icons';
import { Button as ButtonComponent, IButtonProps } from './Button';

const Template: Story<IButtonProps> = (args: IButtonProps) => <ButtonComponent {...args} />;

export const Button = Template.bind({});
Button.args = {
    label: 'Notifications',
    variant: 'contained',
    size: 'small',
    state: 'success',
    disabled: false,
    startIcon: <ICONS.OTHER.NOTIFICATION />,
    colors: defaultColors,
    fontSizes: defaultFontSizes,
} as IButtonProps;

export default {
    title: 'Components/Atoms',
    component: ButtonComponent,
} as Meta;
