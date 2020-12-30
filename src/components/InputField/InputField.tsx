import React from 'react';
import lodash from 'lodash';
import { cx } from '@emotion/css';
import { getInputFieldClasses, IGetInputFieldClasses } from './inputField.styles';

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
    lableStyle?: React.CSSProperties;
    hintTextStyle?: React.CSSProperties;
    prefixStyle?: React.CSSProperties;
    suffixStyle?: React.CSSProperties;
    className?: IGetInputFieldClasses;
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
        <div className={classes.inputFieldWrapper}>
            {lodash.isUndefined(requiredProps.label) ? null : (
                <label className={classes.label} style={requiredProps.lableStyle}>
                    {requiredProps.label}
                    {requiredProps.required ?? false ? (
                        <span className={classes.requiredSpan}>&nbsp;*</span>
                    ) : null}
                </label>
            )}
            <div className={classes.inputWrapperDiv}>
                {lodash.isUndefined(requiredProps.prefix) ? null : (
                    <div className={classes.prefixDiv} style={requiredProps.prefixStyle}>
                        {requiredProps.prefix}
                    </div>
                )}
                <input
                    className={classes.input}
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
                    <div className={classes.suffixDiv} style={requiredProps.suffixStyle}>
                        {requiredProps.suffix}
                    </div>
                )}
            </div>
            {lodash.isUndefined(requiredProps.error) &&
            lodash.isUndefined(requiredProps.helperText) ? null : (
                <label className={classes.helperLabel} style={requiredProps.hintTextStyle}>
                    {lodash.isUndefined(requiredProps.error)
                        ? requiredProps.helperText
                        : requiredProps.error.errorMessage}
                </label>
            )}
        </div>
    );
};
