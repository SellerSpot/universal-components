import cn from 'classnames';
import React, { ReactElement } from 'react';
import styles from './Avatar.module.scss';
import { IAvatarProps } from './Avatar.types';

export { IAvatarProps } from './Avatar.types';

export const Avatar = (props: IAvatarProps): ReactElement => {
    const {
        content = 'S',
        disabled = false,
        events,
        size = 'default',
        theme = 'selectedNoBg',
        variant = 'rounded',
        className: userClassName,
        style: userStyle,
    } = props;

    const wrapperClassName = cn(
        styles.wrapper,
        {
            [styles.circular]: variant === 'circular',
            [styles.rounded]: variant === 'rounded',
            [styles.square]: variant === 'square',
        },
        {
            [styles.selected]: theme === 'selected',
            [styles.selectedNoBg]: theme === 'selectedNoBg',
            [styles.unselected]: theme === 'selectedNoBg',
        },
        {
            [styles.mediumWrapper]: size === 'medium',
            [styles.smallWrapper]: size === 'small',
        },
        {
            [styles.disabled]: disabled,
        },
        userClassName,
    );

    return (
        <div
            className={wrapperClassName}
            onClick={events?.onClick}
            onFocus={events?.onFocus}
            onMouseLeave={events?.onMouseLeave}
            onMouseOver={events?.oneMouseOver}
            style={userStyle}
        >
            {content}
        </div>
    );
};
