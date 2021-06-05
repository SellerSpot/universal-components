import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ExpandableCard as ExpandableCardComponent, IExpandableCardProps } from './ExpandableCard';

const Template: Story<IExpandableCardProps> = (args: IExpandableCardProps) => {
    const wrapperStyle: CSSProperties = {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'lightgray',
    };
    return (
        <div style={wrapperStyle}>
            <ExpandableCardComponent {...args} />
        </div>
    );
};

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
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;
