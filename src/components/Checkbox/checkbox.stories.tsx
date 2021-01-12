import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Checkbox } from './Checkbox';
import { css } from '@emotion/css';
import { ICheckboxProps } from './checkbox.types';

export default {
    title: 'Components',
    component: Checkbox,
} as Meta;

const Template: Story<ICheckboxProps> = (args: ICheckboxProps) => <Checkbox {...args} />;

export const Checkboxs = Template.bind({});
Checkboxs.args = {} as ICheckboxProps;
