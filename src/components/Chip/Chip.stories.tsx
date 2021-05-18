import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { defaultColors, defaultFontSizes } from '../../theme/storybookTheme';
import { ICONS } from '../../utilities/icons';
import { Chip as ChipComponent, IChipProps } from './Chip';

const Template: Story<IChipProps> = (args: IChipProps) => <ChipComponent {...args} />;

export const Chip = Template.bind({});
Chip.args = {
    label: 'Installed',
    theme: 'success',
    leadingIcon: <ICONS.MdCheckCircle />,
    colors: defaultColors,
    fontSizes: defaultFontSizes,
} as IChipProps;

export default {
    title: 'Design System/Atoms/Chip',
    component: ChipComponent,
} as Meta;
