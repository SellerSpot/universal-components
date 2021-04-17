import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { defaultColors, defaultFontSizes } from '../../theme/storybookTheme';
import InputFieldComponent, { IInputFieldProps } from './InputField';

const Template: Story<IInputFieldProps> = (args: IInputFieldProps) => {
    return (
        <div
            style={{
                maxWidth: '300px',
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
    type: 'text',
    direction: 'ltr',
    // prefix: <h6>₹</h6>,
    suffix: <h6>.sellerspot.in</h6>,
    placeHolder: 'Placeholder text',
    theme: 'primary',
    required: false,
    value: 'Prefilled Value',
    selectTextOnClick: true,
    helperMessage: {
        enabled: true,
        content: 'Loading data...',
        type: 'loading',
    },
    colors: defaultColors,
    fontSizes: defaultFontSizes,
} as IInputFieldProps;

export default {
    title: 'Components/Atoms',
    component: InputFieldComponent,
} as Meta;
