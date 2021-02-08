import { css } from '@emotion/css';
import { cssColors, cssVariables } from '../../config';
import { IGetSliderModalStyles, ISliderModalProps } from './sliderModal.types';

export const getSliderModalStyles = (requiredProps: ISliderModalProps): IGetSliderModalStyles => {
    return {
        sliderModalWrapper: css`
            position: fixed;
            z-index: 0;
            right: ${requiredProps.active ? 0 : '-100%'};
            overflow: hidden;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            transition: right 0s ease-in-out;
            transition-delay: ${requiredProps.active ? 0 : '.4s'};
            background-color: transparent;
        `,
        backdropOverlay: css`
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            transition: background-color 0.3s ease-in-out;
            background-color: ${requiredProps.active ? 'rgb(0, 0, 0, .5)' : 'transparent'};
        `,
        sliderContentWrapper: css`
            position: absolute;
            top: 0;
            right: ${requiredProps.active ? 0 : '-100%'};
            width: ${requiredProps.sliderSize};
            height: 100%;
            margin: 0;
            padding: 0;
            transition: right 0.3s ease-in-out;
            background: ${cssColors['--primary-background-color']};
        `,
        sliderCloseButtonWrapper: css`
            font-size: 12px;
            font-weight: bold;
            position: absolute;
            top: 5px;
            left: -40px;
            display: flex;
            width: 35px;
            height: 35px;
            margin: 0;
            padding: 0;
            cursor: pointer;
            border-radius: ${cssVariables['--border-radius']};
            background: ${cssColors['--primary-background-color']};
            align-items: center;
            justify-content: center;
        `,
    };
};
