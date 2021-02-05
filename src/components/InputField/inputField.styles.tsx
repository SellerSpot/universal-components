import lodash from 'lodash';
import { css } from '@emotion/css';
import { cssColors, cssVariables } from '../../config';
import { IInputFieldProps } from './inputField.types';

export interface IGetInputFieldClasses {
    /**
     * Handles styling for the whole InputField component (label+prefix+<input>+suffix+helper)
     */
    inputFieldOverallWrapper?: string;
    /**
     * Handles styling for the label above the inputField
     */
    label?: string;
    /**
     * Handles styling for the helper text below the inputField
     */
    helperLabel?: string;
    /**
     * Handles styling for the REQUIRED '*' shown if the required prop is set to true
     */
    requiredSpan?: string;
    /**
     * Handles styling for the inputField Wrapper (prefix+input+suffix)
     */
    inputWrapperDiv?: string;
    /**
     * Handles styling for the inputField prefix wrapper
     */
    prefixWrapper?: string;
    /**
     * Handles styling for the inputField suffix wrapper
     */
    suffixWrapper?: string;
    /**
     * Handles styling for the inputField <input> component specifically
     * @warning - This styling only affects the input field and the other components cannot react to any breaking changes (like changing height - which should be done using the inputWrapperDiv style prop)
     */
    input?: string;
}

export const getInputFieldClasses = (
    requiredProps: IInputFieldProps,
    inputFieldFocused: boolean,
): IGetInputFieldClasses => {
    return {
        inputFieldOverallWrapper: css`
            width: 100%;
            height: auto;
            box-sizing: border-box;
        `,
        label: css`
            display: block;
            font-size: ${cssVariables['--font-size-secondary']};
            font-weight: 600;
            margin-bottom: 5px;
        `,
        helperLabel: css`
            font-size: ${cssVariables['--font-size-tertiary']};
            margin-top: 2px;
            font-weight: 400;
            color: ${lodash.isUndefined(requiredProps.error) || !requiredProps.error?.showError
                ? cssColors['--tertiary-font-color']
                : cssColors['--danger-color']};
        `,
        requiredSpan: css`
            color: ${cssColors['--danger-color']};
        `,
        inputWrapperDiv: css`
            display: flex;
            height: ${requiredProps.size === 'compact'
                ? cssVariables['--input-field-small-height']
                : cssVariables['--input-field-height']};
        `,
        prefixWrapper: css`
            width: ${cssVariables['--input-field-height']};
            border-radius: ${cssVariables['--border-radius']};
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid;
            transition: all 0.2s ease-in;

            background-color: ${requiredProps.disabled
                ? cssColors['--disabled-color']
                : cssColors['--input-background-color']};

            padding: ${requiredProps.size === 'compact' ? 0 : '4px'};

            border-color: ${requiredProps.size === 'compact'
                ? 'transparent'
                : requiredProps.error?.showError
                ? cssColors['--danger-color']
                : inputFieldFocused
                ? 'grey'
                : cssColors['--input-border-color']};
            box-shadow: ${requiredProps.error?.showError
                ? '0 0 0.12rem red'
                : inputFieldFocused
                ? '0 0 0.12rem grey'
                : 0};
        `,
        suffixWrapper: css`
            width: ${cssVariables['--input-field-height']};
            border: 1px solid;
            border-radius: ${cssVariables['--border-radius']};
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.2s ease-in;

            background-color: ${requiredProps.disabled
                ? cssColors['--disabled-color']
                : cssColors['--input-background-color']};

            padding: ${requiredProps.size === 'compact' ? 0 : '4px'};

            border-color: ${requiredProps.size === 'compact'
                ? 'transparent'
                : requiredProps.error?.showError
                ? cssColors['--danger-color']
                : inputFieldFocused
                ? 'grey'
                : cssColors['--input-border-color']};

            box-shadow: ${requiredProps.error?.showError
                ? '0 0 0.12rem red'
                : inputFieldFocused
                ? '0 0 0.12rem grey'
                : 0};
        `,
        input: css`
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            font-size: ${cssVariables['--font-size-secondary']};
            border-radius: ${cssVariables['--border-radius']};
            border: 1px solid;
            padding: 0 10px;
            padding-top: 1px;
            transition: all 0.2s ease-in-out;

            border-color: ${requiredProps.size === 'compact'
                ? 'transparent'
                : requiredProps.error?.showError
                ? cssColors['--danger-color']
                : inputFieldFocused
                ? 'grey'
                : cssColors['--input-border-color']};

            box-shadow: ${requiredProps.error?.showError
                ? '0 0 0.12rem red'
                : inputFieldFocused
                ? '0 0 0.12rem grey'
                : 0};

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
        `,
    };
};
