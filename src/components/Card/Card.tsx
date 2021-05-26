import React, { ReactElement } from 'react';
import { Card as MUICard, CardActions, CardContent, CardMedia } from '@material-ui/core';
import styles from './Card.module.scss';
import cn from 'classnames';
import { ICardProps } from './Card.types';

export { ICardProps } from './Card.types';

export const Card = (props: ICardProps): ReactElement => {
    const { actions, className, content, image, onClick } = props;
    const cardMediaClassName = cn(styles.mediaDefault, className?.mediaWrapper);
    return (
        <MUICard onClick={onClick} className={className?.cardWrapper}>
            {image ? <CardMedia className={cardMediaClassName} image={image} /> : null}
            {content ? (
                <CardContent className={className?.contentWrapper}>{content}</CardContent>
            ) : null}
            {actions ? (
                <CardActions className={className?.actionsWrapper}>{actions}</CardActions>
            ) : null}
        </MUICard>
    );
};
