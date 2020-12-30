import lodash from 'lodash';
import React from 'react';
import { css, cx } from '@emotion/css';
import { cssColors } from '../../config';

export interface ISpinnerProps {
    size?: 'extraSmall' | 'small' | 'medium' | 'large';
    indicatorColor?: React.CSSProperties['color'];
    trackColor?: React.CSSProperties['color'];
    style?: React.CSSProperties;
}

export const Spinner: React.FC<ISpinnerProps> = (props: ISpinnerProps): JSX.Element => {
    const defaultProps: ISpinnerProps = {
        indicatorColor: cssColors['--default-border-color'],
        trackColor: cssColors['--default-background-color'],
        size: 'extraSmall',
    };
    const requiredProps = lodash.merge(defaultProps, props);

    const spinner = css`
        border-radius: 50%;
        width: 10em;
        height: 10em;
        position: relative;
        text-indent: -9999em;
        border-top: 1.1em solid ${requiredProps.trackColor};
        border-right: 1.1em solid ${requiredProps.trackColor};
        border-bottom: 1.1em solid ${requiredProps.trackColor};
        border-left: 1.1em solid ${requiredProps.indicatorColor};
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation: load8 1.1s infinite linear;
        animation: load8 1.1s infinite linear;

        font-size: ${{
            extraSmall: '0.08em',
            small: '0.1em',
            medium: '0.15em',
            large: '0.2em',
        }[requiredProps.size] || '0.1em'};

        ::after {
            border-radius: 50%;
            width: 10em;
            height: 10em;
        }

        @-webkit-keyframes load8 {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
        @keyframes load8 {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
    `;

    return <div className={spinner} style={requiredProps.style} />;
};
