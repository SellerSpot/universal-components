import { cssColors, cssVariables } from '../../config';
import lodash from 'lodash';
import React, { ReactElement, useEffect, useState } from 'react';
import { css, cx } from '@emotion/css';

export interface INotifyProps {
    notifyId: number | string;
    content?: JSX.Element;
    timeout?: number;
    style?: {
        notifyWrapper: React.CSSProperties;
    };
    className?: {
        notifyWrapper: string;
    };
}

export const Notify = (props: INotifyProps): ReactElement => {
    const [showNotify, setShowNotify] = useState(false);

    const defaultProps: INotifyProps = {
        notifyId: '0000',
        content: <p>Sample Notify</p>,
        timeout: 3000, // 3 seconds
    };

    const requiredProps = lodash.merge(defaultProps, props);

    useEffect(() => {
        console.log('Notify UseEffect Invoked');
        // showing notification
        setShowNotify(true);
        // setting timer to dismiss notification
        const timerReference: ReturnType<typeof setTimeout> = setTimeout(() => {
            console.log('Closing notify');

            // hiding notify component
            setShowNotify(false);
        }, requiredProps.timeout);
        return () => {
            clearTimeout(timerReference);
        };
    }, [requiredProps.notifyId]);

    const notifyWrapper = css`
        width: 300px;
        min-height: 50px;
        max-height: 100px;
        overflow: hidden;
        position: fixed;
        box-shadow: ${cssVariables['--shadow-style']};
        border-radius: 3px;
        padding: 15px 40px 15px 15px;
        font-size: ${cssVariables['--font-size-secondary']};
        z-index: ${cssVariables['--z-index-notify']};
        right: calc(50% - 150px);
        transition: top 1s ease-in-out;
        word-break: break-all;
        color: ${cssColors['--primary-font-color']};
        background: ${cssColors['--primary-background-color']};

        top: ${showNotify ? '30px' : '-100%'};
    `;

    return (
        <div
            className={cx(notifyWrapper, requiredProps.className?.notifyWrapper)}
            style={requiredProps.style.notifyWrapper}
        >
            {requiredProps.content}
        </div>
    );
};
