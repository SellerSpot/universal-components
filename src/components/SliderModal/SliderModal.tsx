import Icon from '@iconify/react';
import cn from 'classnames';
import React, { ReactElement } from 'react';
import { ICONS } from '../../utilities';
import styles from './SliderModal.module.scss';
import {
    ISliderModalBodyProps,
    ISliderModalHeaderProps,
    ISliderModalProps,
} from './SliderModal.types';

export { ISliderModalProps } from './SliderModal.types';

const SliderModalBody = (props: ISliderModalBodyProps): ReactElement => {
    const { children } = props;
    return <div className={styles.modalContentBody}>{children}</div>;
};

const SliderModalHeader = (props: ISliderModalHeaderProps): ReactElement => {
    const { children, showActionButton, onActionButtonClick } = props;
    return (
        <div className={styles.modalContentHeader}>
            {!!showActionButton ? (
                <div
                    className={styles.modalContentHeaderActionButtonWrapper}
                    onClick={onActionButtonClick}
                >
                    {showActionButton === 'backButton' ? (
                        <Icon
                            icon={ICONS.arrowBack}
                            className={styles.modalContentHeaderActionButton}
                        />
                    ) : (
                        <Icon
                            icon={ICONS.close}
                            className={styles.modalContentHeaderActionButton}
                        />
                    )}
                </div>
            ) : null}
            <div className={styles.modalContentHeaderContent}>{children}</div>
        </div>
    );
};

export const SliderModal = (props: ISliderModalProps): ReactElement => {
    const {
        show,
        children,
        onBackdropClick,
        width,
        headerProps,
        zIndex = 10,
        type = 'fixed',
    } = props;

    const wrapperStyle: React.CSSProperties = {
        zIndex,
        position: type,
    };
    // custom styling to set the modal width
    const modalStyle: React.CSSProperties = {
        width,
    };

    return (
        <div
            className={cn(styles.sliderModalWrapper, { [styles.sliderModalWrapperShow]: show })}
            style={wrapperStyle}
        >
            <div
                className={cn(styles.backdrop, { [styles.backdropShow]: show })}
                onClick={onBackdropClick}
            >
                <div className={cn(styles.modal, { [styles.modalShow]: show })} style={modalStyle}>
                    <SliderModalHeader {...headerProps}>{children[0]}</SliderModalHeader>
                    <SliderModalBody>{children[1]}</SliderModalBody>
                </div>
            </div>
        </div>
    );
};
