import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Trademark as TrademarkComponent } from './Trademark';

const Template: Story = () => <TrademarkComponent />;

export const TradeMark = Template.bind({});
TradeMark.args = {};

export default {
    title: 'Components/Atoms',
    component: TrademarkComponent,
} as Meta;
