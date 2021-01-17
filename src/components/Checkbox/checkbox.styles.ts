import { css } from '@emotion/css';
import lodash from 'lodash';
import { cssColors, cssVariables } from '../../config/index';
import { ICheckboxProps } from './checkbox.types';

export interface ICheckboxClasses {
    /**
     * Wraps the whole Checkbox component
     */
    checkboxGroupWrapper?: string;
    /**
     * Styling for the lable appearing above the Checkbox group
     * @use To help the user understand the purpose of the checkbox group
     */
    checkBoxGroupLabel: string;
    /**
     * Styling for the div containing both the custom checkbox as well as the label string
     */
    checkBoxWrapper?: string;
    /**
     * Styling for the custom checkbox div
     */
    checkBox?: string;
    /**
     * Styling for the checkbox if it is active
     */
    checkBoxActive?: string;
    /**
     * Styling for the check icon inside the Checkbox
     */
    checkBoxCheckIcon?: string;
    /**
     * Styling for the icon when it is inActive
     */
    checkBoxCheckIconInactive?: string;
    /**
     * Styling for the helper label or the error message
     */
    helperLabel: string;
}

export const getCheckboxClasses = (requiredProps: ICheckboxProps): ICheckboxClasses => {
    return {
        checkboxGroupWrapper: css`
            height: auto;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            box-sizing: border-box;
            gap: 5px;
            user-select: none;
            background-color: whitesmoke;

            /* padding-bottom: ${lodash.isUndefined(requiredProps.helperText) &&
            (lodash.isUndefined(requiredProps.error) || !requiredProps.error?.showError)
                ? '20px'
                : 0}; */
        `,
        checkBoxGroupLabel: css`
            display: block;
            font-size: ${cssVariables['--font-size-secondary']};
            font-weight: 600;
            margin-bottom: 3px;
        `,
        checkBoxWrapper: css`
            width: 100%;
            display: flex;
            gap: 10px;
            align-items: center;
            cursor: pointer;
        `,
        checkBox: css`
            width: 16px;
            height: 16px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid ${cssColors['--default-border-color']};
            border-radius: 0.15rem;
            transition: background-color, border-color 0.2s ease-in;
        `,
        checkBoxActive: css`
            background-color: ${cssColors['--success-color']};
            border-color: transparent;
        `,
        checkBoxCheckIcon: css`
            color: white;
            transition: color 0.2s ease-in;
        `,
        checkBoxCheckIconInactive: css`
            color: transparent;
        `,
        helperLabel: css`
            font-size: ${cssVariables['--font-size-tertiary']};
            margin-top: 0px;
            font-weight: 400;
            color: ${lodash.isUndefined(requiredProps.error) || !requiredProps.error?.showError
                ? cssColors['--tertiary-font-color']
                : cssColors['--danger-color']};
        `,
    };
};
