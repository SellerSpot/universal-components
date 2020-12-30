import { css } from '@emotion/css';
import { IToggleButtonProps } from './ToggleButton';

export interface IGetToggleButtonClasses {
    toggleButtonWrapper?: string;
    toggleButtonInput?: string;
    actionBlockHolder?: string;
    actionClickBlock?: string;
    sliderHandle?: string;
}

export const getToggleButtonClasses = (active: boolean): IGetToggleButtonClasses => {
    const toggleButtonWrapper = css`
        width: 55px;
        height: 26px;
        background: transparent;
        position: relative;
    `;

    const toggleButtonInput = css`
        visibility: hidden;
        appearance: none;
    `;

    const actionBlockHolder = css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        border-radius: 20px;
        overflow: hidden;
        background: ${active ? 'rgb(31, 136, 255)' : 'rgb(226, 226, 226)'};
        transition: all 0.2s ease-in;
    `;

    const actionClickBlock = css`
        width: 100%;
        height: 100%;
        background: transparent;
        cursor: pointer;
    `;

    const sliderHandle = css`
        position: absolute;
        left: ${active ? '55%' : '5%'};
        margin-top: -11px;
        top: 50%;
        width: 22px;
        height: 22px;
        background: white;
        transition: all 0.2s ease-in;
        border-radius: 50%;
        cursor: pointer;
    `;
    return {
        actionBlockHolder,
        actionClickBlock,
        sliderHandle,
        toggleButtonInput,
        toggleButtonWrapper,
    };
};
