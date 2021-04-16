import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { SliderModal as SliderModalComponent, ISliderModalProps } from './SliderModal';

const Template: Story<ISliderModalProps> = (args: ISliderModalProps) => (
    <div
        style={{
            width: '100vw',
            height: '100vh',
        }}
    >
        <SliderModalComponent {...args} />
    </div>
);

export const SliderModal = Template.bind({});
SliderModal.args = {
    show: false,
} as ISliderModalProps;

export default {
    title: 'Components/Atoms/FullScreen',
    parameters: {
        layout: 'fullscreen',
    },
    component: SliderModalComponent,
} as Meta;
