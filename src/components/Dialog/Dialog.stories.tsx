import Button from '@material-ui/core/Button';
import { Meta, Story } from '@storybook/react/types-6-0';
import { merge } from 'lodash';
import React, { useState } from 'react';
import { Dialog as DialogComponent, dialogStore, IDialogProps } from './Dialog';

const Template: Story<IDialogProps> = () => {
    const showDialog = dialogStore((state) => state.showDialog);
    const hideDialog = dialogStore((state) => state.hideDialog);
    return (
        <div>
            <Button
                variant={'contained'}
                color={'primary'}
                onClick={() =>
                    showDialog({
                        title: <h5>Dialog Title</h5>,
                        content: <h6>Sample Dialog Content</h6>,
                        actions: (
                            <Button
                                variant={'contained'}
                                color={'secondary'}
                                onClick={() => hideDialog()}
                            >
                                Close Dialog
                            </Button>
                        ),
                        fullWidth: true,
                    })
                }
            >
                Show Dialog
            </Button>
            <DialogComponent />
        </div>
    );
};

export const Dialog = Template.bind({});

export default {
    title: 'Components/Atoms',
    component: DialogComponent,
} as Meta;
