import React, { CSSProperties, ReactElement, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import cn from 'classnames';

import { IconButton } from '../IconButton/IconButton';
import { Image } from '../Image/Image';
import { IImageCarouselProps } from './ImageCarousel.types';
import styles from './ImageCarousel.module.scss';
import { ICONS } from '../../utilities/icons';

export { IImageCarouselProps } from './ImageCarousel.types';

const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

export const ImageCarousel = (props: IImageCarouselProps): ReactElement => {
    // props
    const { images, height } = props;

    // helpers
    const carouselRef = useRef<AliceCarousel>();

    // handlers
    const onClickHandler = (direction: 'forward' | 'backward') => () => {
        if (direction === 'forward') {
            carouselRef?.current?.slideNext(null);
        } else {
            carouselRef?.current?.slidePrev(null);
        }
    };

    // draw
    const divStyle: CSSProperties = {
        height,
    };
    return (
        <div className={styles.imageCarouselWrapper} style={divStyle}>
            <AliceCarousel
                mouseTracking
                controlsStrategy="responsive"
                keyboardNavigation
                disableButtonsControls={true}
                touchTracking
                responsive={responsive}
                infinite={true}
                ref={carouselRef}
                items={images.map((image, imageIndex) => {
                    const { imageUrl } = image;
                    return (
                        <div
                            key={imageIndex}
                            style={{ height, padding: '0 5px' }}
                            onDragStart={handleDragStart}
                        >
                            <Image src={imageUrl} />
                        </div>
                    );
                })}
            />
            <IconButton
                size="medium"
                className={cn(styles.actionButton, styles.actionButtonLeft)}
                icon={<ICONS.MdKeyboardArrowLeft className={styles.actionButtonIcon} />}
                onClick={onClickHandler('backward')}
            />
            <IconButton
                size="medium"
                className={cn(styles.actionButton, styles.actionButtonRight)}
                icon={<ICONS.MdKeyboardArrowRight className={styles.actionButtonIcon} />}
                onClick={onClickHandler('forward')}
            />
        </div>
    );
};
