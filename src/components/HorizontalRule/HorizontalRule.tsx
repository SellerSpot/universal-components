import React, { ReactElement } from 'react';
import { cssColors } from '../../config';
import lodash from 'lodash';
import { css, cx } from '@emotion/css';

export interface IHorizontalRuleProps {
    alignment?: 'left' | 'center' | 'right';
    ruleColor?: React.CSSProperties['color'];
    ruleSize?: number;
    ruleWidth?: '100%' | '75%' | '50%' | '25%';
    ruleOpacity?: number;
    style?: {
        horizontalRuleWrapperStyle?: React.CSSProperties;
        horizontalRuler?: React.CSSProperties;
    };
    className?: {
        horizontalRuleWrapper?: string;
        horizontalRuler?: string;
    };
}

export const HorizontalRule = (props: IHorizontalRuleProps): ReactElement => {
    const defaultProps: IHorizontalRuleProps = {
        alignment: 'center',
        ruleColor: cssColors['--secondary-font-color'],
        ruleSize: 1,
        ruleWidth: '75%',
        style: {
            horizontalRuleWrapperStyle: {
                paddingTop: 25,
                paddingBottom: 25,
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
        ruleOpacity: 0.5,
    };

    const requiredProps = lodash.merge(defaultProps, props);

    const horizontalRuleWrapper = css`
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

    const horizontalRuler = css`
        background-color: ${requiredProps.ruleColor};
        width: ${requiredProps.ruleWidth};
        height: ${requiredProps.ruleSize}px;
        display: block;
        border-radius: 5px;
    `;

    return (
        <div
            className={cx(horizontalRuleWrapper, requiredProps.className?.horizontalRuleWrapper)}
            style={requiredProps.style?.horizontalRuleWrapperStyle}
        >
            <div
                className={cx(horizontalRuler, requiredProps.className?.horizontalRuler)}
                style={requiredProps.style?.horizontalRuler}
            />
        </div>
    );
};
