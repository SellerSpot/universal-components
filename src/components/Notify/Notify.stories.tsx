import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Notify, INotifyProps } from './Notify';

export default {
    title: 'Components',
    component: Notify,
} as Meta;

const Template: Story<INotifyProps> = (args: INotifyProps) => <Notify {...args} />;

export const Notifier = Template.bind({});
Notifier.args = {
    content: <div>hola!!</div>,
    timeout: 2000,
} as INotifyProps;
