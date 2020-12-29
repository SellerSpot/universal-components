import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HorizontalRule, IHorizontalRuleProps } from './HorizontalRule';

export default {
    title: 'Components',
    component: HorizontalRule,
} as Meta;

const Template: Story<IHorizontalRuleProps> = (args: IHorizontalRuleProps) => (
    <HorizontalRule {...args} />
);

export const HorizontalRules = Template.bind({});
HorizontalRules.args = {} as IHorizontalRuleProps;
