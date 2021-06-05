import React, { ReactElement } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import cn from 'classnames';
import styles from './ExpandableCard.module.scss';
import { IExpandableCardProps } from './ExpandableCard.types';

export { IExpandableCardProps } from './ExpandableCard.types';

export const ExpandableCard = (props: IExpandableCardProps): ReactElement => {
    const { content, expanded, className } = props;
    const cardClassName = cn(styles.cardWrapper, className?.card);
    return (
        <Accordion elevation={0} className={cardClassName} expanded={expanded}>
            <AccordionSummary className={className?.summaryWrapper}>
                {content.summaryContent}
            </AccordionSummary>
            <AccordionDetails className={className?.detailsWrapper}>
                {content.detailsContent}
            </AccordionDetails>
        </Accordion>
    );
};
