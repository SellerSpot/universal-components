import React, { ReactElement } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { IExpandableCardProps } from './ExpandableCard.types';

export const ExpandableCard = (props: IExpandableCardProps): ReactElement => {
    const { content, expanded, className } = props;
    return (
        <Accordion className={className?.card} expanded={expanded}>
            <AccordionSummary className={className?.summaryWrapper}>
                {content.summaryContent}
            </AccordionSummary>
            <AccordionDetails className={className?.detailsWrapper}>
                {content.detailsContent}
            </AccordionDetails>
        </Accordion>
    );
};

export { IExpandableCardProps } from './ExpandableCard.types';
