import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Card as CardComponent, ICardProps } from './Card';

const Template: Story<ICardProps> = (args: ICardProps) => <CardComponent {...args} />;

export const Card = Template.bind({});
Card.args = {
    content: <div>This is sample Card Content</div>,
} as ICardProps;

export default {
    title: 'Components/Atoms',
    component: CardComponent,
} as Meta;
