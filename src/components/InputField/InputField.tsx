import React from 'react';
import lodash from 'lodash';
import { cx } from '@emotion/css';
import { getInputFieldClasses } from './inputField.styles';
import { IInputFieldProps } from './inputField.types';

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
        onFocus: () => void 0,
        onBlur: () => void 0,
    };

    const requiredProps = lodash.merge(defaultProps, props);
    const classes = getInputFieldClasses(requiredProps);

    return (
        <div
            className={cx(
                classes.inputFieldOverallWrapper,
                requiredProps.className?.inputFieldOverallWrapper,
            )}
            style={requiredProps.style?.inputFieldOverallWrapper}
        >
            {lodash.isUndefined(requiredProps.label) ? null : (
                <label
                    className={cx(classes.label, requiredProps.className?.label)}
                    style={requiredProps.style?.label}
                >
                    {requiredProps.label}
                    {requiredProps.required ?? false ? (
                        <span
                            className={cx(
                                classes.requiredSpan,
                                requiredProps.className?.requiredSpan,
                            )}
                            style={requiredProps.style?.requiredSpan}
                        >
                            &nbsp;*
                        </span>
                    ) : null}
                </label>
            )}
            <div
                className={cx(classes.inputWrapperDiv, requiredProps.className?.inputWrapperDiv)}
                style={requiredProps.style?.inputWrapperDiv}
            >
                {lodash.isUndefined(requiredProps.prefix) ? null : (
                    <div
                        className={cx(
                            classes.prefixWrapper,
                            requiredProps.className?.prefixWrapper,
                        )}
                        style={requiredProps.style?.prefixWrapper}
                    >
                        {requiredProps.prefix}
                    </div>
                )}
                <input
                    title={requiredProps.title}
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
                    style={requiredProps.style?.input}
                />
                {lodash.isUndefined(requiredProps.suffix) ? null : (
                    <div
                        className={cx(
                            classes.suffixWrapper,
                            requiredProps.className?.suffixWrapper,
                        )}
                        style={requiredProps.style?.suffixWrapper}
                    >
                        {requiredProps.suffix}
                    </div>
                )}
            </div>
            <label
                className={cx(classes.helperLabel, requiredProps.className?.helperLabel)}
                style={requiredProps.style?.helperLabel}
            >
                {lodash.isUndefined(requiredProps.error) || !requiredProps.error?.showError
                    ? requiredProps.helperText ?? <br />
                    : requiredProps.error.errorMessage}
            </label>
        </div>
    );
};
