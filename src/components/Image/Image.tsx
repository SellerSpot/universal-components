import React, { CSSProperties, ReactElement, useState } from 'react';
import { Skeleton } from '..';

export interface IImageProps {
    src: string;
    width: React.CSSProperties['width'];
    height: React.CSSProperties['height'];
}

export const Image = (props: IImageProps): ReactElement => {
    // props
    const { src, width, height } = props;
    // state
    const [isLoading, setIsLoading] = useState(true);

    // handlers
    const onLoadHandler = () => setIsLoading(false);

    const style: CSSProperties = {
        width,
        height,
        display: isLoading ? 'none' : 'block',
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
