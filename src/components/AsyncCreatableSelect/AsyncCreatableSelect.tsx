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
        name,
        onChange,
        closeMenuOnSelect,
        isDisabled,
        onCreateOption,
        value,
    } = props;

    // draw
    return (
        <ReactSelectAsyncCreatable
            className="react-select-container"
            classNamePrefix={'custom-select'}
            isClearable
            name={name}
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
            cacheOptions
            loadOptions={loadOptions}
            defaultOptions={defaultOptions}
            formatCreateLabel={formatCreateLabel}
        />
    );
};
