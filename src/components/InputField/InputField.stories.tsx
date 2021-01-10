import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputField } from './InputField';
import { FcOk } from 'react-icons/fc';
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
    // label: 'Sample Label',
    // error: {
    //     showError: false,
    //     errorMessage: 'sample Error',
    // },
    style: {
        lableStyle: {
            fontSize: 18,
        },
        inputWrapperDiv: {
            height: 50,
            fontSize: 18,
            padding: '0 10px',
            border: 'none',
            background: '#eeeeee',
        },
    },
    error: {
        showError: true,
        errorMessage: 'Sample error message',
    },
    value: '55865',
    type: 'text',
    size: 'default',
    prefix: <FcOk />,
    suffix: <p>pcs</p>,
    required: false,
    onChange: () => void 0,
} as IInputFieldProps;
