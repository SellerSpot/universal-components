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
        helperMessage,
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
    const bottomMessageContent = helperMessage?.content;
    const bottomMessageClassName = cn('react-select-component-bottom-message', {
        ['react-select-component-bottom-message--is-error']: helperMessage?.type === 'error',
    });
    const wrapperClassName = cn('react-select-component-wrapper', {
        ['react-select-component-wrapper--no-bottom-message']: !bottomMessageContent,
    });

    // draw
    return (
        <div className={wrapperClassName}>
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
            {helperMessage?.enabled && (
                <label className={bottomMessageClassName} htmlFor="reactSelect">
                    {bottomMessageContent}
                </label>
            )}
        </div>
    );
};
