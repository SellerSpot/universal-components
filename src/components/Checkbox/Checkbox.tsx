import React, { ReactElement, useState } from 'react';
import { cx } from '@emotion/css';
import { ICheckboxProps } from './checkbox.types';
import { getCheckboxClasses } from './checkbox.styles';
import lodash from 'lodash';
import { MdCheck } from 'react-icons/md';

export const Checkbox = (props: ICheckboxProps): JSX.Element => {
    const defaultProps: ICheckboxProps = {
        checked: false,
        disabled: false,
        label: 'This is sample label',
        onChange: () => void 0,
    };
    const requiredProps = lodash.merge(defaultProps, props);
    const classes = getCheckboxClasses(requiredProps);
    return (
        <div
            className={cx(classes.checkboxGroupWrapper, props.className?.checkboxGroupWrapper)}
            style={requiredProps.style?.checkboxGroupWrapper}
        >
            {lodash.isUndefined(requiredProps.groupLabel) ? null : (
                <label
                    className={cx(
                        classes.checkBoxGroupLabel,
                        requiredProps.className?.checkBoxGroupLabel,
                    )}
                    style={requiredProps.style?.checkBoxGroupLabel}
                >
                    {requiredProps.groupLabel}
                </label>
            )}

            <div
                style={{
                    display: 'flex',
                }}
            >
                <input
                    type="checkbox"
                    disabled={requiredProps.disabled ?? false}
                    id={requiredProps.label}
                    name={requiredProps.label}
                    onChange={(event) => requiredProps.onChange(event)}
                    style={{ opacity: 0, width: '0', height: '0' }}
                />
                <label
                    className={cx(
                        classes.checkBoxWrapper,
                        requiredProps.className?.checkBoxWrapper,
                    )}
                    style={requiredProps.style?.checkBoxWrapper}
                    htmlFor={requiredProps.label}
                >
                    <div
                        className={cx(cx(classes.checkBox, requiredProps.className?.checkBox), {
                            [cx(
                                classes.checkBoxActive,
                                requiredProps.className?.checkBoxActive,
                            )]: requiredProps.checked,
                        })}
                        style={lodash.merge(
                            requiredProps.style?.checkBox,
                            requiredProps.checked ? requiredProps.style?.checkBoxActive : {},
                        )}
                    >
                        <MdCheck
                            className={cx(
                                cx(
                                    classes.checkBoxCheckIcon,
                                    requiredProps.className?.checkBoxCheckIcon,
                                ),
                                {
                                    [cx(
                                        classes.checkBoxCheckIconInactive,
                                        requiredProps.className?.checkBoxCheckIconInactive,
                                    )]: !requiredProps.checked,
                                },
                            )}
                            style={lodash.merge(
                                requiredProps.style?.checkBoxCheckIcon,
                                !requiredProps.checked
                                    ? requiredProps.style?.checkBoxCheckIconInactive
                                    : null,
                            )}
                        />
                    </div>
                    {requiredProps.label}
                </label>
            </div>
            {lodash.isUndefined(requiredProps.helperText) &&
            (lodash.isUndefined(requiredProps.error) || !requiredProps.error?.showError) ? null : (
                <label
                    className={cx(classes.helperLabel, requiredProps.className?.helperLabel)}
                    style={requiredProps.style?.helperLabel}
                >
                    {lodash.isUndefined(requiredProps.error) || !requiredProps.error?.showError
                        ? requiredProps.helperText
                        : requiredProps.error?.errorMessage}
                </label>
            )}
        </div>
    );
};
