import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Button } from '..';
import { ISliderModalProps, SliderModal as SliderModalComponent } from './SliderModal';

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
            <Button
                onClick={() => setShowModal(true)}
                label={'Show Modal'}
                theme="primary"
                variant="contained"
            />
            {args.type === 'fixed' && (
                <SliderModalComponent
                    {...args}
                    show={showModal}
                    headerProps={{ showActionButton: 'closeButton' }}
                >
                    <Content message={'Header'} />
                    <div>
                        <Button
                            onClick={() => setShowModal(false)}
                            label={'Close Modal'}
                            variant="contained"
                            theme="primary"
                        />
                        <Content message={'Body'} />
                    </div>
                </SliderModalComponent>
            )}
            {args.type === 'absolute' && (
                <div
                    style={{
                        width: '50%',
                        height: '50%',
                        background: '#f3f3f3',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <SliderModalComponent
                        {...args}
                        show={showModal}
                        headerProps={{ showActionButton: 'closeButton' }}
                    >
                        <Content message={'Header'} />
                        <div>
                            <button onClick={() => setShowModal(false)}>Close Modal</button>
                            <Content message={'Body'} />
                        </div>
                    </SliderModalComponent>
                </div>
            )}
        </>
    );
};

export const SliderModal = Template.bind({});
SliderModal.args = {
    width: '40%',
    type: 'fixed',
    zIndex: 10,
} as ISliderModalProps;

export default {
    title: 'Universal Components/Atoms/Slider Modal',
    parameters: {
        layout: 'fullscreen',
    },
    component: SliderModalComponent,
} as Meta;
