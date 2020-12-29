import React, { ReactElement } from 'react';
import { cssColors } from '../../config';
import lodash from 'lodash';
import { css } from '@emotion/css';

export interface IHorizontalRuleProps {
    // check defaultProps for default values
    alignment?: 'left' | 'center' | 'right';
    ruleColor?: React.CSSProperties['color'];
    ruleSize?: number;
    ruleWidth?: '100%' | '75%' | '50%' | '25%';
    ruleOpacity?: number;
    style?: React.CSSProperties;
}

export const HorizontalRule = (props: IHorizontalRuleProps): ReactElement => {
    const defaultProps: IHorizontalRuleProps = {
        alignment: 'center',
        ruleColor: cssColors['--secondary-font-color'],
        ruleSize: 1,
        ruleWidth: '75%',
        style: {
            paddingTop: 25,
            paddingBottom: 25,
            paddingLeft: 0,
            paddingRight: 0,
        },
        ruleOpacity: 0.5,
    };

    const requiredProps = lodash.merge(defaultProps, props);

    const horizontalRuleWrapperClass = css`
        width: 100%;
        height: auto;
        display: flex;
        align-items: 'center';
        position: relative;
        justify-content: ${requiredProps.alignment === 'right'
            ? 'flex-end'
            : requiredProps.alignment === 'left'
            ? 'flex-start'
            : requiredProps.alignment};
    `;

    const horizontalRulerClass = css`
        background-color: ${requiredProps.ruleColor};
        width: ${requiredProps.ruleWidth};
        height: ${requiredProps.ruleSize}px;
        display: block;
        border-radius: 5px;
    `;

    return (
        <div className={horizontalRuleWrapperClass} style={requiredProps.style}>
            <div className={horizontalRulerClass} />
        </div>
    );
};
