import React, { useCallback, useEffect, useState } from 'react';
import { css } from '@emotion/css';
import lodash from 'lodash';
import { FaCaretDown } from 'react-icons/fa';
import { cssColors, cssVariables } from 'config';

export interface IDropdownProps {
    options?: string[];
    label?: string;
    helperText?: string;
    error?: {
        showError: boolean;
        errorMessage: string;
    };
    onSelect: (option: string) => void;
    style?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    helperStyle?: React.CSSProperties;
}

export const Dropdown: React.FC<IDropdownProps> = (props: IDropdownProps): JSX.Element => {
    const [showOptions, shouldShowOptions] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<number>(0);

    const defaultProps: IDropdownProps = {
        options: ['Sample Option 1', 'Sample Option 2'],
        error: {
            errorMessage: 'Default error message',
            showError: false,
        },
        onSelect: () => void 0,
    };

    const requiredProps = lodash.merge(defaultProps, props);

    const handleClickOutsideHandler = useCallback(() => shouldShowOptions(!showOptions), [
        shouldShowOptions,
        showOptions,
    ]);

    useEffect(() => {
        // to handle clicks outside the dropdown and close the options view
        if (showOptions) document.addEventListener('click', handleClickOutsideHandler);
        return () => {
            document.removeEventListener('click', handleClickOutsideHandler);
        };
    }, [showOptions, handleClickOutsideHandler]);

    const labelClass = css`
        display: block;
        font-size: ${cssVariables['--font-size-secondary']};
        font-weight: 600;
        margin-bottom: 5px;
    `;

    const dropDownBoxClass = css`
        display: block;
        height: ${cssVariables['--input-field-height']};
        width: 100%;
        border: 1px solid ${cssColors['--input-border-color']};
        border-radius: ${cssVariables['--border-radius']};
        transition: all ${cssVariables['--transition-duration']};
        cursor: pointer;
        font-size: ${cssVariables['--font-size-secondary']};
        font-weight: 400;
        position: relative;

        :hover {
            border-color: ${cssColors['--input-focus-border-color']};
        }
    `;

    const dropDownSelectClass = css`
        width: 100%;
        height: 100%;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `;

    const caretIconClass = css`
        color: ${cssColors['--primary-font-color']};
    `;

    const dropDownListClass = css`
        width: 100%;
        max-height: 140px;
        height: auto;
        position: absolute;
        top: ${cssVariables['--input-field-height']};
        border: 1px solid ${cssColors['--input-border-color']};
        border-radius: ${cssVariables['--border-radius']};
        user-select: none;
        z-index: ${cssVariables['--z-index-dropdown']};
        font-size: ${cssVariables['--font-size-secondary']};
        font-weight: 400;
        overflow-y: auto;
        background-color: ${cssColors['--primary-background-color']};
        box-shadow: 0 0 5px 0px ${cssColors['--overlay-color']};
        transition: ${cssVariables['--transition-duration']};

        opacity: ${showOptions ? 1 : 0};
        visibility: ${showOptions ? 'visible' : 'hidden'};
    `;

    const dropDownItemClass = css`
        width: 100%;
        padding: 6px 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background-color: ${cssColors['--primary-background-color']};
    `;

    const helperTextClass = css`
        font-size: ${cssVariables['--font-size-tertiary']};
        margin-top: 2px;
        font-weight: 400;
        color: ${requiredProps.error?.showError
            ? cssColors['--danger-color']
            : cssColors['--tertiary-font-color']};
    `;

    return (
        <div>
            {requiredProps.label ?? false ? (
                <label className={labelClass} style={requiredProps.labelStyle}>
                    {requiredProps.label}
                </label>
            ) : null}
            <div className={dropDownBoxClass}>
                <div
                    className={dropDownSelectClass}
                    tabIndex={0}
                    onClick={() => shouldShowOptions(!showOptions)}
                >
                    <p>{requiredProps.options[selectedOption]}</p>
                    <FaCaretDown className={caretIconClass} />
                </div>
                <div className={dropDownListClass}></div>
                <ul>
                    {requiredProps.options.map((option, index) => {
                        return (
                            <li
                                onClick={() => {
                                    setSelectedOption(index);
                                    shouldShowOptions(false);
                                    requiredProps.onSelect(option);
                                }}
                                key={index}
                                className={dropDownItemClass}
                            >
                                {option}
                            </li>
                        );
                    })}
                </ul>
            </div>
            {requiredProps.helperText !== undefined || requiredProps.error !== undefined ? (
                <label className={helperTextClass} style={requiredProps.helperStyle}>
                    {requiredProps.error?.showError
                        ? requiredProps.error.errorMessage
                        : requiredProps.helperText}
                </label>
            ) : null}
        </div>
    );
};
