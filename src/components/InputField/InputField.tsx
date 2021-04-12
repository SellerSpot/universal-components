import {
    CircularProgress,
    InputAdornment,
    TextField as MUITextField,
    ThemeProvider,
} from '@material-ui/core';
import cn from 'classnames';
import { isNull, isUndefined } from 'lodash';
import React, { forwardRef, ReactElement, RefObject, useEffect, useRef } from 'react';
import { getTheme } from '../../theme/theme';
import styles from './InputField.module.scss';
import { IInputFieldProps } from './InputField.types';
export { IInputFieldProps } from './InputField.types';

const InputField = (props: IInputFieldProps, ref: RefObject<HTMLInputElement>): ReactElement => {
    const {
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
        state,
        suffix,
        type,
        value,
        colors,
        fontSizes,
    } = props;

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
        colors,
        fontSizes,
        theme: state,
    });

    // holds the helperComponent for the textField
    let helperComponent: ReactElement = null;

    // compiling helperMessageComponent
    if (helperMessage?.enabled) {
        switch (helperMessage?.type) {
            case 'loading':
                helperComponent = (
                    <div className={styles.loadingHelperTextWrapper}>
                        <CircularProgress color={'primary'} size={'10px'} />
                        <p className={cn(styles.helperText, styles.loadingHelperContentText)}>
                            {helperMessage?.content}
                        </p>
                    </div>
                );
                break;
            default:
                helperComponent = (
                    <p
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
                    </p>
                );
                break;
        }
    }

    return (
        <div className={cn({ [styles.inputFieldBottomSpace]: !helperMessage?.enabled })}>
            <ThemeProvider theme={textFieldTheme}>
                <MUITextField
                    inputRef={ref ?? internalRef}
                    variant={'outlined'}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={(event) => {
                        if (selectTextOnClick) {
                            event.target.select();
                        }
                        if (!isUndefined(onFocus)) {
                            onFocus(event);
                        }
                    }}
                    value={value}
                    label={label}
                    type={type}
                    size={size}
                    fullWidth={fullWidth}
                    placeholder={placeHolder}
                    autoFocus={autoFocus}
                    required={required}
                    disabled={disabled}
                    FormHelperTextProps={{
                        className: cn({
                            [styles.helperTextSuccess]: state === 'success',
                            [styles.helperTextDanger]: state === 'danger',
                        }),
                    }}
                    inputProps={{
                        style: {
                            textAlign: direction === 'rtl' ? 'right' : 'left',
                            fontWeight: 500,
                        },
                        max: maxNumericValue,
                        min: minNumericValue,
                        maxLength: maxLength,
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position={'start'}>{prefix}</InputAdornment>
                        ),
                        endAdornment: <InputAdornment position={'end'}>{suffix}</InputAdornment>,
                    }}
                    error={state === 'danger'}
                    helperText={helperComponent}
                />
            </ThemeProvider>
        </div>
    );
};

export default forwardRef(InputField) as typeof InputField;
