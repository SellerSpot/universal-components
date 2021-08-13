import { State, useState } from '@hookstate/core';
import Icon from '@iconify/react';
import cn from 'classnames';
import { isArray } from 'lodash';
import React, { CSSProperties, ReactElement, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ICONS } from '../../utilities/icons';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import styles from './SliderModal.module.scss';
import {
    ISliderModalBodyProps,
    ISliderModalFooterProps,
    ISliderModalHeaderProps,
    ISliderModalLayoutWrapperProps,
    ISliderModalProps,
} from './SliderModal.types';
import './SliderModalTransitions.scss';

export {
    ISliderModalBodyProps,
    ISliderModalFooterProps,
    ISliderModalHeaderProps,
    ISliderModalProps,
    ISliderModalLayoutWrapperProps,
} from './SliderModal.types';

export const SliderModalLayoutWrapper = (props: ISliderModalLayoutWrapperProps): ReactElement => {
    // props
    const { gridRowStructure = ['auto', '1fr', 'auto'], children } = props;

    // styles
    const layoutWrapperStyle: CSSProperties = {
        gridTemplateRows: gridRowStructure.join(' '),
    };

    const sanitizedChildren = isArray(children) ? children : [children];

    // draw
    return (
        <div className={styles.layoutWrapper} style={layoutWrapperStyle}>
            {gridRowStructure.map((_, index) => {
                return sanitizedChildren[index];
            })}
        </div>
    );
};

export const SliderModalHeader = (props: ISliderModalHeaderProps): ReactElement => {
    // props
    const {
        title,
        titlePlacement = 'left',
        modalGoBackText,
        modalCloseCallback,
        modalGoBackCallback,
    } = props;

    // draw
    return (
        <div
            className={cn(styles.modalHeader, {
                [styles.modalTitleWithLeftOrRightAlignment]:
                    titlePlacement === 'left' || titlePlacement === 'right',
                [styles.modalTitleWithCenterAlignment]: titlePlacement === 'center',
            })}
        >
            <div className={styles.leftGroup}>
                {!!modalGoBackCallback &&
                    (modalGoBackText ? (
                        <Button
                            startIcon={<Icon icon={ICONS.arrowBack} />}
                            label="Go back to cart"
                            onClick={modalGoBackCallback}
                            theme="light"
                            variant="contained"
                            disableElevation
                        />
                    ) : (
                        <IconButton
                            icon={<Icon icon={ICONS.arrowBack} />}
                            theme="dark"
                            size="medium"
                            onClick={modalGoBackCallback}
                        />
                    ))}
            </div>
            <div
                className={cn(styles.centerGroup, styles.modalTitle, {
                    [styles.modalTitlePlacementLeft]: titlePlacement === 'left',
                    [styles.modalTitlePlacementCenter]: titlePlacement === 'center',
                    [styles.modalTitlePlacementRigth]: titlePlacement === 'right',
                })}
            >
                {title}
            </div>
            <div className={styles.rightGroup}>
                {!!modalCloseCallback && (
                    <IconButton
                        icon={<Icon icon={ICONS.close} />}
                        theme="danger"
                        size="medium"
                        onClick={modalCloseCallback}
                    />
                )}
            </div>
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
    showTransition: State<boolean>;
    onBackdropClick: ISliderModalProps['onBackdropClick'];
}) => {
    // props
    const { showTransition, onBackdropClick } = props;

    // draw
    return (
        <CSSTransition
            in={showTransition.get()}
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
    // state
    const showTransition = useState(false);

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

    // effects
    useEffect(() => {
        showTransition.set(showModal);
    }, [showModal]);

    // draw
    return (
        <div className={wrapperClassName}>
            {showBackdrop && (
                <Backdrop showTransition={showTransition} onBackdropClick={onBackdropClick} />
            )}
            <CSSTransition
                in={showTransition.get()}
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
