import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Card as CardComponent, ICardProps } from './Card';

const Template: Story<ICardProps> = (args: ICardProps) => {
    const wrapperStyle: CSSProperties = {
        maxWidth: '300px',
    };
    return (
        <div style={wrapperStyle}>
            <CardComponent {...args} />;
        </div>
    );
};

export const Card = Template.bind({});
Card.args = {
    image: 'https://picsum.photos/id/237/200/300',
    content: <div>This is sample Card Content</div>,
} as ICardProps;

export default {
    title: 'Design System/Atoms/Card',
    component: CardComponent,
} as Meta;
