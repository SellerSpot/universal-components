import React, { CSSProperties, ReactElement, useState } from 'react';
import { Skeleton } from '..';

export interface IImageProps {
    src: string;
    className?: string;
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
    const { src, className, objectFit = 'cover' } = props;
    let { width, height } = props;
    // state
    const [isLoading, setIsLoading] = useState(true);

    // handlers
    const onLoadHandler = () => setIsLoading(false);

    const hasNoDimensions = [width, height, className].every((item) => item === undefined);

    if (hasNoDimensions) {
        width = '100%';
        height = '100%';
    }

    const style: CSSProperties = {
        width,
        height,
        display: isLoading ? 'none' : 'block',
        objectFit,
        transition: 'all 0.2s ease',
    };

    return (
        <>
            {isLoading && (
                <Skeleton
                    className={className}
                    variant="rect"
                    animation="pulse"
                    width={width}
                    height={height}
                />
            )}
            <img className={className} style={style} src={src} onLoad={onLoadHandler} />
        </>
    );
};
