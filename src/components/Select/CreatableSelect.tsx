import React, { ReactElement } from 'react';
import styles from './CreatableSelect.module.scss';
import ReactSelectCreatable from 'react-select/creatable';
import { ICreatableSelectProps } from './CreatableSelect.types';
import { CircularProgress } from '../CircularProgress/CircularProgress';

export { ICreatableSelectProps } from './CreatableSelect.types';

// components
const LoadingIndicator = () => {
    return (
        <div className={styles.loadingIndicatorHolder}>
            <CircularProgress theme="auto" size="16px" />
        </div>
    );
};

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
            components={{
                LoadingIndicator,
            }}
        />
    );
};
