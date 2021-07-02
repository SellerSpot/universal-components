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
    formatCreateLabel?: (inputValue: string) => string;
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
