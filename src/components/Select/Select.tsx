import { useState } from '@hookstate/core';
import cn from 'classnames';
import React, { ReactElement } from 'react';
import ReactSelect from 'react-select';
import { ReactSelectOptionComponent } from '../../utilities';
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
        disableHelperTextPlaceholderPadding,
        value,
        isClearable = true,
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
        ['custom-select__wrapper--no-bottom-message']:
            helperMessage?.enabled && !bottomMessageContent && disableHelperTextPlaceholderPadding,
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
            <ReactSelect
                id={'reactSelect'}
                className="react-select-container"
                classNamePrefix={'custom-select'}
                isClearable={isClearable}
                name={name}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                isDisabled={isDisabled}
                isMulti={isMulti}
                value={value}
                isLoading={isLoading}
                components={{
                    Option: ReactSelectOptionComponent,
                }}
                defaultValue={defaultValue}
                closeMenuOnSelect={closeMenuOnSelect}
                menuIsOpen={menuIsOpen}
                autoFocus={autoFocus}
                options={options}
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
