import { useState } from '@hookstate/core';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import {
    CreatableSelect as CreatableSelectComponent,
    ICreatableSelectProps,
} from './CreatableSelect';

const Template: Story = () => {
    // state
    const options = useState<ICreatableSelectProps['options']>([
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
    const selectedOption = useState<ICreatableSelectProps['options'][0]>({ ...options.get()[0] });

    const args: ICreatableSelectProps = {
        options: options.get(),
        formatCreateLabel: (inputValue) => `Create new brand "${inputValue}"`,
        closeMenuOnSelect: true,
        onCreateOption: (option) => {
            const newOption: ICreatableSelectProps['options'][0] = {
                label: option,
                value: option,
            };
            options.set((state) => {
                state.unshift(newOption);
                return state;
            });
            selectedOption.set(newOption);
        },
        onChange: (option) => {
            selectedOption.set({ ...option });
        },
        value: selectedOption.get(),
        menuIsOpen: true,
        defaultValue: options.get()[2],
    };

    // draw
    return <CreatableSelectComponent {...args} />;
};

export const CreatableSelect = Template.bind({});

export default {
    title: 'Universal Components/Atoms/Creatable Select',
    component: CreatableSelectComponent,
} as Meta;
