import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { defaultColors, defaultFontSizes } from '../../theme/storybookTheme';
import { ICONS } from '../../utilities/icons';
import { Chip as ChipComponent, IChipProps } from './Chip';

const Template: Story<IChipProps> = (args: IChipProps) => <ChipComponent {...args} />;

export const Chip = Template.bind({});
Chip.args = {
    label: 'Installed',
    state: 'success',
    leadingIcon: <ICONS.OTHER.SUCCESS_CHECK_CIRCLE />,
    colors: defaultColors,
    fontSizes: defaultFontSizes,
} as IChipProps;

export default {
    title: 'Components/Atoms',
    component: ChipComponent,
} as Meta;
