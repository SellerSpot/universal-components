import React from 'react';
import lodash from 'lodash';
import { cx } from '@emotion/css';
import { getInputFieldClasses, IGetInputFieldClasses } from './inputField.styles';

export interface IInputFieldProps {
    name?: string;
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
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    style?: {
        lableStyle?: React.CSSProperties;
        hintTextStyle?: React.CSSProperties;
        prefixStyle?: React.CSSProperties;
        suffixStyle?: React.CSSProperties;
        inputStyle?: React.CSSProperties;
        searchDropdownStyle?: React.CSSProperties;
    };
    className?: IGetInputFieldClasses;
    searchDropdown?: {
        show: boolean;
        content: JSX.Element;
        dropDownHeight: React.CSSProperties['height'];
    };
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
    const classes = getInputFieldClasses(requiredProps);

    return (
        <div className={cx(classes.inputFieldWrapper, requiredProps.className?.inputFieldWrapper)}>
            {lodash.isUndefined(requiredProps.label) ? null : (
                <label
                    className={cx(classes.label, requiredProps.className?.label)}
                    style={requiredProps.style?.lableStyle}
                >
                    {requiredProps.label}
                    {requiredProps.required ?? false ? (
                        <span
                            className={cx(
                                classes.requiredSpan,
                                requiredProps.className?.requiredSpan,
                            )}
                        >
                            &nbsp;*
                        </span>
                    ) : null}
                </label>
            )}
            <div className={cx(classes.inputWrapperDiv, requiredProps.className?.inputWrapperDiv)}>
                {lodash.isUndefined(requiredProps.prefix) ? null : (
                    <div
                        className={cx(classes.prefixDiv, requiredProps.className?.prefixDiv)}
                        style={requiredProps.style?.prefixStyle}
                    >
                        {requiredProps.prefix}
                    </div>
                )}
                <input
                    name={requiredProps.name}
                    className={cx(classes.input, requiredProps.className?.input)}
                    onFocus={(event) => {
                        if (requiredProps.selectTextOnFocus) selectInputFieldText;
                        requiredProps.onFocus(event);
                    }}
                    onClick={requiredProps.onClick}
                    onBlur={requiredProps.onBlur}
                    disabled={requiredProps.disabled}
                    placeholder={requiredProps.placeHolder}
                    type={requiredProps.type}
                    required={requiredProps.required}
                    value={requiredProps.value}
                    onChange={requiredProps.onChange}
                    style={requiredProps.style?.inputStyle}
                />
                {lodash.isUndefined(requiredProps.suffix) ? null : (
                    <div
                        className={cx(classes.suffixDiv, requiredProps.className?.suffixDiv)}
                        style={requiredProps.style?.suffixStyle}
                    >
                        {requiredProps.suffix}
                    </div>
                )}
                <div
                    className={cx(classes.searchDropdown, requiredProps.className?.searchDropdown)}
                    style={requiredProps.style?.searchDropdownStyle}
                >
                    {requiredProps.searchDropdown?.content}
                </div>
            </div>
            <label
                className={cx(classes.helperLabel, requiredProps.className?.helperLabel)}
                style={requiredProps.style?.hintTextStyle}
            >
                {lodash.isUndefined(requiredProps.error) || !requiredProps.error?.showError
                    ? requiredProps.helperText ?? <br />
                    : requiredProps.error.errorMessage}
            </label>
        </div>
    );
};
