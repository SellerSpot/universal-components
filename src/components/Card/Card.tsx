import React, { ReactElement } from 'react';
import { Card as MUICard, CardActions, CardContent } from '@material-ui/core';
import { ICardProps } from './Card.types';
import { Image } from '../Image/Image';

export { ICardProps } from './Card.types';

export const Card = (props: ICardProps): ReactElement => {
    const { actions, className, content, image, onClick } = props;
    return (
        <MUICard onClick={onClick} className={className?.cardWrapper}>
            {image && <Image height={200} src={image} />}
            {content && <CardContent className={className?.contentWrapper}>{content}</CardContent>}
            {actions && <CardActions className={className?.actionsWrapper}>{actions}</CardActions>}
        </MUICard>
    );
};
