import { State, useState } from '@hookstate/core';
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { CSSProperties } from 'react';
import { Button } from '..';
import {
    ISliderModalProps,
    SliderModal as SliderModalComponent,
    SliderModalBody,
    SliderModalFooter,
    SliderModalHeader,
    SliderModalLayoutWrapper,
} from './SliderModal';

const SliderModalBodyContent = (props: { showInnerSlider: State<boolean> }) => {
    // state
    const { showInnerSlider } = props;

    // wrapperStyle
    const wrapperStyle: CSSProperties = {
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'center',
    };

    // draw
    return (
        <div style={wrapperStyle}>
            <Button
                label="Open Inner Modal"
                variant="outlined"
                onClick={() => showInnerSlider.set(true)}
            />
        </div>
    );
};

const InnerSliderModal = (props: { showInnerSlider: State<boolean> }) => {
    // props
    const { showInnerSlider } = props;

    // draw
    return (
        <SliderModalComponent
            showBackdrop={false}
            type="absolute"
            showModal={showInnerSlider.get()}
            width={'100%'}
        >
            <SliderModalLayoutWrapper gridRowStructure={['auto', '1fr']}>
                <SliderModalHeader
                    title="Boom! Slider"
                    modalGoBackCallback={() => showInnerSlider.set(false)}
                />
                <SliderModalBody>
                    <h5>This is second modal</h5>
                </SliderModalBody>
            </SliderModalLayoutWrapper>
        </SliderModalComponent>
    );
};

const Template: Story<ISliderModalProps> = () => {
    // state
    const showSlider = useState(false);
    const showInnerSlider = useState(false);

    // styles
    const wrapperStyle: CSSProperties = {
        width: '100vw',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
    };

    return (
        <div style={wrapperStyle}>
            <Button label={'Open Slider'} variant="outlined" onClick={() => showSlider.set(true)} />

            {/* Main SliderModal */}
            <SliderModalComponent
                type="fixed"
                showModal={showSlider.get()}
                width="50%"
                onBackdropClick={() => {
                    if (showInnerSlider.get()) {
                        showInnerSlider.set(false);
                    } else {
                        showSlider.set(false);
                    }
                }}
            >
                <SliderModalLayoutWrapper
                    subSliderModals={[
                        <InnerSliderModal key={'innerSlider1'} showInnerSlider={showInnerSlider} />,
                    ]}
                >
                    <SliderModalHeader
                        title="Add Brands"
                        modalCloseCallback={() => showSlider.set(false)}
                    />
                    <SliderModalBody>
                        <SliderModalBodyContent showInnerSlider={showInnerSlider} />
                    </SliderModalBody>
                    <SliderModalFooter>
                        <h5>This is slider modal footer</h5>
                    </SliderModalFooter>
                </SliderModalLayoutWrapper>
            </SliderModalComponent>
        </div>
    );
};

export const SliderModal = Template.bind({});

export default {
    title: 'Design System/Atoms/Slider Modal',
    component: SliderModalComponent,
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;
