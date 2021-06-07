import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { AppPreloader as AppPreloaderComponent } from './AppPreloader';

const Template: Story = () => (
    <div
        style={{
            padding: 0,
            margin: 0,
            width: '100%',
            height: '100vh',
        }}
    >
        <AppPreloaderComponent />
    </div>
);

export const AppPreloader = Template.bind({});
AppPreloader.args = {};

export default {
    title: 'Universal Components/Atoms/App Preloader',
    component: AppPreloaderComponent,
} as Meta;
