import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Image as ImageComponent, IImageProps } from './Image';

const Template: Story<IImageProps> = (args: IImageProps) => <ImageComponent {...args} />;

export const Image = Template.bind({});

Image.args = {
    src: 'https://via.placeholder.com/300/000000/FFFFFF/?text=SellerSpot',
    width: 300,
    height: 300,
} as IImageProps;

export default {
    title: 'Design System/Atoms/Image',
    component: ImageComponent,
} as Meta;
