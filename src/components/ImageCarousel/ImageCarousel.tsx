import React, { ReactElement } from 'react';
import AliceCarousel from 'react-alice-carousel';
import './AliceCarousel.scss';
import { IImageCarouselProps } from './ImageCarousel.types';

export { IImageCarouselProps } from './ImageCarousel.types';

const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

export const ImageCarousel = (props: IImageCarouselProps): ReactElement => {
    const { images } = props;

    return (
        <AliceCarousel
            mouseTracking
            controlsStrategy="responsive"
            keyboardNavigation
            touchTracking
            responsive={responsive}
            items={images.map((image, imageIndex) => {
                const { imageUrl } = image;
                return (
                    <img
                        style={{
                            padding: '0 2px',
                        }}
                        width={'100%'}
                        key={imageIndex}
                        src={imageUrl}
                        onDragStart={handleDragStart}
                    />
                );
            })}
        />
    );
};
