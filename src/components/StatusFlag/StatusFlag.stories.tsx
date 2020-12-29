import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { StatusFlag, IStatusFlagProps } from './StatusFlag';

export default {
    title: 'Components',
    component: StatusFlag,
} as Meta;

const Template: Story<IStatusFlagProps> = (args: IStatusFlagProps) => <StatusFlag {...args} />;

export const StatusFlags = Template.bind({});
StatusFlags.args = {
    label: 'boom',
} as IStatusFlagProps;
