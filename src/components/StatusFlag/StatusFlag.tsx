import React from 'react';
import lodash from 'lodash';
import { css } from '@emotion/css';
import { cssColors, cssVariables } from 'config';

export interface IStatusFlagProps {
    label?: string;
    style?: React.CSSProperties;
    spotStyle?: React.CSSProperties;
}

export const StatusFlag: React.FC<IStatusFlagProps> = (props: IStatusFlagProps): JSX.Element => {
    const defaultProps: IStatusFlagProps = {
        label: 'completed',
    };
    const requiredProps = lodash.merge(defaultProps, props);

    const statusFlagClass = css`
        width: 120px;
        height: 30px;
        display: flex;
        gap: 10px;
        justify-content: flex-start;
        align-items: center;
        font-size: ${cssVariables['--font-size-default']};
        font-weight: 500;
    `;

    const spotClass = css`
        height: 14px;
        width: 14px;
        border-radius: 50%;
        display: inline-block;

        background-color: ${cssColors['--success-color']};
    `;

    return (
        <div className={statusFlagClass} style={requiredProps.style}>
            <div className={spotClass}></div>
            <div>{requiredProps.label.charAt(0).toUpperCase() + requiredProps.label.slice(1)}</div>
        </div>
    );
};
