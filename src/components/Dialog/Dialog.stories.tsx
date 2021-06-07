import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
    Dialog as DialogComponent,
    DialogActions,
    DialogContent,
    DialogTitle,
    DialogContentText,
} from './Dialog';

const Template: Story = () => {
    const [showDialog, setShowDialog] = useState(false);
    return (
        <div>
            <Button variant={'contained'} color={'primary'} onClick={() => setShowDialog(true)}>
                Show Dialog
            </Button>
            <DialogComponent open={showDialog}>
                <DialogTitle>{'This is sample title'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant={'contained'}
                        color={'secondary'}
                        onClick={() => setShowDialog(false)}
                    >
                        Close Dialog
                    </Button>
                </DialogActions>
            </DialogComponent>
        </div>
    );
};

export const Dialog = Template.bind({});

export default {
    title: 'Universal Components/Atoms/Dialog',
    component: DialogComponent,
} as Meta;
