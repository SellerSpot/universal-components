import React from 'react';
import { FcOk } from 'react-icons/fc';
import { Meta, Story } from '@storybook/react/types-6-0';
import { InputField } from './InputField';
import { IInputFieldProps } from './inputField.types';

export default {
    title: 'Components',
    component: InputField,
} as Meta;

const Template: Story<IInputFieldProps> = (args: IInputFieldProps) => <InputField {...args} />;

export const InputFields = Template.bind({});
InputFields.args = {
    // helperText: 'Sample Helper Text',
    placeHolder: 'Sample Text Field',
    disabled: false,
    focus: false,
    // error: {
    //     showError: true,
    //     errorMessage: 'Sample error message',
    // },
    value: '55865',
    type: 'text',
    size: 'default',
    // prefix: <FcOk />,
    suffix: <p>pcs</p>,
    required: false,
    onChange: () => void 0,
} as IInputFieldProps;
