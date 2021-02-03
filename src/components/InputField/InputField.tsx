import lodash from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { cx } from '@emotion/css';
import { getInputFieldClasses } from './inputField.styles';
import { IInputFieldProps } from './inputField.types';

export const selectInputFieldText = (event: React.FocusEvent<HTMLInputElement>): void =>
    event.target.select();

export const InputField: React.FC<IInputFieldProps> = (props: IInputFieldProps): JSX.Element => {
    // state to store if the inputField is focused
    const [inputFieldFocused, setInputFieldFocused] = useState(false);
    // reference to handle input element focus
    const inputElementRef = useRef<HTMLInputElement>(null);

    const defaultProps: IInputFieldProps = {
        focus: false,
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
    const classes = getInputFieldClasses(requiredProps, inputFieldFocused);

    useEffect(() => {
        if (requiredProps.focus) {
            inputElementRef.current.focus();
            requiredProps.focus = false;
        }
    }, [requiredProps.focus]);

    return (
        <div
            className={cx(
                classes.inputFieldOverallWrapper,
                requiredProps.className?.inputFieldOverallWrapper,
            )}
            style={requiredProps.style?.inputFieldOverallWrapper}
            onFocus={() => setInputFieldFocused(true)}
            onBlur={() => setInputFieldFocused(false)}
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
                        onFocus={() => console.log('Focused Prefix')}
                        onBlur={() => console.log('Unfocused Prefix')}
                        style={requiredProps.style?.prefixWrapper}
                    >
                        {requiredProps.prefix}
                    </div>
                )}
                <input
                    ref={inputElementRef}
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
                    tabIndex={requiredProps.tabIndex}
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
