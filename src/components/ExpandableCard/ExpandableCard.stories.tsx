import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ExpandableCard as ExpandableCardComponent, IExpandableCardProps } from './ExpandableCard';

const Template: Story<IExpandableCardProps> = (args: IExpandableCardProps) => (
    <ExpandableCardComponent {...args} />
);

export const ExpandableCard = Template.bind({});
ExpandableCard.args = {
    expanded: true,
    content: {
        summaryContent: <div>Summary Content</div>,
        detailsContent: <div>Details Content</div>,
    },
} as IExpandableCardProps;

export default {
    title: 'Design System/Atoms/Expandable Card',
    component: ExpandableCardComponent,
} as Meta;
