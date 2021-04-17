import React, { ReactElement, useEffect, useState } from 'react';
import styles from './SliderModal.module.scss';
import { ISliderModalProps } from './SliderModal.types';
export { ISliderModalProps } from './SliderModal.types';
import cn from 'classnames';
import { ICONS } from '../../utilities/icons';
import { defaultColors, defaultFontSizes } from '../../theme/storybookTheme';
import { IconButton } from '../IconButton/IconButton';

export const SliderModal = (props: ISliderModalProps): ReactElement => {
    const {
        show,
        sliderTitle,
        children,
        sliderFooter,
        onClose,
        disableBackdropClick,
        width,
        showCloseButton,
    } = props;

    return (
        <div
            className={cn(styles.wrapper, {
                [styles.wrapperShow]: show,
                [styles.wrapperHide]: !show,
            })}
        >
            <div
                className={cn(styles.backdrop, {
                    [styles.backdropShow]: show,
                    [styles.backdropHide]: !show,
                })}
                onClick={disableBackdropClick ? null : onClose}
            />
            <div
                className={cn(styles.slider, { [styles.sliderShow]: show })}
                style={show ? { width: width } : null}
            >
                <div className={styles.sliderHeader}>
                    <h3>{sliderTitle}</h3>
                    {showCloseButton ? (
                        <IconButton
                            colors={defaultColors}
                            fontSizes={defaultFontSizes}
                            icon={<ICONS.MdClose />}
                            theme="danger"
                            size="small"
                            onClick={onClose}
                        />
                    ) : null}
                </div>
                <div className={styles.sliderBody}>{children}</div>
                <div className={styles.sliderFooter}>{sliderFooter}</div>
            </div>
        </div>
    );
};
