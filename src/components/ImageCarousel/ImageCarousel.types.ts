import React, { ReactNode } from 'react';

interface ICarouselImage {
    imageUrl: string;
    customImageComponent?: ReactNode;
}

export interface IImageCarouselProps {
    images: ICarouselImage[];
    height: React.CSSProperties['height'];
    /**
     * @default true
     */
    showSpy?: boolean;
}
