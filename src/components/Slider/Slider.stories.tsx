import { CSSProperties } from '@material-ui/styles';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Slider as SliderComponent, ISliderProps } from './Slider';

const Template: Story<ISliderProps> = (args: ISliderProps) => {
    const wrapperStyle: CSSProperties = {
        marginTop: '30px',
    };
    return (
        <div style={wrapperStyle}>
            <SliderComponent {...args} />
        </div>
    );
};

export const Slider = Template.bind({});
Slider.args = {
    max: 100,
    min: 0,
    defaultValue: 30,
    getAriaValueText: (value) => `${value}`,
    valueLabelDisplay: 'auto',
} as ISliderProps;

export default {
    title: 'Components/Atoms',
    component: SliderComponent,
} as Meta;
