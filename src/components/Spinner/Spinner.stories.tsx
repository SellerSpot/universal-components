import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Spinner, ISpinnerProps } from './Spinner';

export default {
    title: 'Components',
    component: Spinner,
} as Meta;

const Template: Story<ISpinnerProps> = (args: ISpinnerProps) => <Spinner {...args} />;

export const Spinners = Template.bind({});
Spinners.args = {
    size: 'small',
} as ISpinnerProps;
