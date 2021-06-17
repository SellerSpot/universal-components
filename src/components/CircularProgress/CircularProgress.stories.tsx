import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import {
    CircularProgress as CircularProgressComponent,
    ICircularProgressProps,
} from './CircularProgress';

const Template: Story<ICircularProgressProps> = (args: ICircularProgressProps) => (
    <CircularProgressComponent {...args} />
);

export const CircularProgress = Template.bind({});
CircularProgress.args = {
    theme: 'primary',
} as ICircularProgressProps;

export default {
    title: 'Universal Components/Atoms/Circular Progress',
    component: CircularProgressComponent,
    parameters: {
        layout: 'centered',
    },
} as Meta;
