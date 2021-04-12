import { Meta, Story } from '@storybook/react/types-6-0';
import { merge } from 'lodash';
import React, { useState } from 'react';
import { Dialog as DialogComponent, IDialogProps } from './Dialog';

const Template: Story<IDialogProps> = (args: IDialogProps) => {
    const [dialogShow, setDialogShow] = useState(false);
    const argsCombined = merge(args, { show: dialogShow, onClose: () => setDialogShow(false) });
    return (
        <div>
            <h6
                onClick={() => setDialogShow(true)}
                style={{
                    userSelect: 'none',
                    cursor: 'pointer',
                }}
            >
                Click here to open or close the dialog
            </h6>
            <DialogComponent {...argsCombined} />
        </div>
    );
};

export const Dialog = Template.bind({});
Dialog.args = {
    title: <h5>Dialog Title</h5>,
    content: <h6>Sample Dialog Content</h6>,
    fullWidth: true,
} as IDialogProps;

export default {
    title: 'Components/Atoms',
    component: DialogComponent,
} as Meta;
