import { useState } from '@hookstate/core';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Select as SelectComponent, ISelectProps } from './Select';

const Template: Story = () => {
    // state
    const options = useState<ISelectProps['options']>([
        {
            label: 'Value 1',
            value: 'value1',
        },
        {
            label: 'Value 2',
            value: 'value2',
        },
        {
            label: 'Value 3',
            value: 'value3',
        },
    ]);
    const selectedOption = useState<ISelectProps['options'][0]>({ ...options.get()[0] });

    const args: ISelectProps = {
        options: options.get(),
        closeMenuOnSelect: true,
        label: 'Brand Name',
        helperMessage: {
            enabled: false,
            content: 'Hi there dude!',
            type: 'error',
        },
        onChange: (option) => {
            selectedOption.set({ ...option });
        },
        value: selectedOption.get(),
        defaultValue: options.get()[2],
    };

    // draw
    return <SelectComponent {...args} />;
};

export const Select = Template.bind({});

export default {
    title: 'Universal Components/Atoms/Select',
    component: SelectComponent,
} as Meta;
