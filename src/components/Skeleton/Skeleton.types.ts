import { ReactElement } from 'react';

export interface ISkeletonProps {
    animation?: 'pulse' | 'wave' | false;
    className?: string;
    /**
     * Optional children to infer width and height from.
     */
    children?: ReactElement;
    height?: number | string;
    width?: number | string;
    variant?: 'text' | 'rect' | 'circle';
}
