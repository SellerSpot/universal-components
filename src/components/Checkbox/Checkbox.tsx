import React, { ReactElement } from 'react';
import { cx } from '@emotion/css';
import { ICheckboxProps } from './checkbox.types';
import { getCheckboxClasses } from './checkbox.styles';
import lodash from 'lodash';
import { MdCheck } from 'react-icons/md';

export const Checkbox = (props: ICheckboxProps): JSX.Element => {
    const defaultProps: ICheckboxProps = {
        options: ['Option 1', 'Option 2', 'Option 3'],
        selectedValues: [],
        onChange: () => void 0,
    };
    const requiredProps = lodash.merge(defaultProps, props);

    const classes = getCheckboxClasses();

    return (
        <div
            className={cx(
                classes.checkboxGroupWrapper,
                requiredProps.className?.checkboxGroupWrapper,
            )}
            style={requiredProps.style?.checkboxGroupWrapper}
        >
            {requiredProps.options.map((option, index) => {
                const isSelected = requiredProps.selectedValues.includes(option);
                return (
                    <div style={{ display: 'flex' }} key={index}>
                        <input
                            type="checkbox"
                            id={option}
                            name={option}
                            value={option}
                            onChange={requiredProps.onChange}
                            style={{ opacity: 0, width: '0', height: '0' }}
                        />
                        <label
                            className={cx(
                                classes.checkBoxWrapper,
                                requiredProps.className?.checkBoxWrapper,
                            )}
                            style={requiredProps.style?.checkBoxWrapper}
                            htmlFor={option}
                        >
                            <div
                                className={cx(
                                    cx(classes.checkBox, requiredProps.className?.checkBox),
                                    {
                                        [cx(
                                            classes.checkBoxActive,
                                            requiredProps.className?.checkBoxActive,
                                        )]: isSelected,
                                    },
                                )}
                                style={lodash.merge(
                                    requiredProps.style?.checkBox,
                                    isSelected ? requiredProps.style?.checkBoxActive : {},
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
                                            )]: !isSelected,
                                        },
                                    )}
                                    style={lodash.merge(
                                        requiredProps.style?.checkBoxCheckIcon,
                                        !isSelected
                                            ? requiredProps.style?.checkBoxCheckIconInactive
                                            : null,
                                    )}
                                />
                            </div>
                            {option}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};
