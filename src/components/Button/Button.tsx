import React from 'react';
import { cssColors, cssVariables } from '../config';
import styled from 'styled-components';
import lodash from 'lodash';
import { Spinner } from '../Spinner/Spinner';

export interface IButtonProps {
    label?: string;
    status?: 'default' | 'loading' | 'disabled' | 'disabledLoading';
    type?: 'button' | 'submit' | 'reset';
    style?: React.CSSProperties;
    tabIndex?: number;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<IButtonProps> = (props: IButtonProps): JSX.Element => {
    const defaultProps: IButtonProps = {
        label: 'button',
        status: 'default',
        type: 'button',
    };

    const requiredProps = lodash.merge(defaultProps, props);

    const StyledButton = styled.button`
        width: auto;
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
        <StyledButton
            onClick={requiredProps.onClick}
            type={requiredProps.type}
            disabled={
                requiredProps.status === 'disabled' || requiredProps.status === 'disabledLoading'
            }
            style={requiredProps.style}
        >
            {requiredProps.status === 'loading' || requiredProps.status === 'disabledLoading' ? (
                <Spinner />
            ) : null}
            {requiredProps.label}
        </StyledButton>
    );
};
