import React, { CSSProperties, ReactElement } from 'react';
import { Skeleton as MUISkeleton } from '@material-ui/lab';
import { ISkeletonProps } from './Skeleton.types';

export { ISkeletonProps } from './Skeleton.types';

export const Skeleton = (props: ISkeletonProps): ReactElement => {
    const { animation, children, height, variant, width, className } = props;
    const spanStyle: CSSProperties = {
        width,
        height,
    };

    return (
        <div className={className} style={spanStyle}>
            <MUISkeleton
                style={{ margin: 0, padding: 0, height: '100%', width: '100%' }}
                variant={variant}
                animation={animation}
            >
                {children}
            </MUISkeleton>
        </div>
    );
};
