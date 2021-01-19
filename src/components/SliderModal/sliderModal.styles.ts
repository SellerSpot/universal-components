import { css } from '@emotion/css';
import { cssColors, cssVariables } from '../../config';
import { IGetSliderModalStyles, ISliderModalProps } from './sliderModal.types';

export const getSliderModalStyles = (requiredProps: ISliderModalProps): IGetSliderModalStyles => {
    return {
        sliderModalWrapper: css`
            box-sizing: border-box;
            position: fixed;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: ${cssVariables['--z-index-slider-modal']};
            overflow: hidden;
            right: ${requiredProps.active ? 0 : '-100%'};
            background-color: transparent;

            transition: right 0.1s ease-in-out;
        `,
        backdropOverlay: css`
            box-sizing: border-box;
            position: fixed;
            width: 100%;
            height: 100%;
            z-index: ${cssVariables['--z-index-slider-modal']};
            top: 0;
            left: 0;
            background-color: ${requiredProps.active ? 'rgb(0, 0, 0, 0.4)' : 'transparent'};

            transition: background-color 0.2s ease-in-out;
        `,
        sliderContentWrapper: css`
            display: flex;
            justify-content: flex-end;
            height: 100%;
            width: 100%;
            gap: 5px;
            right: ${requiredProps.active ? '0' : '-100%'};

            transition: right 0.1s ease-in-out;
            transition-delay: 2s;
        `,

        sliderCloseButtonWrapper: css`
            box-sizing: border-box;
            width: 35px;
            height: 35px;
            background-color: ${cssColors['--primary-background-color']};
            margin-top: 5px;
            cursor: pointer;
            border-radius: ${cssVariables['--border-radius']};
            z-index: ${cssVariables['--z-index-slider-modal']};
            display: flex;
            justify-content: center;
            align-items: center;
            right: ${requiredProps.active ? '0' : '-100%'};
        `,

        sliderContent: css`
            box-sizing: border-box;
            height: 100%;
            z-index: ${cssVariables['--z-index-slider-modal']};
            top: 0;
            overflow-y: auto;
            width: ${requiredProps.sliderSize};
        `,
    };
};
