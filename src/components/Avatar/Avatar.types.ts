import { IComponentEvents } from 'typings/common.types';
import { ReactElement } from 'react';

export interface IAvatarProps {
    content: ReactElement | string;
    /**
     * Shape variant for the avatar
     * @default rounded
     */
    variant?: 'circular' | 'square' | 'rounded';
    /**
     * Theme for the component
     * @default unselected
     */
    theme?: 'selected' | 'unselected' | 'selectedNoBg';
    /**
     * Toggles the disabled state for the component
     * @default false
     */
    disabled?: boolean;
    /**
     * Basic events to track interaction on the component
     */
    events?: IComponentEvents;
    /**
     * Sizes for the component
     * @default default
     */
    size?: 'default' | 'small';
}
