import React from 'react';
import {
    AiOutlineCheckCircle,
    AiOutlineCloseCircle,
    AiOutlineInfoCircle,
    AiOutlineWarning,
} from 'react-icons/ai';
import lodash from 'lodash';
import { cssColors, cssVariables } from '../../config';
import { getAlertMessageClasses } from './alertMessage.styles';

export interface IAlertMessageProps {
    type?: 'success' | 'warning' | 'danger' | 'info';
    label?: string;
    actionButton?: JSX.Element;
    showIcon?: boolean;
    customIcon?: JSX.Element;
    style?: React.CSSProperties;
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
        <div className={classes.alertMessageWrapper} style={requiredProps.style}>
            {requiredProps.showIcon ? (
                <div className={classes.iconWrapper}>
                    {lodash.isUndefined(requiredProps.customIcon) ? (
                        requiredProps.type === 'success' ? (
                            <AiOutlineCheckCircle
                                size={'20px'}
                                color={cssColors['--success-color']}
                            />
                        ) : requiredProps.type === 'danger' ? (
                            <AiOutlineCloseCircle
                                size={'20px'}
                                color={cssColors['--danger-color']}
                            />
                        ) : requiredProps.type === 'info' ? (
                            <AiOutlineInfoCircle size={'20px'} color={cssColors['--info-color']} />
                        ) : requiredProps.type === 'warning' ? (
                            <AiOutlineWarning size={'20px'} color={cssColors['--warning-color']} />
                        ) : (
                            cssColors['--default-border-color']
                        )
                    ) : (
                        requiredProps.customIcon
                    )}
                </div>
            ) : null}
            <div className={classes.labelWrapper}>{requiredProps.label}</div>
            {lodash.isUndefined(requiredProps.actionButton) ? null : (
                <div className={classes.actionButtonWrapper}>{requiredProps.actionButton}</div>
            )}
        </div>
    );
};
