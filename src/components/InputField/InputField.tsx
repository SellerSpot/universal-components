import {
    CircularProgress,
    InputAdornment,
    TextField as MUITextField,
    ThemeProvider,
} from '@material-ui/core';
import cn from 'classnames';
import { isNull, isUndefined } from 'lodash';
import React, { forwardRef, ReactElement, RefObject, useEffect, useRef, useState } from 'react';
import { getTheme } from '../../theme/theme';
import { ICONS } from '../../utilities/icons';
import { IconButton } from '../IconButton/IconButton';
import { useThemeConfigState } from '../ThemeProvider/ThemeProvider';
import styles from './InputField.module.scss';
import { IInputFieldProps } from './InputField.types';
export { IInputFieldProps } from './InputField.types';

const InputField = (props: IInputFieldProps, ref: RefObject<HTMLInputElement>): ReactElement => {
    // getting default global theme data
    const defaultConfigData = useThemeConfigState((state) => state.configData);
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
        maxNumericValue,
        minNumericValue,
        onBlur,
        onChange,
        onFocus,
        placeHolder,
        prefix,
        required,
        selectTextOnClick,
        size,
        theme,
        suffix,
        type,
        value,
        colors,
        fontSizes,
    } = props;

    // internal type state to use incase the field type is password and the suffix is not defined
    const [internalTypeState, setinternalTypeState] = useState<'text' | 'password'>('password');
    // internal ref object to manage autoFocus prop enforcing in case
    // and external ref is not provided
    const internalRef = useRef<HTMLInputElement>(null);
    // runs when autoFocus value changes to force focus to field
    useEffect(() => {
        // also only runs when an external ref has not been provided
        if (autoFocus && isNull(ref)) {
            // wait till other animations have been completed
            // so as to not create jank effects
            setTimeout(function () {
                internalRef.current?.focus();
            }, 100);
        }
    }, [autoFocus]);

    // choosing theme
    const textFieldTheme = getTheme({
        colors: colors ?? defaultConfigData.colors,
        fontSizes: fontSizes ?? defaultConfigData.fontSizes,
        theme: theme ?? 'auto',
    });

    // holds the helperComponent for the textField
    let helperComponent: ReactElement = null;

    // compiling helperMessageComponent
    if (helperMessage?.enabled) {
        switch (helperMessage?.type) {
            case 'loading':
                helperComponent = (
                    <span className={styles.loadingHelperTextWrapper}>
                        <span className={cn(styles.helperText, styles.loadingHelperContentText)}>
                            {helperMessage?.content}
                        </span>
                    </span>
                );
                break;
            default:
                helperComponent = (
                    <span
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
                        )}
                    >
                        {helperMessage?.content}
                    </span>
                );
                break;
        }
    }

    // handle inputField onFocus
    const onFocusHandler = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (selectTextOnClick) {
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
                console.log(value);

                // checking minimum condition
                if (!isUndefined(minNumericValue) && value <= minNumericValue) {
                    value = minNumericValue;
                }
                // checking maximum condition
                if (!isUndefined(maxNumericValue) && value >= maxNumericValue) {
                    value = maxNumericValue;
                }
                // pushing controlled value into the event
                event.target.value = value + '';
            }
        }
        if (onChange) onChange(event);
    };

    // constructs the suffix component for the inputField
    const suffixComponent = (): ReactElement | string | number => {
        const handleSpecialSuffixOnClick = () => {
            if (internalTypeState === 'password') {
                setinternalTypeState('text');
            } else {
                setinternalTypeState('password');
            }
        };

        if (type === 'password' && !suffix) {
            return (
                <IconButton
                    icon={
                        internalTypeState === 'password' ? (
                            <ICONS.MdVisibility />
                        ) : (
                            <ICONS.MdVisibilityOff />
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
            return internalTypeState;
        }
        return type;
    };

    return (
        <div className={cn({ [styles.inputFieldBottomSpace]: !helperMessage?.enabled })}>
            <ThemeProvider theme={textFieldTheme}>
                <MUITextField
                    id={id}
                    name={name}
                    inputRef={ref ?? internalRef}
                    variant={'outlined'}
                    onChange={onChangeHandler}
                    onBlur={onBlur}
                    onFocus={onFocusHandler}
                    value={value}
                    label={label}
                    type={inputFieldType()}
                    size={size}
                    fullWidth={fullWidth}
                    placeholder={placeHolder}
                    autoFocus={autoFocus}
                    required={required}
                    disabled={disabled}
                    FormHelperTextProps={{
                        className: cn({
                            [styles.helperTextSuccess]: theme === 'success',
                            [styles.helperTextDanger]: theme === 'danger',
                        }),
                    }}
                    inputProps={{
                        style: {
                            textAlign: direction === 'rtl' ? 'right' : 'left',
                            fontWeight: 500,
                        },
                        maxLength: maxLength,
                    }}
                    InputProps={{
                        startAdornment: prefix && (
                            <InputAdornment position={'start'}>{prefix}</InputAdornment>
                        ),
                        endAdornment: suffixComponent() && (
                            <InputAdornment position={'end'}>{suffixComponent()}</InputAdornment>
                        ),
                    }}
                    error={theme === 'danger'}
                    helperText={helperComponent}
                />
            </ThemeProvider>
        </div>
    );
};

export default forwardRef(InputField) as typeof InputField;
