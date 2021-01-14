import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Checkbox } from './Checkbox';
import { ICheckboxProps } from './checkbox.types';

export default {
    title: 'Components',
    component: Checkbox,
} as Meta;

const Template: Story<ICheckboxProps> = (args: ICheckboxProps) => <Checkbox {...args} />;

export const Checkboxs = Template.bind({});
Checkboxs.args = {
    groupLabel: 'Please select your option',
    label: 'Do you want a Starship',
    onChange: (event) => console.log(event.target.checked),
} as ICheckboxProps;
