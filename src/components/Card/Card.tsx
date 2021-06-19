import React, { ReactElement } from 'react';
import { Card as MUICard, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { ICardProps } from './Card.types';
import cn from 'classnames';
import styles from './Card.module.scss';
import { Image } from '../Image/Image';

export { ICardProps } from './Card.types';

export const Card = (props: ICardProps): ReactElement => {
    const { actions, className, content, image, onClick } = props;
    const cardClassName = cn(styles.cardWrapper, className?.cardWrapper);
    return (
        <MUICard elevation={0} onClick={onClick} className={cardClassName}>
            {image && (
                <CardMedia style={{ height: 200 }} className={className?.mediaWrapper}>
                    <Image objectFit="cover" src={image} />
                </CardMedia>
            )}
            {content && <CardContent className={className?.contentWrapper}>{content}</CardContent>}
            {actions && <CardActions className={className?.actionsWrapper}>{actions}</CardActions>}
        </MUICard>
    );
};
