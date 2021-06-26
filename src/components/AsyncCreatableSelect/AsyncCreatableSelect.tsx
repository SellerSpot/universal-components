import { useState } from '@hookstate/core';
import React, { ReactElement } from 'react';
import ReactSelectAsyncCreatable from 'react-select/async-creatable';
import cn from 'classnames';
import { IAsyncCreatableSelectProps } from './AsyncCreatableSelect.types';

export { IAsyncCreatableSelectProps } from './AsyncCreatableSelect.types';

export const AsyncCreatableSelect = (props: IAsyncCreatableSelectProps): ReactElement => {
    // props
    const {
        defaultOptions = [],
        loadOptions,
        autoFocus,
        formatCreateLabel,
        isLoading,
        isMulti,
        menuIsOpen,
        defaultValue,
        name,
        label,
        placeholder,
        onChange,
        closeMenuOnSelect,
        isDisabled,
        onCreateOption,
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
            <ReactSelectAsyncCreatable
                className="react-select-container"
                classNamePrefix={'custom-select'}
                isClearable
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onCreateOption={onCreateOption}
                isDisabled={isDisabled}
                isMulti={isMulti}
                value={value}
                isLoading={isLoading}
                defaultValue={defaultValue}
                closeMenuOnSelect={closeMenuOnSelect}
                menuIsOpen={menuIsOpen}
                autoFocus={autoFocus}
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions={defaultOptions}
                formatCreateLabel={formatCreateLabel}
            />
        </div>
    );
};
