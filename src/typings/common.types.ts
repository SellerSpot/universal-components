import { FormEvent, ReactNode } from 'react';

export type TPrimitiveType = string | number;

//const inferRouteTypes = <T extends { [key: string]: string }>(arg: T): T => arg; // Infering types from Route object with autocomplete support.

/**
 * Common typings for events for components
 */
export interface IComponentEvents {
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
    oneMouseOver?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

/**
 * used for any add event listener handlers for preparing callback handler separately (anonymously)
 */
export type TEventListenerHandler = (this: Element, event: Event & { target: Node }) => unknown;

/**
 * used for form submition event handler
 */
export type TFormSubmitionHandler = (event?: FormEvent<HTMLFormElement>) => void;

/**
 * used for any element based onChagne event handlers
 */
export type TOnChangeMiddleware = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => void;

/**
 * Used for Button onClick handlers
 */
export type TOnNodeClickHandler<T = Element | HTMLDivElement> = (
    event: React.MouseEvent<T, MouseEvent> & { target?: Node },
) => void;

/**
 * Typings for the options for any Select component
 */
export interface ISelectOption {
    value: string;
    label: ReactNode;
}
