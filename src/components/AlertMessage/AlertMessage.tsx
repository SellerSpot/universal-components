import React from 'react';
import {
    AiOutlineCheckCircle,
    AiOutlineCloseCircle,
    AiOutlineInfoCircle,
    AiOutlineWarning,
} from 'react-icons/ai';
import lodash from 'lodash';
import { cssColors } from '../../config';
import { getAlertMessageClasses, IGetAlertMessageClasses } from './alertMessage.styles';
import { cx } from '@emotion/css';

export interface IAlertMessageProps {
    type?: 'success' | 'warning' | 'danger' | 'info';
    label?: string;
    actionButton?: JSX.Element;
    showIcon?: boolean;
    customIcon?: JSX.Element;
    style?: {
        alertMessageWrapperStyle?: React.CSSProperties;
        iconWrapperStyle?: React.CSSProperties;
        iconStyle?: React.CSSProperties;
        labelWrapperStyle?: React.CSSProperties;
        actionButtonWrapperStyle?: React.CSSProperties;
    };
    className?: IGetAlertMessageClasses;
}

export const AlertMessage: React.FC<IAlertMessageProps> = (
    props: IAlertMessageProps,
): JSX.Element => {
    const defaultProps: IAlertMessageProps = {
        type: 'success',
        label: 'Sample AlertMessage Message',
        showIcon: true,
    };
    const requiredProps = lodash.merge(defaultProps, props);
    const classes = getAlertMessageClasses(requiredProps);

    return (
        <div
            className={cx(
                classes.alertMessageWrapper,
                requiredProps.className?.alertMessageWrapper,
            )}
            style={requiredProps.style?.alertMessageWrapperStyle}
        >
            {requiredProps.showIcon ? (
                <div className={cx(classes.iconWrapper, requiredProps.className.iconWrapper)}>
                    {lodash.isUndefined(requiredProps.customIcon) ? (
                        requiredProps.type === 'success' ? (
                            <AiOutlineCheckCircle
                                size={'20px'}
                                color={cssColors['--success-color']}
                                className={requiredProps.className?.icon}
                                style={requiredProps.style?.iconStyle}
                            />
                        ) : requiredProps.type === 'danger' ? (
                            <AiOutlineCloseCircle
                                size={'20px'}
                                color={cssColors['--danger-color']}
                                className={requiredProps.className?.icon}
                                style={requiredProps.style?.iconStyle}
                            />
                        ) : requiredProps.type === 'info' ? (
                            <AiOutlineInfoCircle
                                size={'20px'}
                                color={cssColors['--info-color']}
                                className={requiredProps.className?.icon}
                                style={requiredProps.style?.iconStyle}
                            />
                        ) : requiredProps.type === 'warning' ? (
                            <AiOutlineWarning
                                size={'20px'}
                                color={cssColors['--warning-color']}
                                className={requiredProps.className?.icon}
                                style={requiredProps.style?.iconStyle}
                            />
                        ) : (
                            cssColors['--default-border-color']
                        )
                    ) : (
                        requiredProps.customIcon
                    )}
                </div>
            ) : null}
            <div
                className={cx(classes.labelWrapper, requiredProps.className?.labelWrapper)}
                style={requiredProps.style?.labelWrapperStyle}
            >
                {requiredProps.label}
            </div>
            {lodash.isUndefined(requiredProps.actionButton) ? null : (
                <div
                    className={cx(
                        classes.actionButtonWrapper,
                        requiredProps.className?.actionButtonWrapper,
                    )}
                    style={requiredProps.style?.actionButtonWrapperStyle}
                >
                    {requiredProps.actionButton}
                </div>
            )}
        </div>
    );
};
