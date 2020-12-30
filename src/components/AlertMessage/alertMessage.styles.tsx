import { css } from '@emotion/css';
import { cssColors, cssVariables } from '../../config';
import { IAlertMessageProps } from './AlertMessage';

export interface IGetAlertMessageClasses {
    alertMessageWrapper?: string;
    iconWrapper?: string;
    labelWrapper?: string;
    actionButtonWrapper?: string;
    icon?: string;
}

export const getAlertMessageClasses = (
    requiredProps: IAlertMessageProps,
): IGetAlertMessageClasses => {
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

    return {
        alertMessageWrapper,
        iconWrapper,
        labelWrapper,
        actionButtonWrapper,
    };
};
