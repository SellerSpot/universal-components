import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Select as SelectComponent, ISelectProps } from './Select';

const Template: Story<ISelectProps> = (args: ISelectProps) => <SelectComponent {...args} />;

export const Select = Template.bind({});
Select.args = {
    options: [
        {
            text: 'Option 1',
            value: '1',
        },
        {
            text: 'Option 2',
            value: '2',
        },
        {
            text: 'Option 3',
            value: '3',
        },
    ],
    label: 'Select',
    value: '3',
    onChange: (event) => alert(event.target.value),
} as ISelectProps;

export default {
    title: 'Universal Components/Atoms/Select',
    component: SelectComponent,
} as Meta;
