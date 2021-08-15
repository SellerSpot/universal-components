import React, { ReactElement } from 'react';
import { Card as MUICard, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { ICardProps } from './Card.types';
import cn from 'classnames';
import styles from './Card.module.scss';
import { Image } from '../Image/Image';

export { ICardProps } from './Card.types';

export const Card = (props: ICardProps): ReactElement => {
    const {
        actions,
        className,
        content,
        image,
        onClick,
        applyOverflowUnsetClass = true,
        gapBetweenSections = true,
        inBuiltPadding = true,
    } = props;
    return (
        <MUICard
            elevation={0}
            onClick={onClick}
            className={cn(styles.cardWrapper, className?.cardWrapper, {
                [styles.overflowUnset]: applyOverflowUnsetClass,
                [styles.inBuiltPadding]: inBuiltPadding,
                [styles.columnGap]: gapBetweenSections,
            })}
        >
            {image && (
                <CardMedia
                    style={{ height: 200 }}
                    className={cn(styles.cardMedia, className?.mediaWrapper)}
                >
                    <Image objectFit="cover" src={image} />
                </CardMedia>
            )}
            {content && (
                <CardContent className={cn(styles.cardContent, className?.contentWrapper)}>
                    {content}
                </CardContent>
            )}
            {actions && (
                <CardActions className={cn(styles.cartActions, className?.actionsWrapper)}>
                    {actions}
                </CardActions>
            )}
        </MUICard>
    );
};
