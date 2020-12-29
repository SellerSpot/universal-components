import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SliderModal, ISliderModalProps } from './SliderModal';

export default {
    title: 'Components',
    component: SliderModal,
} as Meta;

const Template: Story<ISliderModalProps> = (args: ISliderModalProps) => <SliderModal {...args} />;

export const SliderModals = Template.bind({});
SliderModals.args = {
    active: true,
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
