import cn from 'classnames';
import React, { ReactElement } from 'react';
import styles from './Avatar.module.scss';
import { IAvatarProps } from './Avatar.types';

export { IAvatarProps } from './Avatar.types';

export const Avatar = (props: IAvatarProps): ReactElement => {
    const { content, disabled, events, size, theme, variant } = props;

    const className = !disabled
        ? cn(
              styles.wrapper,
              { [styles.selectedNoBg]: theme === 'selectedNoBg' },
              { [styles.selected]: theme === 'selected' },
              { [styles.unselected]: theme === 'unselected' },
              {
                  [styles.smallWrapper]: size === 'small',
              },
              {
                  [styles.mediumWrapper]: size === 'medium',
              },
              { [styles.circular]: variant === 'circular' },
              { [styles.rounded]: variant === 'rounded' },
              { [styles.square]: variant === 'square' },
          )
        : cn(
              styles.wrapper,
              styles.disabled,
              {
                  [styles.smallWrapper]: size === 'small',
              },
              { [styles.mediumWrapper]: size === 'medium' },
          );

    return (
        <div
            className={className}
            onClick={events?.onClick}
            onFocus={events?.onFocus}
            onMouseLeave={events?.onMouseLeave}
            onMouseOver={events?.oneMouseOver}
        >
            {content}
        </div>
    );
};
