import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SliderModal } from './SliderModal';
import { ISliderModalProps } from './sliderModal.types';

export default {
    title: 'Components',
    component: SliderModal,
} as Meta;

const Template: Story<ISliderModalProps> = (args: ISliderModalProps) => <SliderModal {...args} />;

export const SliderModals = Template.bind({});
SliderModals.args = {
    active: true,
    onClickEsc: (event) => {
        console.log('Esc Clicked');
    },
    onClickBackdrop: (event) => {
        console.log('Backdrop Clicked');
    },
    children: (
        <div
            style={{
                background: 'white',
                width: '100%',
                height: '100% ',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            content goes here!
        </div>
    ),
    sliderSize: '50%',
} as ISliderModalProps;
