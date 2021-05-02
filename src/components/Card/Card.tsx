import React, { ReactElement } from 'react';
import { Card as MUICard, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { ICardProps } from './Card.types';

export { ICardProps } from './Card.types';

export const Card = (props: ICardProps): ReactElement => {
    const { actions, className, content, media, onClick } = props;
    return (
        <MUICard onClick={onClick} className={className?.cardWrapper}>
            {!!media ? <CardMedia className={className?.mediaWrapper}>{media}</CardMedia> : null}
            {!!content ? (
                <CardContent className={className?.contentWrapper}>{content}</CardContent>
            ) : null}
            {!!actions ? (
                <CardActions className={className?.actionsWrapper}>{actions}</CardActions>
            ) : null}
        </MUICard>
    );
};
