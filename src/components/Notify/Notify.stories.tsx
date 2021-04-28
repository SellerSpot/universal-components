import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Notify as NotifyComponent, INotifyState, showNotify, configureNotify } from './Notify';
import { Button } from '..';

const Template: Story<INotifyState> = () => {
    configureNotify({
        autoHideDuration: 5000,
        placement: 'bottomLeft',

        closeOnClickAway: false,
    });

    const customNotifyAction: INotifyState['customNotifyAction'] = ({ hideNotify }) => {
        return (
            <Button
                label={'Custom button'}
                inheritColorsFromParent
                variant="text"
                onClick={() => hideNotify()}
            />
        );
    };
    return (
        <div
            style={{
                display: 'flex',
                gap: '20px',
            }}
        >
            <Button
                theme={'primary'}
                variant={'contained'}
                onClick={() =>
                    showNotify('This is Sample Notification', {
                        showNotifyAction: true,
                        customNotifyAction,
                        theme: 'success',
                    })
                }
                label={'Show Notify'}
            />
            <NotifyComponent />
        </div>
    );
};

export const Notify = Template.bind({});

export default {
    title: 'Components/Atoms',
    component: NotifyComponent,
} as Meta;
