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
    options: ['hello', 'world', 'world', 'world', 'world', 'world', 'world', 'world', 'world'],
    label: 'Label',
    header: (
        <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }}>
            <button>Sample Button</button>
        </div>
    ),
    footer: (
        <div>
            <button>Sample Button</button>
        </div>
    ),
    onSelect: (option: number) => console.log(option),
} as IDropdownProps;
