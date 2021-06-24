import React, { ReactElement } from 'react';
import ReactSelect from 'react-select';
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
        closeMenuOnSelect,
        isDisabled,
        value,
    } = props;

    // draw
    return (
        <ReactSelect
            className="react-select-container"
            classNamePrefix={'custom-select'}
            isClearable
            name={name}
            onChange={onChange}
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
    );
};
