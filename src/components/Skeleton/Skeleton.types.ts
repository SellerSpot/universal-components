import { ReactElement, ReactNode } from 'react';

export interface ISkeletonProps {
    animation?: 'pulse' | 'wave' | false;
    /**
     * Optional children to infer width and height from.
     */
    children?: ReactElement;
    height?: number | string;
    width?: number | string;
    variant?: 'text' | 'rect' | 'circle';
}
