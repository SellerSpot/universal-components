import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Card as CardComponent, ICardProps } from './Card';

const Template: Story<ICardProps> = (args: ICardProps) => {
    const wrapperStyle: CSSProperties = {
        height: '100vh',
        width: '100vw',
        backgroundColor: 'lightgray',
    };
    const cardWrapperStyle: CSSProperties = {
        maxWidth: '300px',
    };
    return (
        <div style={wrapperStyle}>
            <div style={cardWrapperStyle}>
                <CardComponent {...args} />
            </div>
        </div>
    );
};

export const Card = Template.bind({});
Card.args = {
    image: 'https://picsum.photos/id/237/200/300',
    content: <div>This is sample Card Content</div>,
} as ICardProps;

export default {
    title: 'Universal Components/Atoms/Card',
    component: CardComponent,
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;
