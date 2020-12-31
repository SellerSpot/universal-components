import React, { useCallback, useEffect, useState } from 'react';
import { cx } from '@emotion/css';
import lodash from 'lodash';
import { FaCaretDown } from 'react-icons/fa';
import { getDropdownClasses, IGetDropdownClasses } from './dropdown.styles';

export interface IDropdownProps {
    options?: string[] | JSX.Element[];
    label?: string;
    helperText?: string;
    error?: {
        showError: boolean;
        errorMessage: string;
    };
    onSelect: (option: number) => void;
    style?: {
        labelStyle?: React.CSSProperties;
        dropDownBoxStyle?: React.CSSProperties;
        dropDownSelectStyle?: React.CSSProperties;
        caretIconStyle?: React.CSSProperties;
        dropDownListStyle?: React.CSSProperties;
        dropDownItemStyle?: React.CSSProperties;
        helperTextStyle?: React.CSSProperties;
        dropDownWrapperStyle?: React.CSSProperties;
    };
    className?: IGetDropdownClasses;
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
    const classNames = getDropdownClasses(requiredProps, showOptions);

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

    return (
        <div
            className={(classNames.dropDownWrapper, requiredProps.className?.dropDownWrapper)}
            style={requiredProps.style?.dropDownWrapperStyle}
        >
            {requiredProps.label ?? false ? (
                <label
                    className={cx(classNames.label, requiredProps.className?.label)}
                    style={requiredProps.style?.labelStyle}
                >
                    {requiredProps.label}
                </label>
            ) : null}
            <div
                className={cx(classNames.dropDownBox, requiredProps.className?.dropDownBox)}
                style={requiredProps.style?.dropDownBoxStyle}
            >
                <div
                    className={cx(
                        classNames.dropDownSelect,
                        requiredProps.className?.dropDownSelect,
                    )}
                    style={requiredProps.style?.dropDownSelectStyle}
                    tabIndex={0}
                    onClick={() => shouldShowOptions(!showOptions)}
                >
                    {requiredProps.options[selectedOption]}
                    <FaCaretDown
                        className={cx(classNames.caretIcon, requiredProps.className?.caretIcon)}
                        style={requiredProps.style?.caretIconStyle}
                    />
                </div>
                <div
                    className={cx(classNames.dropDownList, requiredProps.className?.dropDownList)}
                    style={requiredProps.style?.dropDownListStyle}
                >
                    {(requiredProps.options as Array<string | JSX.Element>).map((option, index) => {
                        return (
                            <li
                                onClick={() => {
                                    setSelectedOption(index);
                                    shouldShowOptions(false);
                                    requiredProps.onSelect(index);
                                }}
                                key={index}
                                className={cx(
                                    classNames.dropDownItem,
                                    requiredProps.className?.dropDownItem,
                                )}
                                style={requiredProps.style?.dropDownItemStyle}
                            >
                                {option}
                            </li>
                        );
                    })}
                </div>
            </div>
            {requiredProps.helperText !== undefined || requiredProps.error !== undefined ? (
                <label
                    className={cx(classNames.helperText, requiredProps.className?.helperText)}
                    style={requiredProps.style?.helperTextStyle}
                >
                    {requiredProps.error?.showError
                        ? requiredProps.error.errorMessage
                        : requiredProps.helperText}
                </label>
            ) : null}
        </div>
    );
};
