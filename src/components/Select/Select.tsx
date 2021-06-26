import { useState } from '@hookstate/core';
import React, { ReactElement } from 'react';
import ReactSelect from 'react-select';
import cn from 'classnames';
import { ISelectProps } from './Select.types';

export { ISelectProps } from './Select.types';

export const Select = (props: ISelectProps): ReactElement => {
    // props
    const {
        options = [],
        autoFocus,
        isLoading,
        isMulti,
        menuIsOpen,
        defaultValue,
        name,
        onChange,
        label,
        closeMenuOnSelect,
        isDisabled,
        value,
    } = props;

    // state
    const isFocused = useState(false);

    // handlers
    const handleFocus = () => {
        isFocused.set(true);
    };
    const handleBlur = () => {
        isFocused.set(false);
    };

    // compute
    const labelClassName = cn('react-select-component-label', {
        ['react-select-component-label--is-focused']: isFocused.get(),
    });

    // draw
    return (
        <div className={'react-select-component-wrapper'}>
            {label && (
                <label className={labelClassName} htmlFor="reactSelect">
                    {label}
                </label>
            )}
            <ReactSelect
                id={'reactSelect'}
                className="react-select-container"
                classNamePrefix={'custom-select'}
                isClearable
                name={name}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                isDisabled={isDisabled}
                isMulti={isMulti}
                value={value}
                isLoading={isLoading}
                defaultValue={defaultValue}
                closeMenuOnSelect={closeMenuOnSelect}
                menuIsOpen={menuIsOpen}
                autoFocus={autoFocus}
                options={options}
            />
        </div>
    );
};
