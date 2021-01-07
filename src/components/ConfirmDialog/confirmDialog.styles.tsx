import { css } from '@emotion/css';
import { cssColors, cssVariables } from '../../config';
import { IConfirmDialogProps } from './ConfirmDialog';

export interface IGetConfirmDialogClasses {
    confirmDialogWrapper?: string;
    confirmDialogContentWrapper?: string;
    content?: string;
}

export const getConfirmDialogClasses = (
    requiredProps: IConfirmDialogProps,
): IGetConfirmDialogClasses => {
    const confirmDialogWrapper = css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: ${cssVariables['--z-index-confirm-dialog']};
        overflow: hidden;
        transition: background-color 0.2s ease-in-out 0s;
        visibility: ${requiredProps.active ? 'visible' : 'hidden'};
        background: ${requiredProps.active ? cssColors['--overlay-color'] : 'transparent'};
    `;

    const confirmDialogContentWrapper = css`
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.2s ease-in-out 0s;
        opacity: ${requiredProps.active ? 1 : 0};
    `;

    const content = css`
        position: relative;
        width: 40%;
        height: 160px;
        background-color: ${cssColors['--primary-background-color']};
        border: 1px solid ${cssColors['--primary-background-color']};
        box-shadow: ${cssVariables['--shadow-style']};
        border-radius: ${cssVariables['--border-radius']};
        padding: 10px;
        padding-bottom: 5px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 30px 1fr 30px;
        row-gap: 5px;
    `;

    return {
        confirmDialogContentWrapper,
        confirmDialogWrapper,
        content,
    };
};
