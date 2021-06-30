import { useState } from '@hookstate/core';
import React, { ReactElement } from 'react';
import ReactSelectCreatable from 'react-select/creatable';
import cn from 'classnames';
import { ICreatableSelectProps } from './CreatableSelect.types';

export { ICreatableSelectProps } from './CreatableSelect.types';

export const CreatableSelect = (props: ICreatableSelectProps): ReactElement => {
    // props
    const {
        options = [],
        autoFocus,
        formatCreateLabel,
        isLoading,
        isMulti,
        menuIsOpen,
        defaultValue,
        helperMessage,
        name,
        label,
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
    const labelClassName = cn('custom-select__label', {
        ['custom-select__label--is-focused']: isFocused.get(),
    });
    const bottomMessageContent = helperMessage?.content;
    const bottomMessageClassName = cn('custom-select__bottom-message', {
        ['custom-select__bottom-message--is-error']: helperMessage?.type === 'error',
    });
    const wrapperClassName = cn('custom-select__wrapper', {
        ['custom-select__wrapper--no-bottom-message']: !bottomMessageContent,
    });

    // draw
    return (
        <div className={wrapperClassName}>
            {label && (
                <label className={labelClassName} htmlFor="reactSelect">
                    {label}
                </label>
            )}
            <ReactSelectCreatable
                className="react-select-container"
                classNamePrefix={'custom-select'}
                isClearable
                name={name}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={onChange}
                onCreateOption={onCreateOption}
                isDisabled={isDisabled}
                isMulti={isMulti}
                value={value}
                isLoading={isLoading}
                defaultValue={defaultValue}
                closeMenuOnSelect={closeMenuOnSelect}
                menuIsOpen={menuIsOpen}
                autoFocus={autoFocus}
                options={options}
                formatCreateLabel={formatCreateLabel}
            />
            {helperMessage?.enabled && (
                <label className={bottomMessageClassName} htmlFor="reactSelect">
                    {bottomMessageContent}
                </label>
            )}
        </div>
    );
};
