import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { defaultColors, defaultFontSizes } from '../../theme/storybookTheme';
import { Switch as SwitchComponent, ISwitchProps } from './Switch';

const Template: Story<ISwitchProps> = (args: ISwitchProps) => <SwitchComponent {...args} />;

export const Switch = Template.bind({});
Switch.args = {
    colors: defaultColors,
    fontSizes: defaultFontSizes,
    checked: true,
} as ISwitchProps;

export default {
    title: 'Components/Atoms',
    component: SwitchComponent,
} as Meta;
