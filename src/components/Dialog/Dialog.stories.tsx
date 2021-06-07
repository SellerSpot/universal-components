import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
    Dialog as DialogComponent,
    DialogBody,
    DialogFooter,
    DialogHeader,
    DialogLayoutWrapper,
} from './Dialog';
import { useState } from '@hookstate/core';
import { Button } from '../Button/Button';

const Template: Story = () => {
    // state
    const showDialog = useState(false);

    // styles
    const wrapperStyles: CSSProperties = {
        width: '100vw',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
    };

    return (
        <div style={wrapperStyles}>
            <Button variant="outlined" onClick={() => showDialog.set(true)} label={'Show Dialog'} />
            <DialogComponent
                showDialog={showDialog.get()}
                onBackdropClick={() => showDialog.set(false)}
            >
                <DialogLayoutWrapper>
                    <DialogHeader
                        title="KaBoom Title"
                        dialogCloseCallback={() => showDialog.set(false)}
                    />
                    <DialogBody>
                        <h5>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, iure
                            suscipit! Quod atque voluptate omnis, quaerat officiis culpa
                            reprehenderit aspernatur quos quam nostrum! Earum harum dolorum modi
                            aliquid nemo repellat obcaecati dolore, nobis libero minus, aperiam,
                            nostrum eos distinctio! Nesciunt ipsum perspiciatis unde iusto molestias
                            nihil. Iure eius quae error. This action will cause starship to land in
                            Museri
                        </h5>
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            label={'ABORT'}
                            variant={'outlined'}
                            theme="danger"
                            onClick={() => showDialog.set(false)}
                        />
                        <Button label={'PROCEED TO LAND'} variant={'contained'} theme="primary" />
                    </DialogFooter>
                </DialogLayoutWrapper>
            </DialogComponent>
        </div>
    );
};

export const Dialog = Template.bind({});

export default {
    title: 'Design System/Atoms/Dialog',
    component: DialogComponent,
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;
