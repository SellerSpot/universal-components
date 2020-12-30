import React from 'react';
import { css } from '@emotion/css';
import {
    AiOutlineCheckCircle,
    AiOutlineCloseCircle,
    AiOutlineInfoCircle,
    AiOutlineWarning,
} from 'react-icons/ai';
import lodash from 'lodash';
import { cssColors, cssVariables } from '../../config';

export interface IAlertMessageProps {
    type?: 'success' | 'warning' | 'danger' | 'info';
    label?: string;
    actionButton?: JSX.Element;
    showIcon?: boolean;
    customIcon?: JSX.Element;
    style?: React.CSSProperties;
}

export const AlertMessage: React.FC<IAlertMessageProps> = (
    props: IAlertMessageProps,
): JSX.Element => {
    const defaultProps: IAlertMessageProps = {
        type: 'success',
        label: 'Sample AlertMessage Message',
        showIcon: true,
    };
    const requiredProps = lodash.merge(defaultProps, props);
    const alertMessageWrapper = css`
        width: 100%;
        min-height: 40px;
        padding: 0 10px;
        font-size: ${cssVariables['--font-size-secondary']};

        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: ${requiredProps.type === 'success'
            ? cssColors['--success-accent-color']
            : requiredProps.type === 'danger'
            ? cssColors['--danger-accent-color']
            : requiredProps.type === 'info'
            ? cssColors['--info-accent-color']
            : requiredProps.type === 'warning'
            ? cssColors['--warning-accent-color']
            : cssColors['--default-background-color']};

        border-width: 1px;
        border-style: solid;
        border-radius: ${cssVariables['--border-radius']};
        border-color: ${requiredProps.type === 'success'
            ? cssColors['--success-color']
            : requiredProps.type === 'danger'
            ? cssColors['--danger-color']
            : requiredProps.type === 'info'
            ? cssColors['--info-color']
            : requiredProps.type === 'warning'
            ? cssColors['--warning-color']
            : cssColors['--default-border-color']};
    `;

    const iconWrapper = css`
        height: 100%;
        width: 25px;
        margin-right: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const labelWrapper = css`
        width: 100%;
        height: 100%;

        text-align: start;
        vertical-align: text-top;

        color: ${requiredProps.type === 'success'
            ? cssColors['--success-color']
            : requiredProps.type === 'danger'
            ? cssColors['--danger-color']
            : requiredProps.type === 'info'
            ? cssColors['--info-color']
            : requiredProps.type === 'warning'
            ? cssColors['--warning-color']
            : cssColors['--default-border-color']};
    `;

    const actionButtonWrapper = css`
        width: 30%;

        display: flex;
        justify-content: flex-end;
        align-items: center;
    `;

    return (
        <div className={alertMessageWrapper} style={requiredProps.style}>
            {requiredProps.showIcon ? (
                <div className={iconWrapper}>
                    {lodash.isUndefined(requiredProps.customIcon) ? (
                        requiredProps.type === 'success' ? (
                            <AiOutlineCheckCircle
                                size={'20px'}
                                color={cssColors['--success-color']}
                            />
                        ) : requiredProps.type === 'danger' ? (
                            <AiOutlineCloseCircle
                                size={'20px'}
                                color={cssColors['--danger-color']}
                            />
                        ) : requiredProps.type === 'info' ? (
                            <AiOutlineInfoCircle size={'20px'} color={cssColors['--info-color']} />
                        ) : requiredProps.type === 'warning' ? (
                            <AiOutlineWarning size={'20px'} color={cssColors['--warning-color']} />
                        ) : (
                            cssColors['--default-border-color']
                        )
                    ) : (
                        requiredProps.customIcon
                    )}
                </div>
            ) : null}
            <div className={labelWrapper}>{requiredProps.label}</div>
            {lodash.isUndefined(requiredProps.actionButton) ? null : (
                <div className={actionButtonWrapper}>{requiredProps.actionButton}</div>
            )}
        </div>
    );
};
