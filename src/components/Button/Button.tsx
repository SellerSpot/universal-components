import React from 'react';

export interface IButtonProps {
    label: string;
    shape?: 'rectangle' | 'rounded';
    disabled?: boolean;
    size?: 'small' | 'medium';
    fullWidth?: boolean;
    variant?: 'solid' | 'outline' | 'link';
    type?: 'button' | 'submit' | 'reset';
    style?: React.CSSProperties;
    focusable?: boolean;
    onClick?: () => void;
}

const defaultProps: IButtonProps = {
    label: 'Button',
    shape: 'rectangle',
    disabled: false,
    size: 'medium',
    fullWidth: true,
    variant: 'solid',
    type: 'button',
    focusable: true,
    style: {},
    onClick: () => {
        return null;
    },
};

export const Button: React.FC<IButtonProps> = (props: IButtonProps): JSX.Element => {
    // seasoning the props
    const sProps: IButtonProps = {
        ...defaultProps,
        ...props,
    };

    return (
        <button
            onClick={sProps.onClick}
            tabIndex={sProps.focusable ?? true ? 0 : -1}
            type={sProps.type}
            disabled={sProps.disabled}
        >
            {sProps.label}
        </button>
    );
};
