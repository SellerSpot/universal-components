import { css } from '@emotion/css';
import { cssColors, cssVariables } from '../../config';
import { IDropdownProps } from './Dropdown';

export interface IGetDropdownClasses {
    label?: string;
    dropDownBox?: string;
    dropDownSelect?: string;
    caretIcon?: string;
    dropDownList?: string;
    dropDownItem?: string;
    helperText?: string;
}

export const getDropdownClasses = (
    requiredProps: IDropdownProps,
    showOptions: boolean,
): IGetDropdownClasses => {
    const label = css`
        display: block;
        font-size: ${cssVariables['--font-size-secondary']};
        font-weight: 600;
        margin-bottom: 5px;
    `;

    const dropDownBox = css`
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

    const dropDownSelect = css`
        width: 100%;
        height: 100%;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `;

    const caretIcon = css`
        color: ${cssColors['--primary-font-color']};
    `;

    const dropDownList = css`
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

    const dropDownItem = css`
        width: 100%;
        padding: 6px 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background-color: ${cssColors['--primary-background-color']};
    `;

    const helperText = css`
        font-size: ${cssVariables['--font-size-tertiary']};
        margin-top: 2px;
        font-weight: 400;
        color: ${requiredProps.error?.showError
            ? cssColors['--danger-color']
            : cssColors['--tertiary-font-color']};
    `;

    return {
        caretIcon,
        dropDownBox,
        dropDownItem,
        dropDownList,
        dropDownSelect,
        helperText,
        label,
    };
};
