import React, { ReactNode } from 'react';
import lodash from 'lodash';
import { css } from '@emotion/css';

export interface ISliderModalProps {
    active: boolean;
    children: ReactNode;
    sliderSize?: '10%' | '20%' | '30%' | '40%' | '50%' | '60%' | '70%' | '80%' | '90%' | '100%'; // on small screeen by default slider width will span to entire width
    onClickBackdrop?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const SliderModal = (props: ISliderModalProps): JSX.Element => {
    const defaultProps: ISliderModalProps = {
        active: false,
        children: null,
        sliderSize: '40%',
        onClickBackdrop: () => void 0,
    };

    const requiredProps = lodash.merge(defaultProps, props);

    const sliderModalWrapper = css`
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 6;
        overflow: hidden;

        transition: ${requiredProps.active
            ? 'background-color 0.2s ease-in-out-out;'
            : 'right 0.3s ease-in-out'};

        right: ${requiredProps.active ? 0 : '-100%'};

        background: ${requiredProps.active ? 'rgb(0, 0, 0, 0.4)' : 'transparent'};
    `;

    const backdropOverlay = css`
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;
        top: 0;
        left: 0;
    `;

    const sliderContentWrapper = css`
        position: absolute;
        height: 100%;
        z-index: 1;
        top: 0;
        overflow-y: auto;
        transition: right 0.2s ease-in-out;

        width: ${requiredProps.sliderSize};
        right: ${requiredProps.active ? 0 : '-100%'};
    `;

    return (
        <div className={sliderModalWrapper}>
            <div className={backdropOverlay} />
            <div className={sliderContentWrapper}>{requiredProps.children}</div>
        </div>
    );
};
