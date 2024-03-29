import { ReactElement } from 'react';

export interface IExpandableCardProps {
    expanded: boolean;
    elevation?: number;
    className?: {
        card?: string;
        summaryWrapper?: string;
        detailsWrapper?: string;
    };
    content: {
        summaryContent: ReactElement;
        detailsContent: ReactElement;
    };
}
