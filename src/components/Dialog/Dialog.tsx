import React, { CSSProperties, ReactElement } from 'react';
import styles from './Dialog.module.scss';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import './DialogTransitions.scss';
import {
    IDialogFooterProps,
    IDialogHeaderProps,
    IDialogLayoutWrapperProps,
    IDialogProps,
} from './Dialog.types';
import { IconButton } from '../IconButton/IconButton';
import Icon from '@iconify/react';
import { ICONS } from '../../utilities/icons';
import { IDialogBodyProps } from '..';

export {
    IDialogBodyProps,
    IDialogFooterProps,
    IDialogHeaderProps,
    IDialogLayoutWrapperProps,
    IDialogProps,
} from './Dialog.types';

export const DialogHeader = (props: IDialogHeaderProps): ReactElement => {
    // props
    const { title, dialogCloseCallback } = props;

    // draw
    return (
        <div className={styles.dialogHeader}>
            <div className={styles.dialogTitle}>{title}</div>
            {dialogCloseCallback && (
                <IconButton
                    size="small"
                    icon={<Icon icon={ICONS.close} />}
                    theme="auto"
                    onClick={dialogCloseCallback}
                />
            )}
        </div>
    );
};

export const DialogBody = (props: IDialogBodyProps): ReactElement => {
    // props
    const { children } = props;

    // draw
    return <div className={styles.dialogBody}>{children}</div>;
};

export const DialogFooter = (props: IDialogFooterProps): ReactElement => {
    // props
    const { children, justifyContent = 'flex-end' } = props;

    // styles
    const footerStyle: CSSProperties = {
        justifyContent,
    };

    // draw
    return (
        <div className={styles.dialogFooter} style={footerStyle}>
            {children}
        </div>
    );
};

export const DialogLayoutWrapper = (props: IDialogLayoutWrapperProps): ReactElement => {
    // props
    const { children, gridRowStructure = ['auto', '1fr', 'auto'], height = 'auto' } = props;

    // styles
    const layoutWrapperStyle: CSSProperties = {
        gridTemplateRows: gridRowStructure.join(' '),
        height,
    };

    // draw
    return (
        <div className={styles.layoutWrapper} style={layoutWrapperStyle}>
            {gridRowStructure.map((_, index) => {
                return children?.[index];
            })}
        </div>
    );
};

export const Dialog = (props: IDialogProps): ReactElement => {
    // props
    const { showDialog, width = '600px', children, onBackdropClick } = props;

    // styles
    const wrapperClassName = cn(styles.wrapper, {
        [styles.wrapperOpen]: showDialog,
        [styles.wrapperClose]: !showDialog,
    });
    const dialogCardStyle: CSSProperties = {
        maxWidth: width,
    };

    // draw
    return (
        <div className={wrapperClassName}>
            <CSSTransition classNames="dialog-backdrop" in={showDialog} unmountOnExit timeout={300}>
                <div className={styles.backdrop} onClick={onBackdropClick} />
            </CSSTransition>
            <CSSTransition classNames="dialog" in={showDialog} unmountOnExit timeout={300}>
                <div className={styles.dialogCard} style={dialogCardStyle}>
                    {children}
                </div>
            </CSSTransition>
        </div>
    );
};
