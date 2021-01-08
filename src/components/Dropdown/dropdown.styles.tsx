import { css } from '@emotion/css';
import lodash from 'lodash';
import { cssColors, cssVariables } from '../../config';
import { IDropdownProps } from './Dropdown';

export interface IGetDropdownClasses {
    label?: string;
    dropDownBox?: string;
    dropDownSelect?: string;
    caretIcon?: string;
    dropDownList?: string;
    dropDownItem?: string;
    helperLabel?: string;
    dropDownWrapper?: string;
}

export const getDropdownClasses = (
    requiredProps: IDropdownProps,
    showOptions: boolean,
): IGetDropdownClasses => {
    const dropDownWrapper = css`
        box-sizing: border-box;
        width: 100%;
        height: auto;
    `;

    const label = css`
        box-sizing: border-box;
        font-size: ${cssVariables['--font-size-secondary']};
        font-weight: 600;
    `;

    const dropDownBox = css`
        box-sizing: border-box;
        width: 100%;
        height: ${cssVariables['--input-field-height']};
        border: 1px solid ${cssColors['--input-border-color']};
        border-radius: ${cssVariables['--border-radius']};
        transition: all ${cssVariables['--transition-duration']};
        cursor: pointer;
        font-size: ${cssVariables['--font-size-secondary']};
        font-weight: 400;
        position: relative;
        margin-top: 5px;

        :hover {
            border-color: ${cssColors['--input-focus-border-color']};
        }
    `;

    const dropDownSelect = css`
        width: 100%;
        height: 100%;
        padding: 0 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `;

    const caretIcon = css`
        color: ${cssColors['--primary-font-color']};
    `;

    const dropDownList = css`
        box-sizing: border-box;
        width: 100%;
        height: auto;
        max-height: 140px;
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
        box-shadow: ${cssVariables['--shadow-style']};
        transition: ${cssVariables['--transition-duration']};
        opacity: ${showOptions ? 1 : 0};
        visibility: ${showOptions ? 'visible' : 'hidden'};
    `;

    const dropDownItem = css`
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 6px 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background-color: ${cssColors['--primary-background-color']};

        :hover {
            background-color: ${cssColors['--secondary-background-color']};
        }
    `;

    const helperLabel = css`
        font-size: ${cssVariables['--font-size-tertiary']};
        margin-top: 2px;
        font-weight: 400;
        color: ${lodash.isUndefined(requiredProps.error) || !requiredProps.error?.showError
            ? cssColors['--tertiary-font-color']
            : cssColors['--danger-color']};
    `;

    return {
        caretIcon,
        dropDownBox,
        dropDownItem,
        dropDownList,
        dropDownSelect,
        helperLabel,
        label,
        dropDownWrapper,
    };
};
