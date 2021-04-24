import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from '@material-ui/core';
import { Notify as NotifyComponent, INotifyState, showNotify, configureNotify } from './Notify';

const Template: Story<INotifyState> = () => {
    configureNotify({
        autoHideDuration: 5000,
        placement: 'bottomLeft',
        theme: 'success',
    });
    return (
        <div
            style={{
                display: 'flex',
                gap: '20px',
            }}
        >
            <Button
                color={'primary'}
                variant={'contained'}
                onClick={() =>
                    showNotify('This is Sample Notification', {
                        theme: 'error',
                    })
                }
            >
                Show Notify
            </Button>
            <NotifyComponent />
        </div>
    );
};

export const Notify = Template.bind({});

export default {
    title: 'Components/Atoms',
    component: NotifyComponent,
} as Meta;
