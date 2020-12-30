import React from 'react';
import lodash from 'lodash';
import { css, cx } from '@emotion/css';
import { cssColors, cssVariables } from '../../config';

export interface IStatusFlagProps {
    label?: string;
    style?: {
        statusFlagWrapperStyle?: React.CSSProperties;
        spotStyle?: React.CSSProperties;
        labelStyle?: React.CSSProperties;
    };
    className?: {
        statusFlagWrapper?: string;
        spot?: string;
        label?: string;
    };
}

export const StatusFlag: React.FC<IStatusFlagProps> = (props: IStatusFlagProps): JSX.Element => {
    const defaultProps: IStatusFlagProps = {
        label: 'completed',
    };
    const requiredProps = lodash.merge(defaultProps, props);

    const statusFlagWrapper = css`
        width: 120px;
        height: 30px;
        display: flex;
        gap: 10px;
        justify-content: flex-start;
        align-items: center;
        font-size: ${cssVariables['--font-size-default']};
        font-weight: 500;
    `;

    const spot = css`
        height: 14px;
        width: 14px;
        border-radius: 50%;
        display: inline-block;

        background-color: ${cssColors['--success-color']};
    `;

    return (
        <div
            className={cx(statusFlagWrapper, requiredProps.className?.statusFlagWrapper)}
            style={requiredProps.style?.statusFlagWrapperStyle}
        >
            <div
                className={cx(spot, requiredProps.className?.spot)}
                style={requiredProps.style?.spotStyle}
            />
            <div className={requiredProps.className?.label} style={requiredProps.style?.labelStyle}>
                {requiredProps.label.charAt(0).toUpperCase() + requiredProps.label.slice(1)}
            </div>
        </div>
    );
};
