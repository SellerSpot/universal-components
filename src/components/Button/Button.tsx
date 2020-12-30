import React from 'react';
import { cssColors, cssVariables } from '../../config';
import { css } from '@emotion/css';
import lodash from 'lodash';
import { Spinner } from '../Spinner/Spinner';

export interface IButtonProps {
    /**
     * The label for the button
     * @default "button"
     */
    label?: string;
    /**
     * The state of the button:
     * * default : default button with label.
     * * loading : adds a loading spinner (for extra styling, use the `style` property in `loadingSpinner` prop).
     * * disabled : disables the button, and adds an appropriate cursor on hover.
     * * disabledLoading : disables the button while also adding a `loadingSpinner`.
     * @default "default"
     */
    status?: 'default' | 'loading' | 'disabled' | 'disabledLoading';
    /**
     * The HTML specification `type` of the button:
     * @default "button"
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * Custom cssProperties styling for the button
     */
    style?: React.CSSProperties;
    /**
     * Configurations for the `loadingSpinner` in case `status` prop is either `loading` or `disabledLoading`
     */
    loadingSpinner?: {
        /**
         * Color for the spinner track (static part of the spinner)
         */
        trackColor: React.CSSProperties['color'];
        /**
         * Color for the spinner indicator (moving part of the spinner)
         */
        indicatorColor: React.CSSProperties['color'];
        /**
         * Custom cssProperties styling for the loadingSpinner
         */
        style?: React.CSSProperties;
    };
    /**
     * Controls if the button should be focusable by TabNavigation
     * * 0 : focusable
     * * -1 : non-focusable
     * @default 0
     */
    tabIndex?: 0 | -1;
    /**
     * Callback when the button is clicked
     * @augments
     * ```ts
     * event: React.MouseEvent<HTMLButtonElement, MouseEvent>
     * ```
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<IButtonProps> = (props: IButtonProps): JSX.Element => {
    const defaultProps: IButtonProps = {
        label: 'button',
        status: 'default',
        type: 'button',
        tabIndex: 0,
    };

    const requiredProps = lodash.merge(defaultProps, props);

    const button = css`
        width: 100%;
        padding: 0.8em 1em;
        text-decoration: none;
        border-radius: ${cssVariables['--border-radius']};
        font-size: ${cssVariables['--font-size-secondary']};
        font-weight: 500;
        opacity: 1;
        transition: opacity ${cssVariables['--transition-duration']};
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-width: 1px;
        border-color: ${cssColors['--default-border-color']};
        border-style: solid;

        background-color: ${cssColors['--default-background-color']};

        cursor: ${requiredProps.status === 'disabled' || requiredProps.status === 'disabledLoading'
            ? 'not-allowed'
            : 'pointer'};

        :hover {
            opacity: 0.9;
        }
        :focus {
            outline: 0;
        }
    `;

    return (
        <button
            className={button}
            onClick={requiredProps.onClick}
            type={requiredProps.type}
            disabled={
                requiredProps.status === 'disabled' || requiredProps.status === 'disabledLoading'
            }
            style={requiredProps.style}
        >
            {requiredProps.status === 'loading' || requiredProps.status === 'disabledLoading' ? (
                <Spinner
                    size={'small'}
                    indicatorColor={requiredProps.loadingSpinner?.indicatorColor}
                    trackColor={requiredProps.loadingSpinner?.trackColor}
                    style={requiredProps.loadingSpinner.style}
                />
            ) : null}
            {requiredProps.label}
        </button>
    );
};
