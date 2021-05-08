import cn from 'classnames';
import React, { ReactElement } from 'react';
import { ICONS } from '../../utilities/icons';
import styles from './SliderModal.module.scss';
import {
    ISliderModalBodyProps,
    ISliderModalHeaderProps,
    ISliderModalProps,
} from './SliderModal.types';

export { ISliderModalProps } from './SliderModal.types';

export const SliderModalBody = (props: ISliderModalBodyProps): ReactElement => {
    const { children } = props;
    return <div className={styles.modalContentBody}>{children}</div>;
};

export const SliderModalHeader = (props: ISliderModalHeaderProps): ReactElement => {
    const { children, showActionButton, onActionButtonClick } = props;
    return (
        <div className={styles.modalContentHeader}>
            {!!showActionButton ? (
                <div
                    className={styles.modalContentHeaderActionButtonWrapper}
                    onClick={onActionButtonClick}
                >
                    {showActionButton === 'backButton' ? (
                        <ICONS.MdArrowBack className={styles.modalContentHeaderActionButton} />
                    ) : (
                        <ICONS.MdClose className={styles.modalContentHeaderActionButton} />
                    )}
                </div>
            ) : null}
            <div className={styles.modalContentHeaderContent}>{children}</div>
        </div>
    );
};

export const SliderModal = (props: ISliderModalProps): ReactElement => {
    const { show, children, onBackdropClick, width } = props;
    // custom styling to set the modal width
    const modalStyle: React.CSSProperties = {
        width,
    };
    return (
        <div className={cn(styles.sliderModalWrapper, { [styles.sliderModalWrapperShow]: show })}>
            <div
                className={cn(styles.backdrop, { [styles.backdropShow]: show })}
                onClick={onBackdropClick}
            >
                <div className={cn(styles.modal, { [styles.modalShow]: show })} style={modalStyle}>
                    {children}
                </div>
            </div>
        </div>
    );
};
