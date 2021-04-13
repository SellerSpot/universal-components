import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Notify as NotifyComponent, INotifyState, notifyStore } from './Notify';

const Template: Story<INotifyState> = () => {
    const showNotify = notifyStore((state) => state.showNotify);
    return (
        <div>
            <h6
                onClick={() =>
                    showNotify({
                        message: 'Sample Notification Message',
                        placement: 'bottomLeft',
                        state: 'default',
                        autoHideDuration: 3000,
                    })
                }
                style={{
                    userSelect: 'none',
                    cursor: 'pointer',
                }}
            >
                Click Here to show Notify Component
            </h6>
            <NotifyComponent />
        </div>
    );
};

export const Notify = Template.bind({});

export default {
    title: 'Components/Atoms',
    component: NotifyComponent,
} as Meta;
