import React, { ReactElement } from 'react';
import ReactSelectCreatable from 'react-select/creatable';
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
        name,
        onChange,
        closeMenuOnSelect,
        isDisabled,
        onCreateOption,
        value,
    } = props;

    // draw
    return (
        <ReactSelectCreatable
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
            options={options}
            formatCreateLabel={formatCreateLabel}
        />
    );
};
