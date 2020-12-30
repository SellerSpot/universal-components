import { cssColors, cssVariables, TMajorColors } from '../../config';
import lodash from 'lodash';
import React, { ReactElement, useCallback, useEffect } from 'react';
import { css } from '@emotion/css';

export interface INotifyProps {
    active: boolean;
    content: JSX.Element;
    timeout: number;
    clearNotificationCallback: () => void;
    style?: React.CSSProperties;
}

export const Notify = (props: INotifyProps): ReactElement => {
    const defaultProps: INotifyProps = {
        active: false,
        content: <p>Sample Notify</p>,
        timeout: 3000, // 3 seconds
        clearNotificationCallback: () => void 0,
    };

    const requiredProps = lodash.merge(defaultProps, props);

    useEffect(() => {
        let timerReference: ReturnType<typeof setTimeout>;

        if (requiredProps.active) {
            timerReference = setTimeout(
                requiredProps.clearNotificationCallback,
                requiredProps.timeout,
            );
        }
        return () => {
            clearTimeout(timerReference);
        };
    }, [requiredProps]);

    const notifyWrapper = css`
        width: 300px;
        min-height: 50px;
        max-height: 100px;
        overflow: hidden;
        position: fixed;
        box-shadow: 0 0 10px 0 ${cssColors['--overlay-color']};
        border-radius: 3px;
        padding: 15px 40px 15px 15px;
        font-size: ${cssVariables['--font-size-secondary']};
        z-index: ${cssVariables['--z-index-notify']};
        right: calc(50% - 150px);
        transition: top 0.2s ease-in;
        word-break: break-all;
        color: ${cssColors['--primary-font-color']};
        background: ${cssColors['--primary-background-color']};

        top: ${requiredProps.active ? '30px' : '-100%'};
    `;

    return (
        <div className={notifyWrapper} style={requiredProps.style}>
            {requiredProps.content}
        </div>
    );
};
