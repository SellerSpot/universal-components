import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Alert as AlertComponent, IAlertProps } from './Alert';

const Template: Story<IAlertProps> = (args: IAlertProps) => (
    <AlertComponent {...args}>Alert component has been successfully completed.</AlertComponent>
);

export const Alert = Template.bind({});

Alert.args = {
    type: 'success',
    title: 'Operation Completed',
} as IAlertProps;

export default {
    title: 'Design System/Atoms/Alert',
    component: AlertComponent,
} as Meta;
