import { ReactNode } from 'react';
import { ISelectOption } from '../../typings/common.types';

export interface ICreatableSelectProps {
    options: ISelectOption[];
    name?: string;
    autoFocus?: boolean;
    label?: string;
    helperMessage?: {
        enabled: boolean;
        content?: string;
        type?: 'error' | 'message';
    };
    placeholder?: string;
    formatCreateLabel?: (inputValue: string) => ReactNode;
    onCreateOption?: (option: string) => void;
    formatOptionLabel?: (option: ISelectOption) => ReactNode;
    closeMenuOnSelect?: boolean;
    value?: ISelectOption | ISelectOption[];
    isLoading?: boolean;
    isDisabled?: boolean;
    menuIsOpen?: boolean;
    isMulti?: boolean;
    defaultValue?: ISelectOption;
    onChange?: (option: ISelectOption | ISelectOption[]) => void;
}
