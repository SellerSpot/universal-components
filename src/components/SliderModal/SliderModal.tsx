import Icon from '@iconify/react';
import cn from 'classnames';
import React, { CSSProperties, ReactElement } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ICONS } from '../../utilities';
import { IconButton } from '../IconButton/IconButton';
import styles from './SliderModal.module.scss';
import {
    ISliderModalBodyProps,
    ISliderModalFooterProps,
    ISliderModalHeaderProps,
    ISliderModalLayoutWrapperProps,
    ISliderModalProps,
} from './SliderModal.types';
import './SliderModalTransition.scss';

export {
    ISliderModalBodyProps,
    ISliderModalFooterProps,
    ISliderModalHeaderProps,
    ISliderModalProps,
    ISliderModalLayoutWrapperProps,
} from './SliderModal.types';

export const SliderModalLayoutWrapper = (props: ISliderModalLayoutWrapperProps): ReactElement => {
    // props
    const { gridRowStructure = ['auto', '1fr', 'auto'], children, subSliderModals } = props;

    // styles
    const layoutWrapperStyle: CSSProperties = {
        gridTemplateRows: gridRowStructure.join(' '),
    };
    const childWrapperStyle: CSSProperties = {
        width: '100%',
        height: '100%',
        overflow: 'auto',
    };

    // draw
    return (
        <div className={styles.layoutWrapper} style={layoutWrapperStyle}>
            {gridRowStructure.map((_, index) => {
                return (
                    <div key={index} style={childWrapperStyle}>
                        {children[index]}
                    </div>
                );
            })}
            {subSliderModals}
        </div>
    );
};

export const SliderModalHeader = (props: ISliderModalHeaderProps): ReactElement => {
    // props
    const { title, modalCloseCallback, modalGoBackCallback } = props;

    // draw
    return (
        <div className={styles.modalHeader}>
            <div className={styles.leftGroup}>
                {!!modalGoBackCallback && (
                    <IconButton
                        icon={<Icon icon={ICONS.arrowBack} />}
                        theme="auto"
                        size="medium"
                        onClick={modalGoBackCallback}
                    />
                )}
                <div className={styles.modalTitle}>{title}</div>
            </div>
            {!!modalCloseCallback && (
                <IconButton
                    icon={<Icon icon={ICONS.close} />}
                    theme="danger"
                    size="medium"
                    onClick={modalCloseCallback}
                />
            )}
        </div>
    );
};

export const SliderModalBody = (props: ISliderModalBodyProps): ReactElement => {
    // props
    const { children } = props;
    // draw
    return <div className={styles.modalBody}>{children}</div>;
};

export const SliderModalFooter = (props: ISliderModalFooterProps): ReactElement => {
    // props
    const { children } = props;
    // draw
    return <div className={styles.modalFooter}>{children}</div>;
};

const Backdrop = (props: {
    showModal: boolean;
    onBackdropClick: ISliderModalProps['onBackdropClick'];
}) => {
    // props
    const { showModal, onBackdropClick } = props;

    // draw
    return (
        <CSSTransition
            in={showModal}
            unmountOnExit
            classNames="slider-modal-backdrop"
            timeout={500}
        >
            <div onClick={onBackdropClick} className={styles.backdrop} />
        </CSSTransition>
    );
};

/**
 * Used to display a sliding on the screen
 * The sibiling components of SliderModal should be used in the following order
 * ```html
 * <SliderModal>
        <SliderModalLayoutWrapper>
            <SliderModalHeader />
            <SliderModalBody />                
            <SliderModalFooter />                
        </SliderModalLayoutWrapper>
    </SliderModal>
 * ```
 */
export const SliderModal = (props: ISliderModalProps): ReactElement => {
    // props
    const { showModal, onBackdropClick, children, width, type, showBackdrop = true } = props;

    // styles
    const wrapperClassName = cn(
        styles.wrapper,
        {
            [styles.wrapperOpen]: showModal,
            [styles.wrapperClose]: !showModal,
        },
        { [styles.wrapperAbsolute]: type === 'absolute' },
    );
    const modalStyle: CSSProperties = {
        width,
    };

    // draw
    return (
        <div className={wrapperClassName}>
            {showBackdrop && <Backdrop showModal={showModal} onBackdropClick={onBackdropClick} />}
            <CSSTransition
                in={showModal}
                mountOnEnter
                classNames="slider-modal"
                unmountOnExit
                timeout={300}
            >
                <div className={styles.modal} style={modalStyle}>
                    {children}
                </div>
            </CSSTransition>
        </div>
    );
};
