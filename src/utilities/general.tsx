import React from 'react';
import { components, GroupTypeBase, OptionProps } from 'react-select';
import { ISelectOption } from '../typings/common.types';

/**
 *
 * @param delay in seconds
 * @default
 * 4000
 */
export const introduceDelay = async (delay = 4000): Promise<boolean> =>
    new Promise((resolve) =>
        setTimeout(() => {
            resolve(true);
        }, delay),
    );

// formats numbers into indian currency
export const numberFormatINRCurrency = (value: number): string =>
    new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 2,
    }).format(value);

/**
 * Generate a string anywhere between zero and 12 characters long
 * You can expect a duplicate after around 70M strings generated
 * @returns string
 */
export const generateRandomString = (): string => Math.random().toString(36).slice(2);

// custom components for react-select component
/**
 * Custom Option Component
 */
export const ReactSelectOptionComponent: React.ComponentType<
    OptionProps<ISelectOption, boolean, GroupTypeBase<ISelectOption>>
> = (props) => {
    const { label, data } = props;
    const currentOptionData = data as ISelectOption;
    const lableToShow = currentOptionData.labelToShow ?? label;
    return <components.Option {...props}>{lableToShow}</components.Option>;
};
