import { useState } from '@hookstate/core';
import Icon from '@iconify/react';
import {
    CircularProgress,
    InputAdornment,
    TextField as MUITextField,
    ThemeProvider,
} from '@material-ui/core';
import cn from 'classnames';
import { isUndefined } from 'lodash';
import React, { forwardRef, ReactElement, RefObject, useEffect, useRef } from 'react';
import { getTheme } from '../../theme/MUITheme';
import { ICONS } from '../../utilities/icons';
import { IconButton } from '../IconButton/IconButton';
import { themeConfigStore } from '../ThemeProvider/ThemeProvider';
import styles from './InputField.module.scss';
import { IInputFieldProps } from './InputField.types';

export { IInputFieldProps } from './InputField.types';

const InputFieldComponent = (
    props: IInputFieldProps,
    ref: RefObject<HTMLInputElement>,
): ReactElement => {
    // props
    const {
        id,
        name,
        autoFocus,
        direction,
        disabled,
        fullWidth,
        helperMessage,
        label,
        maxLength,
        variant = 'outlined',
        maxNumericValue,
        minNumericValue,
        onBlur,
        onChange,
        onFocus,
        placeHolder,
        prefix,
        required,
        selectTextOnFocus,
        maxRows,
        size = 'medium',
        theme,
        suffix,
        multiline,
        rows,
        type,
        className,
        onKeyDown,
        disableLabelAnimation = true,
        value,
        colors,
        fontSizes,
        disableAutoComplete,
        disableHelperTextPlaceholderPadding,
        tabIndex,
    } = props;

    // state
    const defaultConfigData = useState(themeConfigStore).get();
    // internal type state to use incase the field type is password and the suffix is not defined
    const internalTypeState = useState<'text' | 'password'>('password');

    // hooks
    // internal ref object to manage autoFocus prop enforcing in case
    // and external ref is not provided
    const internalRef = useRef<HTMLInputElement>(null);

    // effects
    // runs when autoFocus value changes to force focus to field
    useEffect(() => {
        // also only runs when an external ref has not been provided
        if (autoFocus) {
            // wait till other animations have been completed
            // so as to not create jank effects
            setTimeout(function () {
                (ref ?? internalRef).current?.focus();
            }, 200);
        }
    }, [autoFocus]);

    // handlers
    const HelperComponent = () => {
        const HelperIcon = (): ReactElement => {
            if (helperMessage.type === 'loading') {
                return (
                    <CircularProgress
                        className={styles.loadingIndicator}
                        size={'10px'}
                        style={{
                            color: defaultConfigData.colors.primary,
                        }}
                    />
                );
            } else if (helperMessage.type === 'success') {
                return <Icon icon={ICONS.check} className={styles.successIcon} height={'16px'} />;
            }
            return null;
        };

        const HelperTextContent = (): ReactElement => {
            return (
                <div
                    className={cn(
                        styles.helperText,
                        {
                            [styles.helperTextDanger]: helperMessage?.type === 'error',
                        },
                        {
                            [styles.helperTextSuccess]: helperMessage?.type === 'success',
                        },
                        {
                            [styles.helperTextWarning]: helperMessage?.type === 'warning',
                        },
                        {
                            [styles.helperTextLoading]: helperMessage?.type === 'loading',
                        },
                    )}
                >
                    {helperMessage?.content}
                </div>
            );
        };

        return (
            <div className={styles.helperComponent}>
                <HelperIcon />
                <HelperTextContent />
            </div>
        );
    };

    // handle inputField onFocus
    const onFocusHandler = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (selectTextOnFocus) {
            event.target.select();
        }
        if (!isUndefined(onFocus)) {
            onFocus(event);
        }
    };

    // handles inputField onChange
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // checking for conditions requiiring controlled input
        if (type === 'number') {
            if (!isUndefined(maxNumericValue) || !isUndefined(minNumericValue)) {
                let value = +event.target.value;

                // checking minimum condition
                if (!isUndefined(minNumericValue) && value <= minNumericValue) {
                    value = minNumericValue;
                }
                // checking maximum condition
                if (!isUndefined(maxNumericValue) && value >= maxNumericValue) {
                    value = maxNumericValue;
                }
                // passing number as string, because we are allowing floating values,
                // which can't be acheived throught input number type
                // pushing controlled value into the event
                event.target.value = Number(value) as unknown as string;
            }
        }
        onChange?.(event);
    };

    // constructs the suffix component for the inputField
    const suffixComponent = (): ReactElement | string | number => {
        const handleSpecialSuffixOnClick = () => {
            if (internalTypeState.get() === 'password') {
                internalTypeState.set('text');
            } else {
                internalTypeState.set('password');
            }
        };

        if (type === 'password' && !suffix) {
            return (
                <IconButton
                    icon={
                        internalTypeState.get() === 'password' ? (
                            <Icon icon={ICONS.visibility} />
                        ) : (
                            <Icon icon={ICONS.visibilityOff} />
                        )
                    }
                    onClick={handleSpecialSuffixOnClick}
                    size={'small'}
                />
            );
        }
        return suffix;
    };

    // returns the type of the inputField
    const inputFieldType = (): IInputFieldProps['type'] => {
        if (type === 'password' && !suffix) {
            return internalTypeState.get();
        }
        return type;
    };

    // compute
    const autoComplete = disableAutoComplete ? 'none' : 'on';

    // choosing theme
    const textFieldTheme = getTheme({
        colors: colors ?? defaultConfigData.colors,
        fontSizes: fontSizes ?? defaultConfigData.fontSizes,
        theme: theme ?? 'auto',
    });

    const addPseudoBottomPadding = !helperMessage?.enabled && !disableHelperTextPlaceholderPadding;
    const addLabelSpace = label?.length > 0;
    const fieldWrapperClassName = cn(
        {
            [styles.inputFieldLabelSpace]: addLabelSpace,
        },
        {
            [styles.inputFieldBottomSpace]: addPseudoBottomPadding,
        },
        { [styles.fullWidthField]: fullWidth },
        className,
    );

    return (
        <div className={fieldWrapperClassName}>
            <ThemeProvider theme={textFieldTheme}>
                <MUITextField
                    id={id}
                    name={name}
                    inputRef={ref ?? internalRef}
                    variant={variant}
                    onChange={onChangeHandler}
                    onBlur={onBlur}
                    autoComplete={autoComplete}
                    onFocus={onFocusHandler}
                    value={value}
                    label={label}
                    multiline={multiline}
                    rows={rows}
                    rowsMax={maxRows}
                    type={inputFieldType()}
                    size={size}
                    fullWidth={fullWidth}
                    placeholder={placeHolder}
                    onKeyDown={onKeyDown}
                    // autoFocus={autoFocus} manually controlled above due to animation jank issue
                    required={required}
                    disabled={disabled}
                    FormHelperTextProps={{
                        className: cn({
                            [styles.helperTextSuccess]: theme === 'success',
                            [styles.helperTextDanger]: theme === 'danger',
                        }),
                    }}
                    InputLabelProps={{
                        shrink: disableLabelAnimation,
                    }}
                    inputProps={{
                        style: {
                            textAlign: direction === 'rtl' ? 'right' : 'left',
                            fontWeight: 500,
                            lineHeight: '22px', // it will give a better height to the input field on textarea type default will be 20px
                        },
                        tabIndex,
                        autoComplete: autoComplete,
                        maxLength: maxLength,
                    }}
                    InputProps={{
                        autoComplete: autoComplete,
                        startAdornment: prefix && (
                            <InputAdornment position={'start'}>{prefix}</InputAdornment>
                        ),
                        endAdornment: suffixComponent() && (
                            <InputAdornment position={'end'}>{suffixComponent()}</InputAdornment>
                        ),
                    }}
                    error={theme === 'danger'}
                />
                {helperMessage?.enabled ? <HelperComponent /> : null}
            </ThemeProvider>
        </div>
    );
};

export const InputField = forwardRef(InputFieldComponent) as typeof InputFieldComponent;
