import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Alert as AlertComponent, IAlertProps } from './Alert';

export default {
    title: 'Components/Atoms',
    component: AlertComponent,
} as Meta;

const Template: Story<IAlertProps> = (args: IAlertProps) => (
    <AlertComponent {...args}>Alert component has been successfully completed.</AlertComponent>
);

export const Alert = Template.bind({});

Alert.args = {
    type: 'success',
    title: 'Operation Completed',
} as IAlertProps;
