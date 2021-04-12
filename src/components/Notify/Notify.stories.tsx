import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'components/Button/Button';
import { merge } from 'lodash';
import React, { useState } from 'react';
import { Notify as NotifyComponent, INotifyProps } from './Notify';

const Template: Story<INotifyProps> = (args: INotifyProps) => {
    const [notifyShow, setNotifyShow] = useState(false);
    const argsCombined = merge(args, { show: notifyShow, onClose: () => setNotifyShow(false) });
    return (
        <div>
            <h6
                onClick={() => setNotifyShow(true)}
                style={{
                    userSelect: 'none',
                    cursor: 'pointer',
                }}
            >
                Click Here to show Notify Component
            </h6>
            <NotifyComponent {...argsCombined} />
        </div>
    );
};

export const Notify = Template.bind({});
Notify.args = {
    message: 'Sample Notify Message',
    placement: 'bottomLeft',
} as INotifyProps;

export default {
    title: 'Components/Atoms',
    component: NotifyComponent,
} as Meta;
