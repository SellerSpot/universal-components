import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Dropdown, IDropdownProps } from './Dropdown';

export default {
    title: 'Components',
    component: Dropdown,
} as Meta;

const Template: Story<IDropdownProps> = (args: IDropdownProps) => <Dropdown {...args} />;

export const Dropdowns = Template.bind({});
Dropdowns.args = {
    options: ['hello', 'world'],
    helperText: 'helper text',
    label: 'Label',
    onSelect: (option: number) => alert(option),
} as IDropdownProps;
