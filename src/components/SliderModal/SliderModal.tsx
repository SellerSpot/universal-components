import React from 'react';
import lodash from 'lodash';
import { cx } from '@emotion/css';
import { getSliderModalStyles } from './sliderModal.styles';
import { ISliderModalProps } from './sliderModal.types';
import { MdClose } from 'react-icons/md';
import { useHotkeys } from 'react-hotkeys-hook';

export const SliderModal = (props: ISliderModalProps): JSX.Element => {
    const defaultProps: ISliderModalProps = {
        active: false,
        children: null,
        sliderSize: '40%',
        onClickBackdrop: () => void 0,
        onClickEsc: () => void 0,
    };

    const requiredProps = lodash.merge(defaultProps, props);
    const styles = getSliderModalStyles(requiredProps);
    useHotkeys('esc', requiredProps.onClickEsc);

    return (
        <div
            className={cx(styles.sliderModalWrapper, requiredProps.className?.sliderModalWrapper)}
            style={requiredProps.style?.sliderModalWrapper}
        >
            <div
                className={cx(styles.backdropOverlay, requiredProps.className?.backdropOverlay)}
                style={requiredProps.style?.backdropOverlay}
                onClick={requiredProps.onClickBackdrop}
            />
            <div
                className={cx(
                    styles.sliderContentWrapper,
                    requiredProps.className?.sliderContentWrapper,
                )}
                style={requiredProps.style?.sliderContentWrapper}
            >
                {requiredProps.sliderSize !== '100%' ? (
                    <div
                        className={cx(
                            styles.sliderCloseButtonWrapper,
                            requiredProps.className?.sliderCloseButtonWrapper,
                        )}
                        style={requiredProps.style?.sliderCloseButtonWrapper}
                        onClick={requiredProps.onClickBackdrop}
                    >
                        <MdClose fontSize={'20px'} />
                    </div>
                ) : null}
                {requiredProps.children}
            </div>
        </div>
    );
};
