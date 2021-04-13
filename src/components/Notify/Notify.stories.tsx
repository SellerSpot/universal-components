import { Button } from '@material-ui/core';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Notify as NotifyComponent, INotifyState, notifyStore } from './Notify';

const Template: Story<INotifyState> = () => {
    const showNotify = notifyStore((state) => state.showNotify);
    const notifyVisible = notifyStore((state) => state.show);
    const hideNotify = notifyStore((state) => state.hideNotify);
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
                    showNotify({
                        message: 'Sample Notification Message',
                        placement: 'bottomLeft',
                        state: 'default',
                        autoHideDuration: 3000,
                    })
                }
            >
                Show Notify
            </Button>
            {notifyVisible ? (
                <Button color={'secondary'} variant={'outlined'} onClick={() => hideNotify()}>
                    Hide Notify
                </Button>
            ) : null}
            <NotifyComponent />
        </div>
    );
};

export const Notify = Template.bind({});

export default {
    title: 'Components/Atoms',
    component: NotifyComponent,
} as Meta;
