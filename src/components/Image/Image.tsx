import React, { CSSProperties, ReactElement, useState } from 'react';
import { Skeleton } from '..';

export interface IImageProps {
    src: string;
    /**
     * @default ```'100%'```
     */
    width?: React.CSSProperties['width'];
    /**
     * @default ```'100%'```
     */
    height?: React.CSSProperties['height'];
    /**
     * @default ```'cover'```
     */
    objectFit?: React.CSSProperties['objectFit'];
}

export const Image = (props: IImageProps): ReactElement => {
    // props
    const { src, width = '100%', height = '100%', objectFit = 'cover' } = props;
    // state
    const [isLoading, setIsLoading] = useState(true);

    // handlers
    const onLoadHandler = () => setIsLoading(false);

    const style: CSSProperties = {
        width,
        height,
        display: isLoading ? 'none' : 'block',
        objectFit,
    };

    return (
        <>
            {isLoading && (
                <Skeleton width={width} height={height} variant="rect" animation="pulse" />
            )}
            <img style={style} src={src} onLoad={onLoadHandler} />
        </>
    );
};
