import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ICONS } from '../../utilities';
import { Chip as ChipComponent, IChipProps } from './Chip';
import Icon from '@iconify/react';

const Template: Story<IChipProps> = (args: IChipProps) => <ChipComponent {...args} />;

export const Chip = Template.bind({});
Chip.args = {
    label: 'Installed',
    theme: 'danger',
    leadingIcon: <Icon icon={ICONS.checkCircleOutline} />,
} as IChipProps;

export default {
    title: 'Design System/Atoms/Chip',
    component: ChipComponent,
} as Meta;
