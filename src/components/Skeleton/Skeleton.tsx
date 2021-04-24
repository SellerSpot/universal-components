import React, { ReactElement } from 'react';
import { Skeleton as MUISkeleton } from '@material-ui/lab';
import { ISkeletonProps } from './Skeleton.types';

export const Skeleton = (props: ISkeletonProps): ReactElement => {
    const { animation, children, height, variant, width } = props;
    return (
        <MUISkeleton
            style={{ margin: 0, padding: 0 }}
            variant={variant}
            height={height}
            width={width}
            animation={animation}
        >
            {children}
        </MUISkeleton>
    );
};

export { ISkeletonProps } from './Skeleton.types';
