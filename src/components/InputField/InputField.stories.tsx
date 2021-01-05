import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputField, IInputFieldProps } from './InputField';
import { FcOk } from 'react-icons/fc';

export default {
    title: 'Components',
    component: InputField,
} as Meta;

const Template: Story<IInputFieldProps> = (args: IInputFieldProps) => <InputField {...args} />;

export const InputFields = Template.bind({});
InputFields.args = {
    placeHolder: 'Sample Text Field',
    disabled: false,
    label: 'Sample Label',
    value: '55865',
    helperText: 'Sample Helper Text',
    type: 'text',
    size: 'default',
    prefix: <FcOk />,
    suffix: <p>pcs</p>,
    required: false,
    onChange: () => void 0,
} as IInputFieldProps;
