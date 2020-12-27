import React from 'react';
import lodash from 'lodash';
import styled, { css } from 'styled-components';
import { cssColors, cssVariables } from '../config';

export interface IInputFieldProps {
    placeHolder?: string;
    label?: string;
    helperText?: string;
    disabled?: boolean;
    value?: string;
    type?: 'number' | 'text' | 'email' | 'password';
    size?: 'compact' | 'default';
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    required?: boolean;
    error?: {
        showError: boolean;
        errorMessage: string;
    };
    selectTextOnFocus?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
}

export const selectInputFieldText = (event: React.FocusEvent<HTMLInputElement>): void =>
    event.target.select();

export const InputField: React.FC<IInputFieldProps> = (props: IInputFieldProps): JSX.Element => {
    const defaultProps: IInputFieldProps = {
        disabled: false,
        type: 'text',
        size: 'default',
        required: false,
        selectTextOnFocus: true,
        onChange: () => void 0,
        style: {},
    };

    const requiredProps = lodash.merge(defaultProps, props);

    const InputFieldWrapper = styled.div`
        width: 100%;
        height: auto;
    `;

    const Label = styled.label`
        display: block;
        font-size: ${cssVariables['--font-size-secondary']};
        font-weight: 600;
        margin-bottom: 5px;
    `;

    const HelperLabel = styled.label`
        font-size: ${cssVariables['--font-size-tertiary']};
        margin-top: 2px;
        font-weight: 400;
        color: ${lodash.isUndefined(requiredProps.error)
            ? cssColors['--tertiary-font-color']
            : cssColors['--danger-color']};
    `;

    const RequiredSpan = styled.span`
        color: ${cssColors['--danger-color']};
    `;

    const InputWrapperDiv = styled.div`
        display: flex;
        height: ${requiredProps.size === 'compact'
            ? cssVariables['--input-field-small-height']
            : cssVariables['--input-field-height']};
    `;

    const PrefixDiv = styled.div`
        width: ${cssVariables['--input-field-height']};
        border: 1px solid;
        border-radius: ${cssVariables['--border-radius']};
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${requiredProps.disabled
            ? cssColors['--disabled-color']
            : cssColors['--input-background-color']};

        padding: ${requiredProps.size === 'compact' ? 0 : '4px'};

        border-color: ${requiredProps.size === 'compact'
            ? 'transparent'
            : requiredProps.error?.showError
            ? cssColors['--danger-color']
            : cssColors['--input-border-color']};
    `;

    const SuffixDiv = styled.div`
        width: ${cssVariables['--input-field-height']};
        border: 1px solid;
        border-radius: ${cssVariables['--border-radius']};
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${requiredProps.disabled
            ? cssColors['--disabled-color']
            : cssColors['--input-background-color']};

        padding: ${requiredProps.size === 'compact' ? 0 : '4px'};

        border-color: ${requiredProps.size === 'compact'
            ? 'transparent'
            : requiredProps.error?.showError
            ? cssColors['--danger-color']
            : cssColors['--input-border-color']};
    `;

    const Input = styled.input`
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        font-size: ${cssVariables['--font-size-secondary']};
        border-radius: ${cssVariables['--border-radius']};
        border: 1px solid;
        padding: 0 5px;
        padding-top: 1px;

        border-color: ${requiredProps.size === 'compact'
            ? 'transparent'
            : requiredProps.error?.showError
            ? cssColors['--danger-color']
            : cssColors['--input-border-color']};

        border-top-left-radius: ${lodash.isUndefined(requiredProps.prefix)
            ? cssVariables['--border-radius']
            : 0};
        border-bottom-left-radius: ${lodash.isUndefined(requiredProps.prefix)
            ? cssVariables['--border-radius']
            : 0};
        border-left-width: ${lodash.isUndefined(requiredProps.prefix) ? '1px' : 0};

        border-top-right-radius: ${lodash.isUndefined(requiredProps.suffix)
            ? cssVariables['--border-radius']
            : 0};
        border-bottom-right-radius: ${lodash.isUndefined(requiredProps.suffix)
            ? cssVariables['--border-radius']
            : 0};
        border-right-width: ${lodash.isUndefined(requiredProps.suffix) ? '1px' : 0};

        :focus {
            outline: 0;
        }
    `;

    return (
        <InputFieldWrapper>
            {lodash.isUndefined(requiredProps.label) ? null : <Label>{requiredProps.label}</Label>}
            {requiredProps.required ?? false ? <RequiredSpan>*</RequiredSpan> : null}
            <InputWrapperDiv>
                {lodash.isUndefined(requiredProps.prefix) ? null : (
                    <PrefixDiv>{requiredProps.prefix}</PrefixDiv>
                )}
                <Input
                    onFocus={requiredProps.selectTextOnFocus ? selectInputFieldText : null}
                    disabled={requiredProps.disabled}
                    placeholder={requiredProps.placeHolder}
                    type={requiredProps.type}
                    required={requiredProps.required}
                    value={requiredProps.value}
                    onChange={requiredProps.onChange}
                    style={requiredProps.style}
                />
                {lodash.isUndefined(requiredProps.suffix) ? null : (
                    <SuffixDiv>{requiredProps.suffix}</SuffixDiv>
                )}
            </InputWrapperDiv>
            {lodash.isUndefined(requiredProps.error) &&
            lodash.isUndefined(requiredProps.helperText) ? null : (
                <HelperLabel>
                    {lodash.isUndefined(requiredProps.error)
                        ? requiredProps.helperText
                        : requiredProps.error.errorMessage}
                </HelperLabel>
            )}
        </InputFieldWrapper>
    );
};
