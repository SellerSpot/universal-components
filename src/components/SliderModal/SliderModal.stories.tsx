import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import {
    ISliderModalProps,
    SliderModal as SliderModalComponent,
    SliderModalBody,
    SliderModalHeader,
} from './SliderModal';

const Content = (props: { message: string }) => {
    const { message } = props;
    const style: React.CSSProperties = {
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    };
    return (
        <div style={style}>
            <h3>{message}</h3>
        </div>
    );
};

const Template: Story<ISliderModalProps> = (args) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => setShowModal(true)}>Show Modal</button>
            <SliderModalComponent {...args} show={showModal}>
                <SliderModalHeader showActionButton={'closeButton'}>
                    <Content message={'Header'} />
                </SliderModalHeader>
                <SliderModalBody>
                    <button onClick={() => setShowModal(false)}>Close Modal</button>
                    <Content message={'Body'} />
                </SliderModalBody>
            </SliderModalComponent>
        </>
    );
};

export const SliderModal = Template.bind({});
SliderModal.args = {
    width: '40%',
} as ISliderModalProps;

export default {
    title: 'Components',
    parameters: {
        layout: 'fullscreen',
    },
    component: SliderModalComponent,
} as Meta;
