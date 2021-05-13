import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { CheckBox as CheckBoxComponent, ICheckBoxProps } from './CheckBox';

const Template: Story<ICheckBoxProps> = (args: ICheckBoxProps) => <CheckBoxComponent {...args} />;

export const CheckBox = Template.bind({});
CheckBox.args = {
    checked: false,
    label: 'Sample Label',
} as ICheckBoxProps;

export default {
    title: 'Components/Atoms',
    component: CheckBoxComponent,
} as Meta;
