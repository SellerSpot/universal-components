import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Trademark as TrademarkComponent } from './Trademark';

const Template: Story = () => <TrademarkComponent />;

export const TradeMark = Template.bind({});
TradeMark.args = {};

export default {
    title: 'Universal Components/Atoms/Trade Mark',
    component: TrademarkComponent,
} as Meta;
