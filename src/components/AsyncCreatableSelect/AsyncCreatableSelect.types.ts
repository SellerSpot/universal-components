import { ReactNode } from 'react';
import { ISelectOption } from '../../typings/common.types';

export interface IAsyncCreatableSelectProps {
    defaultOptions?: ISelectOption[];
    loadOptions: (value: string) => Promise<ISelectOption[]>;
    name?: string;
    placeholder?: string;
    label?: string;
    helperMessage?: {
        enabled: boolean;
        content?: string;
        type?: 'error' | 'message';
    };
    autoFocus?: boolean;
    formatCreateLabel?: (inputValue: string) => ReactNode;
    onCreateOption?: (option: string) => void;
    closeMenuOnSelect?: boolean;
    value?: ISelectOption | ISelectOption[];
    isLoading?: boolean;
    isDisabled?: boolean;
    menuIsOpen?: boolean;
    isMulti?: boolean;
    defaultValue?: ISelectOption;
    onChange?: (option: ISelectOption | ISelectOption[]) => void;
}
