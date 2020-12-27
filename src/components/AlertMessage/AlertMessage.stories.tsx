import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AlertMessage, IAlertMessageProps } from './AlertMessage';

export default {
    title: 'Components',
    component: AlertMessage,
} as Meta;

const Template: Story<IAlertMessageProps> = (args: IAlertMessageProps) => (
    <AlertMessage {...args} />
);

export const AlertMessages = Template.bind({});
AlertMessages.args = {} as IAlertMessageProps;
