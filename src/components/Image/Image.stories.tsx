import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { IImageProps, Image as ImageComponent } from './Image';
import styles from './sample.module.scss';

const Template: Story<IImageProps> = (args: IImageProps) => {
    return <ImageComponent {...args} />;
};

export const Image = Template.bind({});

Image.args = {
    src: 'https://wallpapercave.com/wp/wp4103107.jpg',
    objectFit: 'cover',
    className: styles.imageWrapper,
} as IImageProps;

export default {
    title: 'Design System/Atoms/Image',
    component: ImageComponent,
} as Meta;
