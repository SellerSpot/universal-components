import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Chip as ChipComponent, IChipProps } from './Chip';
import { ICONS } from '../../utilities/icons';
import { defaultColors, defaultFontSizes } from '../../theme/storybookTheme';

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
    title: 'Components/Atoms',
    component: ChipComponent,
} as Meta;
