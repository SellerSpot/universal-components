import { useState } from '@hookstate/core';
import cn from 'classnames';
import React, { ReactElement } from 'react';
import ReactSelectAsyncCreatable from 'react-select/async-creatable';
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
        helperMessage,
        name,
        label,
        placeholder,
        onChange,
        closeMenuOnSelect,
        isDisabled,
        onCreateOption,
        formatOptionLabel,
        value,
    } = props;
    // state
    const isFocused = useState(false);
    const isHovered = useState(false);

    // handlers
    const handleFocus = () => {
        isFocused.set(true);
    };
    const handleBlur = () => {
        isFocused.set(false);
    };
    const onWrapperMouseEnterHandler = () => {
        isHovered.set(true);
    };
    const onWrapperMouseLeaveHandler = () => {
        isHovered.set(false);
    };

    // compute
    const labelClassName = cn('custom-select__label', {
        ['custom-select__label--is-focused']: isFocused.get() && !isDisabled,
        ['custom-select__label--is-error']: helperMessage?.type === 'error' && !isDisabled,
    });
    const bottomMessageContent = helperMessage?.content;
    const bottomMessageClassName = cn('custom-select__bottom-message', {
        ['custom-select__bottom-message--is-error']: helperMessage?.type === 'error' && !isDisabled,
    });
    const wrapperClassName = cn('custom-select__wrapper', {
        ['custom-select__wrapper--no-bottom-message']: !helperMessage?.enabled,
    });
    const fieldSetClassName = cn('custom-select__fieldset', {
        ['custom-select__fieldset--is-hovered']: isHovered.get() && !isDisabled && !isFocused.get(),
        ['custom-select__fieldset--is-focused']: isFocused.get() && !isDisabled,
        ['custom-select__fieldset--is-error']: helperMessage?.type === 'error' && !isDisabled,
    });

    // draw
    return (
        <div
            className={wrapperClassName}
            onMouseEnter={onWrapperMouseEnterHandler}
            onMouseLeave={onWrapperMouseLeaveHandler}
        >
            {label && (
                <label className={labelClassName} htmlFor="reactSelect">
                    {label}
                </label>
            )}
            <ReactSelectAsyncCreatable
                className="react-select-container"
                classNamePrefix={'custom-select'}
                name={name}
                formatOptionLabel={formatOptionLabel}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onCreateOption={onCreateOption}
                formatCreateLabel={formatCreateLabel}
                loadOptions={loadOptions}
                isDisabled={isDisabled}
                isMulti={isMulti}
                value={value}
                isLoading={isLoading}
                defaultValue={defaultValue}
                closeMenuOnSelect={closeMenuOnSelect}
                menuIsOpen={menuIsOpen}
                autoFocus={autoFocus}
                defaultOptions={defaultOptions}
                isClearable
                cacheOptions
            />
            <fieldset className={fieldSetClassName}>
                <legend className={'custom-select__fieldset__legend'}>{label}</legend>
            </fieldset>
            {helperMessage?.enabled && (
                <label className={bottomMessageClassName} htmlFor="reactSelect">
                    {bottomMessageContent}
                </label>
            )}
        </div>
    );
};
