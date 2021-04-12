import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { IExpandableCardProps } from './ExpandableCard.types';
export { IExpandableCardProps } from './ExpandableCard.types';

export default function ExpandableCard(props: IExpandableCardProps): ReactElement {
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
}
