import { Button } from '../Button/Button';
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { SliderModal as SliderModalComponent, ISliderModalProps } from './SliderModal';
import { defaultColors, defaultFontSizes } from '../../theme/storybookTheme';

const Template: Story<ISliderModalProps> = () => {
    const [showSlider, setshowSlider] = useState(false);
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
            }}
        >
            <Button
                colors={defaultColors}
                fontSizes={defaultFontSizes}
                state={'primary'}
                variant={'contained'}
                label={'Open Slider'}
                onClick={() => setshowSlider(true)}
            />
            <SliderModalComponent
                show={showSlider}
                showCloseButton={true}
                sliderTitle={'Add Product'}
                sliderFooter={
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                    >
                        <Button
                            label={'Cancel'}
                            colors={defaultColors}
                            fontSizes={defaultFontSizes}
                            variant={'outlined'}
                            state={'danger'}
                        />
                        <Button
                            label={'Add Product'}
                            colors={defaultColors}
                            fontSizes={defaultFontSizes}
                            variant={'contained'}
                            state={'primary'}
                        />
                    </div>
                }
                onClose={() => setshowSlider(false)}
            >
                <ul
                    style={{
                        listStylePosition: 'inside',
                        padding: '0 15px',
                    }}
                >
                    {Array(1000)
                        .fill(0)
                        .map((_, index) => {
                            return <li key={index}>Sample Data</li>;
                        })}
                </ul>
            </SliderModalComponent>
        </div>
    );
};

export const SliderModal = Template.bind({});

export default {
    title: 'Components/Atoms/FullScreen',
    parameters: {
        layout: 'fullscreen',
    },
    component: SliderModalComponent,
} as Meta;
