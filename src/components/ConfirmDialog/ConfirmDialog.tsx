import React, { ReactElement } from 'react';
import { Button } from '../Button/Button';
import { cssVariables } from '../../config';
import lodash from 'lodash';
import { getConfirmDialogClasses, IGetConfirmDialogClasses } from './confirmDialog.styles';
import { cx } from '@emotion/css';

export interface IConfirmDialogProps {
    active?: boolean;
    title?: JSX.Element;
    content?: JSX.Element;
    footer?: JSX.Element;
    className?: IGetConfirmDialogClasses;
    style?: {
        confirmDialogWrapperStyle?: React.CSSProperties;
        confirmDialogContentWrapperStyle?: React.CSSProperties;
        contentStyle?: React.CSSProperties;
    };
}

export const ConfirmDialog = (props: IConfirmDialogProps): ReactElement => {
    const defaultProps: IConfirmDialogProps = {
        title: <p style={{ fontSize: cssVariables['--font-size-header'] }}>Sample Header</p>,
        content: <div style={{ width: '100%', height: '50px' }}>This is sample content</div>,
        footer: (
            <div>
                <Button label={'One Step from Success'} />
                <Button label={'Success'} />
            </div>
        ),
    };

    const requiredProps = lodash.merge(defaultProps, props);
    const classNames = getConfirmDialogClasses(requiredProps);

    return (
        <div
            className={cx(
                classNames.confirmDialogWrapper,
                requiredProps.className?.confirmDialogWrapper,
            )}
            style={requiredProps.style?.confirmDialogWrapperStyle}
        >
            <div
                className={cx(
                    classNames.confirmDialogContentWrapper,
                    requiredProps.className?.confirmDialogContentWrapper,
                )}
                style={requiredProps.style?.confirmDialogContentWrapperStyle}
            >
                <div
                    className={cx(classNames.content, requiredProps.className?.content)}
                    style={requiredProps.style?.contentStyle}
                >
                    {requiredProps.title}
                    {requiredProps.content}
                    {requiredProps.footer}
                </div>
            </div>
        </div>
    );
};
