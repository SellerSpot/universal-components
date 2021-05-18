import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { defaultColors, defaultFontSizes } from '../../theme/storybookTheme';
import InputFieldComponent, { IInputFieldProps } from './InputField';

const Template: Story<IInputFieldProps> = (args: IInputFieldProps) => {
    return (
        <div
            style={{
                maxWidth: '300px',
                marginLeft: '40px',
            }}
        >
            <InputFieldComponent {...args} />
        </div>
    );
};

export const InputField = Template.bind({});
InputField.args = {
    label: 'Input Field',
    autoFocus: false,
    disabled: false,
    type: 'number',
    minNumericValue: 0,
    maxNumericValue: 100,
    direction: 'ltr',
    size: 'medium',
    // prefix: <h6>₹</h6>,
    // suffix: <h6>.sellerspot.in</h6>,
    placeHolder: 'Placeholder text',
    theme: 'primary',
    required: false,
    selectTextOnFocus: true,
    fullWidth: true,
    helperMessage: {
        enabled: true,
        content: 'Loading data...',
        type: 'loading',
    },
    colors: defaultColors,
    fontSizes: defaultFontSizes,
} as IInputFieldProps;

export default {
    title: 'Design System/Atoms/Input Field',
    component: InputFieldComponent,
} as Meta;
