import { Slider as MUISlider } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { ISliderProps } from './Slider.types';
export { ISliderProps } from './Slider.types';

export const Slider = (props: ISliderProps): ReactElement => {
    const { defaultValue, getAriaValueText, max, min, valueLabelDisplay, onChange, value, step } =
        props;
    return (
        <MUISlider
            defaultValue={defaultValue}
            getAriaValueText={getAriaValueText}
            min={min}
            max={max}
            step={step}
            value={value}
            valueLabelDisplay={valueLabelDisplay}
            onChange={onChange}
        />
    );
};
