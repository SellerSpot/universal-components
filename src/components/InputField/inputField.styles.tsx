import { css } from '@emotion/css';
import { cssColors, cssVariables } from '../../config';
import lodash from 'lodash';
import { IInputFieldProps } from './InputField';

export interface IGetInputFieldClasses {
    inputFieldWrapper?: string;
    label?: string;
    helperLabel?: string;
    requiredSpan?: string;
    inputWrapperDiv?: string;
    prefixDiv?: string;
    suffixDiv?: string;
    input?: string;
    searchDropdown?: string;
}

export const getInputFieldClasses = (requiredProps: IInputFieldProps): IGetInputFieldClasses => {
    const inputFieldWrapper = css`
        width: 100%;
        height: auto;
        box-sizing: border-box;
    `;

    const label = css`
        display: block;
        font-size: ${cssVariables['--font-size-secondary']};
        font-weight: 600;
        margin-bottom: 5px;
    `;

    const helperLabel = css`
        font-size: ${cssVariables['--font-size-tertiary']};
        margin-top: 2px;
        font-weight: 400;
        color: ${lodash.isUndefined(requiredProps.error)
            ? cssColors['--tertiary-font-color']
            : cssColors['--danger-color']};
    `;

    const requiredSpan = css`
        color: ${cssColors['--danger-color']};
    `;

    const inputWrapperDiv = css`
        display: flex;
        position: relative;
        height: ${requiredProps.size === 'compact'
            ? cssVariables['--input-field-small-height']
            : cssVariables['--input-field-height']};
    `;

    const prefixDiv = css`
        width: ${cssVariables['--input-field-height']};
        border: 1px solid;
        border-radius: ${cssVariables['--border-radius']};
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${requiredProps.disabled
            ? cssColors['--disabled-color']
            : cssColors['--input-background-color']};

        padding: ${requiredProps.size === 'compact' ? 0 : '4px'};

        border-color: ${requiredProps.size === 'compact'
            ? 'transparent'
            : requiredProps.error?.showError
            ? cssColors['--danger-color']
            : cssColors['--input-border-color']};
    `;

    const suffixDiv = css`
        width: ${cssVariables['--input-field-height']};
        border: 1px solid;
        border-radius: ${cssVariables['--border-radius']};
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${requiredProps.disabled
            ? cssColors['--disabled-color']
            : cssColors['--input-background-color']};

        padding: ${requiredProps.size === 'compact' ? 0 : '4px'};

        border-color: ${requiredProps.size === 'compact'
            ? 'transparent'
            : requiredProps.error?.showError
            ? cssColors['--danger-color']
            : cssColors['--input-border-color']};
    `;

    const input = css`
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        font-size: ${cssVariables['--font-size-secondary']};
        border-radius: ${cssVariables['--border-radius']};
        border: 1px solid;
        padding: 0 5px;
        padding-top: 1px;

        border-color: ${requiredProps.size === 'compact'
            ? 'transparent'
            : requiredProps.error?.showError
            ? cssColors['--danger-color']
            : cssColors['--input-border-color']};

        border-top-left-radius: ${lodash.isUndefined(requiredProps.prefix)
            ? cssVariables['--border-radius']
            : 0};
        border-bottom-left-radius: ${lodash.isUndefined(requiredProps.prefix)
            ? cssVariables['--border-radius']
            : 0};
        border-left-width: ${lodash.isUndefined(requiredProps.prefix) ? '1px' : 0};

        border-top-right-radius: ${lodash.isUndefined(requiredProps.suffix)
            ? cssVariables['--border-radius']
            : 0};
        border-bottom-right-radius: ${lodash.isUndefined(requiredProps.suffix)
            ? cssVariables['--border-radius']
            : 0};
        border-right-width: ${lodash.isUndefined(requiredProps.suffix) ? '1px' : 0};

        :focus {
            outline: 0;
        }
    `;

    const searchDropdown = css`
        position: absolute;
        top: 0;
        margin-top: 5px;
        box-sizing: border-box;
        width: 100%;
        top: ${requiredProps.size === 'compact'
            ? cssVariables['--input-field-small-height']
            : cssVariables['--input-field-height']};
        border-radius: ${cssVariables['--border-radius']};
        background-color: ${cssColors['--input-background-color']};
        transition: height 0.2s ease-out;

        height: ${!lodash.isUndefined(requiredProps.searchDropdown) &&
        requiredProps.searchDropdown?.show
            ? requiredProps.searchDropdown?.dropDownHeight
            : 0};
    `;

    return {
        helperLabel,
        input,
        inputFieldWrapper,
        inputWrapperDiv,
        label,
        prefixDiv,
        requiredSpan,
        suffixDiv,
        searchDropdown,
    };
};
