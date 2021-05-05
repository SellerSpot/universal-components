import cn from 'classnames';
import React, { ReactElement } from 'react';
import { defaultColors, defaultFontSizes } from '../../theme/storybookTheme';
import { ICONS } from '../../utilities/icons';
import { IconButton } from '../IconButton/IconButton';
import styles from './SliderModal.module.scss';
import { ISliderModalProps } from './SliderModal.types';

export { ISliderModalProps } from './SliderModal.types';

export const SliderModal = (props: ISliderModalProps): ReactElement => {
    const {
        show,
        sliderHeader,
        children,
        sliderFooter,
        onClose,
        disableBackdropClick,
        width,
        showCloseButton,
        showBackButton,
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
                })}
                onClick={disableBackdropClick ? null : onClose}
            />
            <div
                className={cn(styles.slider, {
                    [styles.sliderShow]: show,
                })}
                style={{ width: width }}
            >
                <div className={styles.sliderHeader}>
                    <div className={styles.titleWrapper}>
                        {showBackButton ? (
                            <IconButton
                                icon={<ICONS.MdKeyboardArrowLeft size={25} />}
                                theme="auto"
                                size="small"
                                onClick={onClose}
                            />
                        ) : null}
                        {sliderHeader}
                    </div>
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
