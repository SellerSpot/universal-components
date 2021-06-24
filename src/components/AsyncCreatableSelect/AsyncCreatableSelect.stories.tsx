import { useState } from '@hookstate/core';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ISelectOption } from '../../typings/common.types';
import { introduceDelay } from '../../utilities';
import {
    AsyncCreatableSelect as AsyncCreatableSelectComponent,
    IAsyncCreatableSelectProps,
} from './AsyncCreatableSelect';

const Template: Story = () => {
    // state
    const options = useState<ISelectOption[]>([
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
    const selectedOption = useState<ISelectOption>({
        ...options.get()[0],
    });
    const isAdding = useState(false);

    const handleOptionCreation = async () => {
        isAdding.set(true);
        await introduceDelay(2000);
        isAdding.set(false);
    };

    const args: IAsyncCreatableSelectProps = {
        formatCreateLabel: (inputValue) => `Create new brand "${inputValue}"`,
        closeMenuOnSelect: true,
        onCreateOption: handleOptionCreation,
        onChange: (option) => {
            selectedOption.set({ ...option });
        },
        isDisabled: isAdding.get(),
        isLoading: isAdding.get(),
        loadOptions: async (value) => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            await introduceDelay(2000);
            const data = await response.json();
            const optionData: ISelectOption[] = [];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data.map((user: any) => {
                if (user['name'].toString().toLocaleLowerCase().startsWith(value)) {
                    optionData.push({
                        label: user['name'],
                        value: user['id'],
                    });
                }
            });
            return optionData;
        },
    };

    // draw
    return <AsyncCreatableSelectComponent {...args} />;
};

export const AsyncCreatableSelect = Template.bind({});

export default {
    title: 'Universal Components/Atoms/Async Creatable Select',
    component: AsyncCreatableSelectComponent,
} as Meta;
