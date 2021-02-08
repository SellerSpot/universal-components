import lodash from 'lodash';
import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { cx } from '@emotion/css';
import { getSliderModalStyles } from './sliderModal.styles';
import { ISliderModalProps } from './sliderModal.types';

export const SliderModal = (props: ISliderModalProps): JSX.Element => {
    const defaultProps: ISliderModalProps = {
        active: false,
        children: null,
        type: 'fixed',
        sliderSize: '40%',
        zIndex: 0,
        onClickBackdrop: () => void 0,
        onClickEsc: () => void 0,
    };

    const requiredProps = lodash.merge(props, defaultProps);
    const styles = getSliderModalStyles(requiredProps);

    // handler for the keydown listener
    const handleKeydown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            requiredProps.onClickEsc(event);
        }
    };

    //# Keydown event listeners
    useEffect(() => {
        // attaching keydown listener when the slider is active
        if (requiredProps.active) {
            document.addEventListener('keydown', handleKeydown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, [requiredProps.active]);

    return (
        <div
            className={cx(styles.sliderModalWrapper, requiredProps.className?.sliderModalWrapper)}
            style={{
                zIndex: requiredProps.zIndex,
<<<<<<< HEAD
                position: requiredProps.type,
=======
>>>>>>> 63dc32c0825b7beb0797a749f8e5249a079dffac
                ...requiredProps.style?.sliderModalWrapper,
            }}
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
